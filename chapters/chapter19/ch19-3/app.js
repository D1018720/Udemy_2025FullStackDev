const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Student = require('./models/student');
// 引入 cors middleware 解決資安跨域問題
// const cors = require('cors');
const methodOverride = require('method-override');

mongoose.connect('mongodb://root:root@mongo:27017/app?authSource=admin')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(e => {
    console.error("MongoDB connection error:", e);
  });

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 引入 cors middleware 解決資安跨域問題
// app.use(cors());
app.use(methodOverride('_method'));

// 獲得所有學生的資料
app.get('/students', async (req, res) => {
    try {
        let studentData = await Student.find().exec();
        // return res.send(studentData);
        return res.render('students', { studentData });
    } catch (e) {
        return res.status(500).send("尋找資料時發生錯誤");
    }
});

app.get("/students/new", (req, res) => {
    res.render("new-student-form");
});

// 用 route parameter 獲得單一學生的資料
// app.get('/students/:id', async (req, res) => {
//     let {id} = req.params;
//     try {
//         let foundStudent = await Student.findOne({_id: id}).exec()
//         return res.send(foundStudent);
//     } catch (e) {
//         console.log(e);
//         return res.status(500).send("尋找資料時發生錯誤");
//     }
// });
// 這樣比較美觀
app.get('/students/:_id', async (req, res) => {
    let {_id} = req.params;
    try {
        // _id 名字一樣就可以直接寫成 {_id}
        let foundStudent = await Student.findOne({ _id }).exec()
        // return res.send(foundStudent);
        if (foundStudent != null) {
            return res.render('student-page', { foundStudent });
        } else {
            // 正確的id格式，但資料庫找不到對應的學生
            return res.status(400).render('student-not-found');
        }
    } catch (e) {
        console.log(e);
        // 進到這裡通常是因為_id格式錯誤導致的
        return res.status(400).render('student-not-found');
    }
});

// 透過網頁修改學生資料的表單頁面
app.get('/students/:_id/edit', async (req, res) => {
    let {_id} = req.params;
    try {
        let foundStudent = await Student.findOne({ _id }).exec()
        if (foundStudent != null) {
            return res.render('edit-student', { foundStudent });
        } else {
            return res.status(400).render('student-not-found');
        }
    } catch (e) {
        console.log(e);
        return res.status(400).render('student-not-found');
    }
});

app.post('/students', async (req, res) => {
    try {
        let { name, age, major, merit, other } = req.body;
        let newStudent = new Student({
            name,
            age,
            major,
            scholarship: {
                merit,
                other,
            },
        });
        let saveStudent = await newStudent.save();
        return res.render("student-save-success", { saveStudent });
    } catch (e) {
        console.log(e);
        // status 400 可能是使用者輸入錯誤導致無法新增
        // e.message 是在POSTMAN看到 mongoose validation 錯誤訊息的關鍵
        return res.status(400).render("student-save-fail");
    }
});

app.put('/students/:_id', async (req, res) => {
    try {
        let {_id} = req.params;
        let { name, age, major, merit, other } = req.body;
        let newData = await Student.findOneAndUpdate(
            { _id },
            { name, age, major, scholarship: { merit, other } },
            { new: true, 
              runValidators: true,
              overwrite: true,
            // 因為HTTP put request 要求客戶端提供所有數據，所以
            // 我們需要根據客戶端提供的數據，來更新資料庫內的資料
            // overwrite: true 的意思就是用新的資料覆蓋掉舊的資料
            },
        );
        return res.render('student-update-success', { newData });
    } catch (e) {
        return res.status(400).send(e.message);
    }
});

class NewData {
    constructor() {}
    setProperty(key, value) {
        if (key !== "merit" && key !== "other") {
            this[key] = value;
        } else {
            this[`scholarship.${key}`] = value;
        }
    }   
}

app.patch('/students/:_id', async (req, res) => {
    try {
        let {_id} = req.params;
        let newObject = new NewData();
        // 將req.body的每個屬性都設定到newObject上
        // 因為req.body的屬性樣子會像是{ name, age, major, merit, other }
        // 而要能被資料庫儲存要是像{ name, age, major, "scholarship.merit", "scholarship.other" }
        // 所以才要做一個NewData的class來處理轉換過程
        for (let property in req.body) {
            newObject.setProperty(property, req.body[property]);
        }
        // 不能寫overwrite: true，因為patch是部分更新
        let newData = await Student.findOneAndUpdate({ _id }, newObject,{ new: true, runValidators: true },);
        return res.send({ msg: "學生資料更新成功", updateData: newData });
    } catch (e) {
        return res.status(400).send(e.message);
    }       
});

app.delete('/students/:_id', async (req, res) => {
    try {
        let {_id} = req.params;
        let deleteResult = await Student.deleteOne({ _id }).exec();
        return res.send({ msg: "學生資料刪除成功", deleteResult });
    } catch (e) {
        return res.status(500).send("刪除資料時發生錯誤");
    }
});

app.listen(3000, () => {
  console.log('伺服器正在聆聽port 3000');
});
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const fs = require('fs');

app.set("view engine", "ejs");

mongoose.connect('mongodb://root:root@mongo:27017/app?authSource=admin')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(e => {
    console.error("MongoDB connection error:", e);
  });

const studentSchema = new Schema({
  name: String,
  age: Number,
  major: String,
  scholarship: {
    merit: Number,
    other: Number,
  },
});

// 第一種新增instance methods方法
// const studentSchema = new Schema({
//   name: String,
//   age: Number,
//   major: String,
//   scholarship: {
//     merit: Number,
//     other: Number,
//   },
// },{
//   methods: {
//     printTotalScholarship: function() {
//       return this.scholarship.merit + this.scholarship.other;
//     }
//   }
// });

// 第二種新增instance methods方法
// studentSchema.methods.printTotalScholarship = function() {
//   return this.scholarship.merit + this.scholarship.other;
// };

// 第一種新增static methods方法
// const studentSchema = new Schema({
//   name: String,
//   age: Number,
//   major: String,
//   scholarship: {
//     merit: Number,
//     other: Number,
//   },
// }, {
//   statics: {
//     findAllMajorStudents: function(major) {
//       // return promise
//       return this.find({ major: major }).exec();
//     }
//   }
// });

// 第二種新增static methods方法
// studentSchema.statics.findAllMajorStudents = function(major) {
//   // return promise
//   return this.find({ major: major }).exec();
// };

// 第三種新增static methods方法
// 注意這邊是static沒有加s
studentSchema.static("findAllMajorStudents", function(major) {
  // return promise
  return this.find({ major: major }).exec();
});

// Moongoose Middleware - pre hook
// 在資料被儲存到MongoDB之前，會先執行這個function
studentSchema.pre("save", () => {
  fs.writeFile("record.txt", "有一筆資料被儲存了", (e) => {
    if (e) {
      throw e;
    }
  });
});

// mongoose.model()的第一個參數是String，且要為單數型的大寫英文字母開頭，
// 像是要製作people的collection，就須使用'Person'(Mongoose會自動轉為複數形式)
const Student = mongoose.model('Student', studentSchema);
// const newObject = new Student({
//   name: "Esther",
//   age: 27,
//   major: "Mathematics",
//   scholarship: {
//     merit: 6000,
//     other:7000,
//   },
// });

// // document.save() - 在MongoDB中儲存document。return a Promise。
// newObject.save().then(saveObject => {
//   console.log("資料已經儲存完畢，儲存的資料是:");
//   console.log(saveObject);
// }).catch(e => {
//   console.error(e);
// });

// Student.find()給的是query，執行query需要使用.exec()，並且會回傳一個Promise
// Student.find()
//   .exec()
//   .then(data => {
//     console.log(data);
//   }).catch(e => {
//     console.error(e);
//   });
// 改用async寫
app.get("/", async (req, res) => {
  try {
    const data = await Student.find().exec();
    res.send(data);
  } catch (e) {
    console.error(e);
  }
});

// .updateOne() - 更新符合條件的第一筆資料
// 這裡的msg不會回傳為資料庫的數據，而是更新操作的結果訊息
// runValidators: true 代表在更新時也要執行Schema的驗證
// Student.updateOne({ name: "Esther" }, { age: 28 }, {runValidators: true}).exec()
//   .then(msg => {
//     console.log(msg);
//   })
//   .catch(e => {
//     console.error(e);
//   }); 

// .findOneAndUpdate() - 更新符合條件的第一筆資料，並回傳更新後的document，若有設定new為true。
// 若沒有設定new屬性，或是new設定為false，則回傳更新前的document。
// Student.findOneAndUpdate({ name: "Esther" },{ age: 29 },{ new: true, runValidators: true })
//   .exec()
//   .then(updatedDoc => {
//     console.log(updatedDoc);
//   })
//   .catch(e => {
//     console.error(e);
//   }); 

// .deleteOne() - 刪除符合條件的第一筆資料
// Student.deleteOne({ name: "Esther" })
//   .exec()
//   .then(msg => {  
//     console.log(msg);
//   })
//   .catch(e => {
//     console.error(e);
//   });

// 使用自訂的methods
// Student.find({}).exec()
//   .then(arr => {
//     arr.forEach(student => {
//       console.log(student.name + "的總獎學金總額是: " + student.printTotalScholarship());
//     });
//   })
//   .catch(e => {
//     console.error(e);
//   });

// 使用static methods
Student.findAllMajorStudents("Mathematics").then(data => {
  console.log(data);
}).catch(e => {
  console.error(e);
});

let newStudent = new Student({
  name: "Alice",
  age: 22,
  major: "Physics",
  scholarship: {
    merit: 5000,
    other: 3000,
  },
});

newStudent.save().then((data) => {
  console.log("New student saved.");
}).catch(e => {
  console.error(e);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
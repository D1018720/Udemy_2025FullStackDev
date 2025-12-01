-- Active: 1764593684488@@mysql@3306@app
-- 建立表格
-- CREATE TABLE employees (
--     employeeId INT PRIMARY KEY AUTO_INCREMENT,
--     employeeName VARCHAR(25) NOT NULL,
--     age INT,
--     salary INT DEFAULT 1500,
--     supervisor INT,
--     department INT
-- );

-- DESCRIBE employees;

-- 插入表格資料
-- INSERT INTO employees (employeeId, employeeName, age, salary, supervisor, department) 
-- VALUES (100, 'Josh Donaldson', 35, 3500, NULL, 1);

-- 可以不指定column name，但後面值得填入順序要相同
-- INSERT INTO employees VALUES (101, 'Mike Napoli', 40, 2400, 100, 1);

-- INSERT INTO employees VALUES(102, "Cody Allen", 37, 2400, 100, 2);
-- INSERT INTO employees VALUES(103, "Nolan Ryan", 34, 1500, 101, 1);
-- INSERT INTO employees VALUES(104, "Jason Heyward", 33, 1500, 102, 2);
-- INSERT INTO employees VALUES(105, "Fred Johnson", 30, 1500, 101, 1);
-- INSERT INTO employees VALUES(106, "Zach Britton", 29, 1500, 101, 1);
-- INSERT INTO employees VALUES(108, "Oliver Perez", 30, 1500, 102, 2);

-- 更新表格資料
-- UPDATE employees
-- SET employeeId = 107
-- WHERE employeeId = 108;

-- UPDATE employees
-- SET salary = 1800
-- WHERE salary = 1500;

-- 刪除表格內的資料
-- DELETE FROM employees WHERE employeeId = 107;

-- 可以刪除表格
-- DROP TABLE employees;

-- 查詢表格內所有資料
-- SELECT * FROM employees;

-- 查詢特定欄位資料
-- SELECT employeeId, employeeName, age From employees;

-- ORDER BY 查詢結果案升序(ASC)或降序(DESC)排列，默認按升序排列
-- SELECT * 
-- FROM employees
-- ORDER BY age;

-- WHERE 用於過濾記錄，可用 =, <, <=, >, >=, <>不等於, IN, BETWEEN, != 等比較運算符

-- CREATE TABLE departments (
--     departmentID INT PRIMARY KEY,
--     departmentName VARCHAR(20),
--     address VARCHAR(20),
--     headID INT
-- );

-- INSERT INTO departments VALUES (1, 'North Cement Ltd', 'NY No.11', 101);
-- INSERT INTO departments VALUES (2, 'South Cement Ltd', 'CA No.15', 102);

-- JOIN 用於兩個或多個表之間相關的column組合
-- SELECT *
-- FROM departments d
-- JOIN employees e
-- ON d.headID = e.employeeId;

-- The Cartesian Product 笛卡爾積
-- A x B = {(a, b) | a ∈ A 且 b ∈ B}
-- A = {1, 2} and B = {3, 4}
-- A x B = {(1, 3), (1, 4), (2, 3), (2, 4)}
-- 由小到大排列
-- 在JOIN兩個表時，若不指定任何條件(不寫JOIN ON，只寫JOIN)，則合併的結果為兩個表間的所有可能組合
let age = prompt("請輸入你的年齡:(阿拉伯數字)");

age = Number(age); // convert string to number

if (age >= 0 && age <= 12) {
  alert("您的兒童票一張100元");
} else if (age > 12 && age <= 65) {
  alert("您的成人票一張250元");
} else if (age > 65 && age <= 125) {
  alert("您的敬老票一張150元");
}

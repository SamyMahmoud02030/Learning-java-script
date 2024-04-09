// Assignments-1
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color="blue";
document.querySelector("h1").style.fontSize ="80px";
document.querySelector("h1").style.fontWeight="bold";
document.querySelector("h1").style.textAlign="center";
document.querySelector("h1").style.fontFamily="Arial";

console.log(
    "%cElzero %cWeb %cschool",
    "color: red;font-size: 40px;",
    "color:green;font-weight:bold;font-size: 40px;",
    "background-color:blue; color:white;font-size: 40px;"
);

console.group("hasan");
console.log("samy");
console.log("saeed");
console.log("sayed");
console.group("samy");
console.log("Mahmoud");
console.log("Ahmed");
console.log("Mohammed");
console.group("Mahmoud");
console.log("samy");
console.log("hana");
console.log("hala");
console.groupEnd();
console.group("saeed");
console.log("Ahmed");
console.log("Mohammed");

console.table(["samy", "hana", "hala", "fayruz"]);

// console.log("Iam In Console");
// document.write("Iam In Page");
/* 
console.log("Iam In Console");
document.write("Iam In Page");
*/
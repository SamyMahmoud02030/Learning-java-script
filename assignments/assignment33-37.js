 // Assignment-7 in 

// var Case = 9; // "009"
// let  Case = 20; // "020"
const Case = 110; // "110"

if(Case < 10){
 console.log(`00${Case}`);
}else if(10 < Case && Case < 100){
    console.log(`0${Case}`);
}else if(Case > 100){
    console.log(Case);
}




let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;



// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
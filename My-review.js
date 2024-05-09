// window.alert(10 + 10);
document.write("<h1>I Am Samy</h1>");
console.log("sasa");
console.log(
  "%csamy%cmahmoud",
  "background-color: black;color: #FFF;font-size: 200%",
  "background-color: black;color: #FFF;font-size: 150%"
);
console.table(["samy", "hana", "hala", "fayruz"]);
// console.error("Error");

// Data type
console.log(typeof "samy mahmoud" /*string*/);
console.log(typeof 5000.25 /*Number*/);
console.log(typeof [12, 21, 99] /* Array-->object*/);
console.log(typeof ["samy", "hana", "hala"] /* Array-->object*/);
console.log(typeof { Number: 101, age: 15, country: "Eg" } /*object*/);
console.log(typeof true, undefined, null, false /*Boolean*/);
//variables
var user = "samymahmoud",
  age = 15;
let a = "samy",
  b = "mahmoud";
const c = "hasan";
console.log(user);
console.log(age);

// \ Escape
// \n Escape-with-newline
console.log('Elzero Web "School"');
console.log(
  "Elzero \
Web \
School"
);
console.log("Elzero \nWeb \nSchool");
console.log(a + b + '"" ' + c + " ");
console.log(`${a} " " \\ ${b} ${c}`);

console.log(10 + "samy");
console.log(10 - "samy");
console.log(typeof NaN);
console.log(10 * 2);
console.log(20 / 5);
console.log(2 ** 4);
console.log(10 % 2);
console.log(11 % 2);
console.log(Number("200"));

// - + Unary Plus [Return Number If Its Not Number]
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

//  - - Unary Negation [Return Number If Its Not Number + Negates It]
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);
console.log(Number("100"));

console.log(1000000);
console.log(1000000.0);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);

// Number Methods
console.log((100).toString());
console.log((100).toString());
console.log((100.291644).toFixed(3));
console.log(parseInt("100"));
console.log(parseInt("100.90"));
console.log(parseFloat("100.90"));
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.2));
console.log(Number.isInteger(100));
console.log(Number.isNaN("SASA" ** 2));

console.log(Math.round(99.2));
console.log(Math.round(99.8));
console.log(Math.ceil(99.1));
console.log(Math.floor(99.9));
console.log(Math.trunc(99.9));
console.log(Math.min(100, 200, 300, 400, 500));
console.log(Math.max(100, 200, 300, 400, 500));
console.log(Math.random());

// String Methods
let myname = "  Samy  ";
console.log(myname);
console.log(myname[5]);
console.log(myname[9]);

console.log(myname.charAt(5));
console.log(myname.charAt(9));

console.log(myname.length);
console.log(myname.trim());
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());

zero = "Elzero Web School";

console.log(zero.indexOf("Web", 7));
console.log(zero.indexOf("o"));
console.log(zero.lastIndexOf("o"));
console.log(zero.slice(2, 13));
console.log(zero.slice(-6));
console.log(zero.substring(6, 2));
console.log(zero.substring(2, 6));
console.log(zero.substring(-10, 6));
console.log(zero.substring(zero.length - 5, zero.length - 3));
console.log(zero.substr(0, 6));
console.log(zero.substr(16));
console.log(zero.substr(-3));
console.log(zero.substr(-5, 2));
console.log(zero.repeat(5));
console.log(zero.split());
console.log(zero.split(""));
console.log(zero.split(" "));
console.log(zero.split("Web", 1));
console.log(zero.split("", 6));

console.log(zero.includes("Web"));
console.log(zero.includes("Web", 8));
console.log(zero.startsWith("E"));
console.log(zero.startsWith("E", 2));
console.log(zero.startsWith("z", 2));
console.log(zero.endsWith("o"));
console.log(zero.endsWith("l"));
console.log(zero.endsWith("o", 6));

console.log(10 == "10"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 <= 10);
console.log("Osama" === "Ahmed");
console.log(typeof "Osama" === typeof "Ahmed");

// Logical Operators
// - ! Not
// - && And
// - || Or
console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);
console.log(10 == "10" || 10 > 80 || 10 > 50);

//if
//if else
//else
let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";
// let country = "Egypt";

if (discount === true) {
  price = price - discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);

/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}
// Condition ? If True : If False
theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let rasult = theGender === "Male" ? "Mr" : "Mrs";
document.write(rasult);
console.log(theGender === "Male" ? "Mr" : "Mrs");
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

/*
Logical Or ||
-- Null + Undefined + Any Falsy Value
Nullish Coalescing Operator ??
-- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let prices = "";
console.log(`The Price Is ${prices || null}`);
console.log(`The Price Is ${prices ?? null}`);

// Array Methods
let MyFrends = ["samy", "Mohmoud", "hassan", ["Sayzd", "saeed"]];

console.log(`Hello ${MyFrends[0]}`);
console.log(`Hello ${MyFrends[2]}`);
console.log(`${MyFrends[1][2]}`);
console.log(`Hello ${MyFrends[3][1]}`);
console.log(`${MyFrends[3][1][2]}`);

console.log(MyFrends);
MyFrends[1] = "Elsafy";
console.log(MyFrends);
MyFrends[3] = ["Meeha", "Kamanana"];
console.log(MyFrends);
console.log(Array.isArray(MyFrends));

let MyFamily = ["samy", "Mohmoud", "hassan", "Sayed", "saeed"];

console.log(MyFamily);
MyFamily[MyFamily.length] = "new-item";
console.log(MyFamily);
MyFamily[MyFamily.length] = "new-item";
MyFamily[MyFamily.length - 1] = "End";
console.log(MyFamily);
MyFamily.length = 4;
console.log(MyFamily);

MyFamily.unshift(22, "sasaa");
console.log(MyFamily);
MyFamily.push("", "sas");
console.log(MyFamily);
// MyFamily.shift()
let first = MyFamily.shift();

console.log(MyFamily);

console.log(`First Name Is ${first}`);

let last = MyFamily.pop();

console.log(MyFamily);

console.log(`Last Name Is ${last}`);

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Mahmoud"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", -2));

console.log(myFriends.includes("Ahmed"));
console.log(myFriends.includes("Ahmed", 2));

console.log(myFriends.indexOf("Osama"));

if (myFriends.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}
let ArraySort = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(ArraySort);
console.log(ArraySort.sort());
console.log(ArraySort.reverse());

console.log(ArraySort.sort().reverse());

let ArraySlice = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(ArraySlice);
console.log(ArraySlice.slice());
console.log(ArraySlice.slice(1));
console.log(ArraySlice.slice(1, 3));
console.log(ArraySlice.slice(-3));
console.log(ArraySlice.slice(1, -2));
console.log(ArraySlice.slice(-4, -2));
console.log(ArraySlice);

ArraySlice.splice(-1, 2, "Sameer", "Samara");

console.log(ArraySlice);

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let myFrends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFrends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

/*
  Loop
  - For
  for (1 2 3 {
    // Block Of Code
  }
*/

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]);
}

let myFriend = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
let onlyNames = [];

for (let i = 0; i < myFriend.length; i++) {
  if (typeof myFriend[i] === "string") {
    onlyNames.push(myFriend[i]);
  }
}
console.log(onlyNames);

let products = ["Keyboard", "Mouse", "Pen", "MousePad", "Monitor"];

let colors = ["Green", "auqa", "Black"];

let models = [2023, 2024];

for (let i = 0; i < products.length; i++) {
  console.log("_".repeat(25));
  console.log(products[i]);
  console.log("_".repeat(25));
  for (let a = 0; a < colors.length; a++) {
    console.log(`-${colors[a]}`);
    console.log("#".repeat(25));
    for (let b = 1; b < models.length; b = 1 + b) {
      console.log(models.join("-"));
    }
  }
}

/*
  Loop Control
  - Break
  - Continue
  - Label
*/
let product = ["Keyboard", "Mouse", "Pen", "MousePad", "Monitor", 10, 20];

for (let i = 0; i < product.length; i++) {
  if (product[i] === "Pen") {
    break;
  }
  console.log(product[i]);
}
for (let i = 0; i < product.length; i++) {
  if (typeof product[i] === "number") {
    continue;
  }
  console.log(product[i]);
}

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}

let showCount = 3;
document.write(`<h1>show ${showCount} product</h1>`);
document.write(`<div>`);
for (let i = 0; i < showCount; i++) {
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>-${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" ")}</p>`);
}
document.write(`</div>`);

let myproducts = ["Keyboard", "Mouse", "Pen", "MousePad", "Monitor"];

let index = 0;
while (index < 10) {
  index += 1;
  if (index === 3) {
    break;
  }
  console.log(index);
}

while (index < myproducts.length) {
  console.log(myproducts[index]);
  index += 1;
}

while (false) {
  console.log(i);
  iendex++;
}
// console.log(i)=Error

/*Function
 */

function sayHi(userName) {
  console.log(`Hi ${userName}`);
}
sayHi();
sayHi("Samy");
sayHi("Sayed");
sayHi("Ali");

function sayHello(userName, age) {
  if (age < 6) {
    console.log(`you Are not allawed to you this Application`);
  } else {
    console.log(`Hello ${userName}Your Age Is ${age}`);
  }
}
sayHello("samy", 15);
sayHello("samy", 5);

/*  Function Advanced Examples */
function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(1982, 2024, 2020 && 2019);

function calc(num1, num2) {
  return num1 + num2;
}

console.log(calc(10, 20) + 100);

/*Return && Interrupting*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
}

generate(10, 20);

/*
  Function
  - Default Function Parameters
*/
function Hello(userName = "Name", age = "knowon") {
  //way
  //way
  // if(age===undefined){
  //   age="knowon"
  //way
  //   age = age|| "knowon"
  return `Hello ${userName} Your Age Is ${age}`;
}
console.log(Hello("sasa", 15));

function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Final Value Is ${result}`;
}
console.log(calc(10, 20, 50, 120));

/*
  Function Advanced Practice
*/
function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}
showInfo("Osama", 38, 20, "No", "Html", "CSS");

/*
  Anonymous Function
*/
let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

/* 
Nested Function
*/
// Exampal-1
// function seyMassage(fName,lName){
//   massage=`Hello`
//   function concatMas(){
//     massage=`${massage} ${fName} ${lName}`
//   }
//   concatMas()
//   return massage
// }

// console.log(seyMassage("samy","Mahmoud"))

// Exampal-2
function seyMassage(fName, lName) {
  massage = `Hello`;
  function concatMas() {
    return `${massage} ${fName} ${lName}`;
  }

  return concatMas();
}
console.log(seyMassage("samy", "Mahmoud"));

// Exampal-3
function seyMassage(fName, lName) {
  massage = `Hello`;
  function concatMas() {
    function getFullName() {
      return ` ${fName} ${lName}`;
    }

    return `${massage} ${getFullName()}`;
  }

  return concatMas();
}
console.log(seyMassage("samy", "Mahmoud"));

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// let print = function () {
//   return 10;
// };

// let print = () => 10;

// let print = function (num) {
//   return num;
// };

// let print = num => num;

// let print = function (num1, num2) {
//   return num1 + num2;
// };

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

/*
  Scope
  - Global And Local Scope
*/

var x = 1;
let z = 2;

function showText() {
  var x = 10;
  let z = 20;
  console.log(`Function - From Local ${x}`);
  console.log(`Function - From Local ${z}`);
}

console.log(`From Global ${x}`);
console.log(`From Global ${z}`);

showText();

/*
  Scope
  - Block Scope [If, Switch, For]
*/

var q = 10;

if (10 === 10) {
  let q = 50;
  console.log(`From If Block ${q}`);
}

console.log(`From Global ${q}`);

/*
  Scope
  - Lexical Scope
*/

function parent() {
  let a = 10;

  function child() {
    console.log(a);
    console.log(`From Child ${b}`);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent();

// Higher Order Functions - Map
let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

let addSelf = myNums.map(function (element, index, arr) {
  console.log(`Current Element => ${element}`);
  console.log(`Current Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(`This => ${this}`);
  return element + element;
}, 10);

// let addSelf = myNums.map((a) => a + a);

console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

/*
function
- Map
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");

console.log(sw);

let inv = invertedNumbers.map((ele) => -ele);
console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .join("");
console.log(ign);

/*
function
- filter
*/
let friend = ["saeed", "samy", "zyad", "sahl"];

let GetNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let startbyS = friend.filter(function (s) {
  return s.startsWith("s");
  // =   return s.startsWith("s")? true: false
});
console.log(startbyS);

let EvenNumbers = GetNumber.filter(function (Even) {
  return Even % 2 === 0;
});
console.log(EvenNumbers);

let mix = "A13BS2ZX";

let mixS = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");
console.log(mixS);

/*
function
- Reduce
*/

let nums = [10, 20, 15, 30];

let adds = nums.reduce(function (acc, current, index, arr) {
  return acc + current;
}, 5);

console.log(adds);

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  return acc.length > current.length ? current : acc;
});
console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(
  `${finalString.slice(0, 1).toUpperCase()}${finalString
    .slice(1, finalString.length)
    .toLocaleLowerCase()}`
);

// Opject
let userA = {
  //Properties
  Thename: "samy",
  Theage: 15,
  country: "Egypt",
  "country of": "USA",

  //Methods
  sayto: () => "Pry !",
};
console.log(userA.Thename + userA.Theage);
console.log(userA.sayto());

/*
  Object
  - Dot Notation vs Bracket Notation
*/

let myVar = "country";

console.log(userA.country); // user.country

// console.log(user."country of"); // wilnot work
console.log(userA["country of"]);

console.log(userA.myVar); // wilnot work
console.log(userA[myVar]); // user.country

/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let userB = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(userB.skills);
console.log(userB.skills.join(" | "));
console.log(userB.skills[2]); // Access With Index
console.log(userB.addresses.ksa);
console.log(userB.addresses.egypt.one);
console.log(userB["addresses"].egypt.one);
console.log(userB["addresses"]["egypt"]["one"]);

console.log(userB.checkAv());



/*
  Object
  - Create With new Keyword new Object();
*/

let userC = new Object({
  age: 15,
});
console.log(userC);

userC.age = 21;
userC["cantry"] = "Egypt";

userC.sayHello = function () {
  return `Hello`;
};
console.log(userC);
console.log(userC.age);
console.log(userC.cantry);
console.log(userC.sayHello())

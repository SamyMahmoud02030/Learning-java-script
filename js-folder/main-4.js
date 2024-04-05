// Assignments-4
let mel=100_000
console.log(100_000);
console.log(100000);
console.log(`${mel}`); 
console.log(100000.0.toFixed(1)); 
console.log("1000000"); 
console.log(Number("100000")); 
console.log((Math.trunc(100000.0000000))); 
console.log(100000..toString()); 
console.log(Math.ceil(999999.9)) 
console.log(Number.parseInt(100000.4)) 
console.log(Math.min(100000,200000,300000,400000,500000))
console.log(Math.max(100000,200,300,400,500))
console.log(5e4 + 5e4);



console.log( Number.MIN_SAFE_INTEGER +9007199254740991*2);


console.log( 2^53 -36 -Number.MAX_SAFE_INTEGER );


let myVar = "100.57789 Views";

console.log(+myVar.slice(0,3));
console.log(+myVar.slice(0,6)); 


let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(+myVar.slice(0,2)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(5));
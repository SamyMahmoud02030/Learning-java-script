// Assignment-5
let userName = "Elzero";
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.toLowerCase().slice(0,1)); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.toLowerCase().substring(0, 1)); // e
console.log(userName.slice(0,1).toLowerCase().repeat(3)); // eee


console.log(userName.startsWith("E"))
console.log(userName.endsWith("o"))
console.log(userName.includes("z"))

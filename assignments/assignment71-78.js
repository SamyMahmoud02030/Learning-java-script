let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let Nmix = mix.map(function(el){
   return isNaN(parseInt(el)) ? el :""
}).reduce(function(acc, cur){
    return acc + cur
})
console.log(Nmix)

let myString = "EElllzzzzzzzeroo";
let resault = myString.replace(/(.)\1+/g, "$1").replace(/(.{1})/g, m => m.toLowerCase()).replace(/^./, m => m.toUpperCase());

console.log(resault)


let myArray = ["E", "l", "z", ["e", "r"], "o"].flat()

let newArray= myArray.reduce(function(acc, current){
    return acc+current
})

console.log(newArray)
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let num= numsAndStrings.map(function(el){
    return !isNaN(parseInt(el)) ? el :""
}).map(function(el){return -el
}).reduce(function(acc, current){
    return `${acc}${current}`
})
console.log(num);
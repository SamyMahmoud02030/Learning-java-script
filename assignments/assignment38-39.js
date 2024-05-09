// Assignment-8 
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.reverse().shift()
console.log(myFriends.sort()); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length= num
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];



friends.length= num
friends.shift()
console.log(friends); // ["Eman", "Osama"]



let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrTwo.concat(arrOne)

// Write One Single Line Of Code

console.log(finalArr.sort()); // ["Z", "X", "D", "C", "B", "A"]



let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][num-num].slice(website.length,num+words.length).toUpperCase());



let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if(needle==="JS"){
    haystack="found"
}
else{
    haystack="Notfound"
}
console.log(haystack)
if(needle=="JS"){
    haystack="found"
}
else{
    haystack="Notfound"
}
console.log(haystack)
if(needle="JS"){
    haystack="found"
}
else{
    haystack="Notfound"
}
console.log(haystack)



let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2).sort();

console.log(allArrs.slice(arr2.length,arr2.length+arr2.length).join().toLowerCase()); // fxy
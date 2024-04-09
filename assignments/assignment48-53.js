// Assignment-9 in Elzero Assignments
let start1 = 10;
let end1 = 100;
let exclude = 40;
for (let i = start1 - start1; i < end1 + start1; i = i + start1) {
    if (i === exclude) {
        continue;
    }
    console.log(i)
}




let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2; i > end2; i = i - 1) {

    if (i === start2) {
        console.log(`${start2}`);
    }
    if (i == `${end2}${start2}`) {
        continue;
    }
    console.log(`${end2}${i}`);
    if (i == stop) {
        break;
    }
}



let start3 = 1;
let end = 6;
let breaker = 2;

for (let i = start3; i < start3 + end; i++) {
    console.log(`${i}`)
    for (let i = breaker; i < end; i = i + breaker) {
        console.log(`--${i}`)
    }
}
let index = 10;
let jump = 2;

for (let i = jump * jump; i > index + jump; i = i - 2) {
    console.log(`${i}`)

}
for (let i = index - jump; i > jump - jump; i = i - jump) {
    console.log(i + 2)

}
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0; i < friends.length; i++) {
    if (friends[i].indexOf("A") === 0) {
        continue;
    }
    console.log(`${i}=>${friends[i]}`);
}


let start0 = 0;
let swappedName = "elZerO";

// Output
"ELzERo"



let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

mix.shift()
for(let i=start; i<mix.length;i++){
    if( mix[i] === "A"){
        continue;
    }    if( mix[i] === "B"){
        continue;
    }    if( mix[i] === "C"){
        continue;
    }
    
    console.log(mix[i]);
}

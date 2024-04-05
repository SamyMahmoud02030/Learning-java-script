// Assignment-10 
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while(index<friends.length-1){
    index++
    if( typeof friends[index]=== "number"){
        continue;
    }
    if(friends[index][counter][counter]==friends[counter][counter]){
        continue;
    }
    console.log(`${friends[index]}`)
}

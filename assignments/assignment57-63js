function sayHello(theName = '', theGender = "") {
  console.log(`Hello ${theGender} ${theName}`)
}
sayHello("Osama", "Male");
sayHello("Eman", "Female");
sayHello("Sameh");



function calculate(firstNum, secondNum, operation = 'add' || 'subtract' || 'multiply') {
  if (secondNum === undefined) {
    console.log('Second Number Not Found')
  }
  if (operation === 'add') {
    console.log(firstNum + secondNum)
  }
  if (operation === 'subtract') {
    console.log(firstNum - secondNum)
  }
  if (operation === 'multiply') {
    console.log(firstNum * secondNum)
  }

  return `${firstNum}${secondNum}`
}

calculate(20)
calculate(20, 30)
calculate(20, 30, 'add')
calculate(20, 30, 'subtract')
calculate(20, 30, 'multiply')



function ageInTime(theAge) {
  if (100 < theAge) {
   return 'Age Out Of Range'
  }
  if (10 > theAge) {
   return 'Age Out Of Range'
  }
  return console.table([theAge*12, theAge*52,theAge*465,theAge*11160,theAge*669600,theAge*40176000])
}
console.log(ageInTime(110))
console.log(ageInTime(38));





// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
console.clear()


function checkStatus(a="osama", b=38, c= true ||false) {
  console.log(`Hello ${a}, Your Age Is${b} , You Are ${c} For Hire`)
  if(c=== true){
    c==="Available"
  }
  else{
    c==="not \ Available"
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



function createSelectBox(startYear, endYear) {
  document.write("<select>")
for(let i=startYear; i<=endYear;i++){
  document.write(`<option value=${i}>${i}</option>`)
}
  document.write("</select>")
}
createSelectBox(2003, 2024)
/* <select>
<option value="2000">2003</option>
<option value="2001">2004</option>
<option value="2002">2005</option>
<option value="2003">2006</option>
<option value="2004">2007</option>
<option value="2005">2008</option>
<option value="2006">2009</option>
<option value="2007">2010</option>
<option value="2008">2011</option>
<option value="2009">2012</option>
<option value="2010">2013</option>
<option value="2011">2014</option>
<option value="2012">2015</option>
<option value="2013">2016</option>
<option value="2014">2017</option>
<option value="2015">2018</option>
<option value="2016">2019</option>
<option value="2017">2020</option>
<option value="2018">2021</option>
<option value="2019">2022</option>
<option value="2020">2023</option>
<option value="2021">2024</option>
</select> */




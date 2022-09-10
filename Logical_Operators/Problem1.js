// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties


// Normal If Else

let yob = 2005
let current_year = 2022 

let age = current_year - yob 

// if(age>13 && age<19)
// {
//   console.log ("Teenage")
// }

// else if(age>20 && age<29)
// {
//   console.log("Twenties")
// }



//Ternary opertor

age=>13 && age<=19 ? console.log("Teenage") 
  : age => 20 && age <= 29 ? console.log("Twenties") ;
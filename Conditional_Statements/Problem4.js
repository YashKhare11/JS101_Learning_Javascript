// Given stored username and password and input username and password, Print if the user can login or not.

let register_email = "yash@gmail.com";
let register_password="991255";

let enter_email="yash@gmail.com";
let enter_password="991255";

if(enter_email==register_email){
  if(enter_password==register_password){
    console.log("Login succesfull");
  }
  else{
    console.log("Incorrect password");
  }
}

else{console.log("Incorrect Email")}

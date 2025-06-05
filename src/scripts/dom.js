/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

function fizzBuzz(){
let number= document.getElementById("number").value;
let result ="";
console.log(number);

  if (number%3===0){
     console.log("fizz");
      result += number + "fizz"
  }
  if (number%5===0){
    console.log("buzz");
      result += number + "buzz"}

  if (isNaN(number)){
      console.log("enter the number not the string");
      return result += number + "is not a number"               
  }
  else{   
      return result += number + "fatal error"
  }
  
};
let number = document.getElementById("result").innerHTML;
console.log(result);



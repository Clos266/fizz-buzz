/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
let numbers=[];
function fizzBuzz(){
let number= document.getElementById("number").value;
let result ="";

console.log(number);

 if (isNaN(number)){
      //console.log("enter the number not the string");
      return result += number + "is not a number"               
  }

  if (number%3===0){
     //console.log("fizz");
      result += "fizz "
  }
  if (number%5===0){
    //console.log("buzz");
      result += "buzz"}
      else{
        result = number;
      }
      

 
  numbers.push(result);
  console.log(numbers);
  document.getElementById("result").innerHTML = result;
  document.getElementById("result").innerHTML = numbers;
};





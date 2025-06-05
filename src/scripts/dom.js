/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
let numbers=[];

function fizzBuzz(){

let number= parseInt(document.getElementById("number").value);
let result ="";

console.log(number);

try{
 if (isNaN(number)){
      //console.log("enter the number not the string");
      // return result += number + "is not a number"     
      throw new Error("is not a number")        
  } else {
    if (number % 3 === 0) {
      result += "fizz ";
    }
    if (number % 5 === 0) {
      result += "buzz";
    }
    if (result === "") {
      result = number.toString();
    }
  }
} catch (err) {
  result = `error: ${err.message}`
}

 
  numbers.push({
    numero: isNaN(number) ? document.getElementById("number").value : number,
    resultado: result.trim()
  });
  console.log(numbers);
  document.getElementById("result").innerHTML = result;
  numbers.forEach(number => result.innerHTML += "<br>" + Object.values(number).join(" "));
  
};
;





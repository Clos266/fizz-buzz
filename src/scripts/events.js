/**
 * Responsabilidad: gestionar los eventos
 * */ 
import { fizzBuzz, numbers } from './fizzBuzz.js';

export function ejecutarFizzBuzz(e) {
  e.preventDefault();
  let number = parseInt(document.getElementById("number").value);

  let response = fizzBuzz(number);

  let result2 = document.getElementById("result2");
  result2.innerHTML = "";
  numbers.forEach(number => {
    result2.innerHTML += "<br>" + Object.values(number).join(" &#8594; ");
  });
}

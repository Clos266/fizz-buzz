/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */ 
/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */
export let numbers=[];
export function fizzBuzz(number){
let result = "";
let message = "";
try{
 if (isNaN(number)){
  throw new Error("is not a number") 
  } else {
       if (number % 3 === 0 && number % 5 === 0) {
      result = "FizzBuzz";
      message = "El número divisible por 3 y 5";
    }
    else if (number % 3 === 0) {
      result = "Fizz";
      message = "El número es divisible por 3";
    }
    else if (number % 5 === 0) {
      result = "Buzz";
      message = "El número es divisible por 5";

    }
    else {
      result = number.toString();
      message = "El número no divisible por 3 ni 5";
    }
  }
  numbers.push({
    numero: isNaN(number) ? document.getElementById("number").value : number,
    resultado: result.trim()
  });
  
} catch (err) {
  result = `error: ${err.message}`
}
 
  return {
        status: "ok",
        message: message,
        data: {
            input: number,
            output: result
        }
    };
  };
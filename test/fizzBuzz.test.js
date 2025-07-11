import { expect, describe, test } from "@jest/globals";
import { fizzBuzz } from "../src/scripts/fizzBuzz";

describe('FizzBuzz test for multiples of 3 and 5', () => {
       
        test('returns Fizz when multiple of 3', () => {
     
            let valor_entrada = 9;
            let respuesta_esperada = {
                status: "ok", // Código indicando éxito
                message: "El número es divisible por 3", // Mensaje de validación
                data: {
                    input: 9,  // Número evaluado
                    output: "Fizz" // Resultado esperado
                }}

            // Act: ejecutar el escenario
            let resultado = fizzBuzz(valor_entrada);
        
            // Assert: Comprobar el escenario
            expect(typeof resultado.data.input).toBe("number"); // valida que input sea un número
            expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
            expect(resultado.data.output).toBe("Fizz"); // valida que el valor output corresponda al expect
        });

        test('returns Buzz when multiple of 5', () => {
            let valor_entrada = 10;
            let respuesta_esperada = {
                status: "ok", 
                message: "El número es divisible por 5", 
                data: {
                    input: 10,  
                    output: "Buzz" 
                }}

            let resultado = fizzBuzz(valor_entrada);
        
            expect(typeof resultado.data.input).toBe("number"); 
            expect(resultado).toEqual(respuesta_esperada); 
            expect(resultado.data.output).toBe("Buzz"); 
        })

        test('returns FizzBuzz when multiple of 3 and 5', () => {
            let valor_entrada = 15;
            let respuesta_esperada = {
                status: "ok", 
                message: "El número divisible por 3 y 5", 
                data: {
                    input: 15,  
                    output: "FizzBuzz" 
                }}

            let resultado = fizzBuzz(valor_entrada);
        
            expect(typeof resultado.data.input).toBe("number"); 
            expect(resultado).toEqual(respuesta_esperada); 
            expect(resultado.data.output).toBe("FizzBuzz"); 
            //Gherking test
            /**
             * Scenario: Número divisible por 3 y 5
             * Given un número 15
             * When el número es procesado
             * Then se muestra "FizzBuzz"
             */
        })

        test('returns number when is not multiple of 3 and 5', () => {

             let valor_entrada = 8;
            let respuesta_esperada = {
                status: "ok", 
                message: "El número no divisible por 3 ni 5", 
                data: {
                    input: 8,  
                    output: "8" 
                }}

            let resultado = fizzBuzz(valor_entrada);
        
            expect(typeof resultado.data.input).toBe("number"); 
            expect(resultado).toEqual(respuesta_esperada); 
            expect(resultado.data.output).toBe("8"); 
            //Gherking test
            /**
             * Scenario: Número no divisible por 3 ni 5
             * Given un número 8
             * When el número es procesado
             * Then se muestra el número ingresado
             */
        })
    }
    
)

import {generarFizzBuzz,generarSecuenciaFizzBuzz} from "./fizzbuzz";


describe("FizzBuzz",()=>{
    it("Generar el mismo numero si no sigue ninguna regla",()=>{
        
        expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("Generar el mismo numero si no sigue ninguna regla",()=>{
        expect(generarFizzBuzz(2)).toEqual("2");
    });
    it("Generar Fizz para el numero 3",()=>{
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });
    it("Generar Fizz para multiplos de 3",()=>{
        expect(generarFizzBuzz(6)).toEqual("Fizz");
    });
    it("Generar Fizz para multiplos de 3",()=>{
        expect(generarFizzBuzz(12)).toEqual("Fizz");
    });
    it("Generar Buzz para el valor de 5",()=>{
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    });
    it("Generar Buzz para multiplos de 5",()=>{
        expect(generarFizzBuzz(10)).toEqual("Buzz");
    });
    it("Generar Buzz para multiplos de 5",()=>{
        expect(generarFizzBuzz(20)).toEqual("Buzz");
    });
    it("Genera fizz y buzz en una secuencia segun el numero",()=>{
        expect(generarSecuenciaFizzBuzz(4)).toEqual("1 2 Fizz 4");
    });
    it("Genera fizz y buzz en una secuencia segun el numero",()=>{
        expect(generarSecuenciaFizzBuzz(10)).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz");
    });
    it("Generar FizzBuzz si el numero es multiplo de 3 y 5 a la vez",()=>{
        expect(generarFizzBuzz(30)).toEqual("FizzBuzz");
    });
    
})


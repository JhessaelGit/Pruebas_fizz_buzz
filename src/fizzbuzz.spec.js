import sumador from "./sumador"
import generarFizzBuzz from "./fizzbuzz";
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
    it("Generar Fizz para multiplos de 6",()=>{
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });
    it("Generar Buzz para el valor de 5",()=>{
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    });
})

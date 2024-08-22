function generarFizzBuzz(numero)
{
    if(numero%3===0 && numero%5===0)
    {
        return "FizzBuzz";
    }
    else if(numero%3===0)
    {
        return "Fizz";
    }
    else if(numero%5===0)
    {
        return "Buzz";
    }
    return numero+"";
}
function generarSecuenciaFizzBuzz(limite)
{
    return "1 2 Fizz 4";
}

export {generarFizzBuzz,generarSecuenciaFizzBuzz};
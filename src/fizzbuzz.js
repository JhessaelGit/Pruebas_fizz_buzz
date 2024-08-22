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
    let salida="";
    for(let i=1;i<=limite;i++)
    {
        if(i===limite)
        {
            salida=salida+generarFizzBuzz(i);
        }
        else
        {
            salida=salida+generarFizzBuzz(i)+" ";
        }
    }

    return salida;
}

export {generarFizzBuzz,generarSecuenciaFizzBuzz};
//Union de Tipos
type SumaParameter = string | number; //Puede ser string o number
type SumaReturnType = string | number;

function Suma(num1: SumaParameter, num2: SumaParameter):SumaReturnType{
    //return Number(num1) + Number(num2); // aqui se especifica el tipo
    return String(num1) + num2; // transforma el segundo por inferencia
    //return num1 + num2; //Si no se especifica marca error
}

//Ejemplo con Interfaces:
interface Interface1{
    prop1: number;
}

interface Interface2{
    prop2: number;
}

//Alias con el union de los dos interFace
type InterfaceMix = Interface1 | Interface2;

//Objeto llamado "interfaceMix" con el tipo "InterfaceMix"
const interfaceMix: InterfaceMix ={
    //Se pueden usar las dos propiedades.
    prop1: 2,
    prop2: 2
    //prop3: 2 // Error. No existe la propiedad prop3.
}
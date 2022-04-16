//tipo abstracto. Contrato define que se espera para sierto objeto.

type Dni = number;

//typo: Elvis sign / Elvis operator ?: (se parece al copete de Elvis P.)
//Entre el atributo y typo. Señala que el parametro es opcional
interface Persona{
    altura ?: number;
    edad: number;
    nombre: string;
    apellido: string;
    dni: Dni;
}

//Cuando definanos un objeto se puede utilizar la interface como un typo
//Igual que una clase
const persona: Persona = {
    //altura: 1.69,
    edad: 27,
    nombre: 'Alan',
    apellido: 'Buscaglia',
    dni: 321654987
}
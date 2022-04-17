//Clase base persona
class Persona2 {
    private edad: number;
    private altura: number;
    private dni: string;

    constructor(edad: number, altura: number, dni: string){
        this.edad = edad;
        this.altura = altura;
        this.dni = dni; 
    }
}
//extension a persona:
class Alumno extends Persona2 {
    private matricula: string;

    constructor(edad: number, altura: number, dni: string, matricula: string){
        super(edad, altura,dni);
        this.matricula = matricula;
    }
}

let persona2: Persona2 = new Persona2(27, 1.69, '123546');
let alumno: Alumno = new Alumno(27, 1.69, '123546', '123');
/** SHAPES **/
//Un alumno es una persona
persona2 = alumno;
//Pero no todas las personas son alumnos
alumno = persona2;

//A un objeto alumno se le puede asignar a uno persona por ser estension de este
//Ya cuenta con los datos para "llenar" al objeto.
//Pero un objeto persona no puede ser asignado a uno alumno.
//El objeto persona no tiene la referencias de alumno. Falta matricula.
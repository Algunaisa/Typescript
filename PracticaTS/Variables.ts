//Agregar tipo
const a:string ='hola';

let b:string='Hi';
b='Hello';
b=2;

//si no se asigna un tipo se infiere = type inference
let b2='Hi';
b2='Hello';
b2=2;

let c:number=10;
c=b2;

const num1 =10;
const num2 =20;
c = num1 + num2;

//JavascriptVanilla
function suma_(num1, num2){
    return num1 + num2;
}

//any
let anyValue: any = 10;
anyValue = 'hola'; 

//se recomienda agregar tipo
function suma(num1:number, num2:number):number{
    return num1 + num2;
}

//asignar un alias = type. Conotacion semantico, valor represemtativo. Keyword.
type dni = number;
let dniNumber: dni = 123
let dniNumber2: dni = 321
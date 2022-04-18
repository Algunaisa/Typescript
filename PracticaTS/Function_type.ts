//Ordenar un tipo

//Crear un alias con la estructura de cb
type CallBackError = Error | null;
type CallBack = (error: CallBackError, response: Object)=>void;
type SendRequest = (cb: CallBack) => void;

//Como constante
const sendRequest: SendRequest = (cb: CallBack): void => {
    if (cb){
        cb(null, {message: 'todo salio como lo planeamos'});
    }
}

//Como function
function sendRequest_(cb: CallBack): void {
    if (cb){
        cb(null, {message: 'todo salio como lo planeamos'});
    }
}

/**
 * Los Functions types permiten definir la estructura de nuestra función, 
 * como por ejemplo los argumentos y retornos de la mísma.
 */

//Ejemplo Area de un rectangulo:

type AreaRectangulo = (altura: number,
                        base: number) => number;

const getAreaRectangulo: AreaRectangulo = (altura: number, 
                                            base: number): number =>{
                                                return altura * base;
                                            }
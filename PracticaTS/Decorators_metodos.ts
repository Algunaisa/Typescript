
//logica de nuestro decorador
//target: elemento que contiene a lo que estamos extendiendo (Persona3)
//Key: quien esta utilizando esta logica extendida (sayMyName)
function log(target, key){
    console.log(key + 'se ha llamado');
}


class Persona3{
    private name: string;

    constructor(name:string){
        this.name = name;
    }

    //Inplementar function log al metodo que le siga.
    @log
    sayMyName(){
        console.log(this.name);
    }
}

const persona3: Persona3 = new Persona3('Isa');
persona3.sayMyName(); // 'Isa' // 'sayMyName se ha llamado'
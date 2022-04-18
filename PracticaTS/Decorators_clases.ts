function init(target) {
    return class extends target{
        nombre = 'Isa';
        apellido: 'Flores';

        sayMyName(){ // alt 96 `
            return `${this.nombre} ${this.apellido}`;
        }
    }
}

//Extender una funcionalidad de cierto elemento 2:17
@init //elemento que se esta extendiendo
class P{
    constructor(){}

    sayMyName(){}
}

const p: P = new P();
console.log(p.sayMyName()); // Isa Flores

//cuando se instancia la clase P se extiende a init.
//init extiende clase target.
//Se sobreescribe, en este caso se agregan nuevas propiedades (nombre y apellido).
//Se sobreescribe la logica contenida en sayMyName

function logProperty(target, key){
    let _val = this[key];
    const getter = () => {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    }

    const setter = (newValue)=>{
        console.log(`set: ${key} => ${newValue}`);
        _val = newValue;
    }

    const objectProperty = {
        get: getter,
        set: setter
    }
//terget: contiene lo que estamos extendiendo 
//key: a quien estamos extendiendo
//objeto
    Object.defineProperty(target, key, objectProperty);
}

class Persona4{
    @logProperty
    public name: string;

    constructor(name:string){
        this.name = name;
    }
}

const p_ = new Persona4('Isa');
p_.name = 'Platzi'; // Set ${key} => ${newValue}
                    // Set name => 'Platzi'
const nameFromClass = p_.name; // Get name => 'Platzi'
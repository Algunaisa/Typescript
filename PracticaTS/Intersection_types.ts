interface Interface_1{
    prop1: number;
}

interface Interface_2{
    prop2: number;
    prop3: number;
}

interface Interface_3{
    prop2: number;
}

//And es interseccion, lo que ambos comparten.
type InterfaceMix_ = Interface_1 & Interface_2 & Interface_3;

const interfaceMix_: InterfaceMix_ = {
    //Todas las propiedades DEBEN usarse.
    prop1: 2,
    prop2: 2,
    prop3: 3
}
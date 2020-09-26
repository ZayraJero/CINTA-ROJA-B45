class Animal {
    constructor(nombre, ojos, estaVivo, cantidadPatas, edad) {
        this.nombre = nombre;
        this.ojos = ojos;
        this.estaVivo = estaVivo;
        this.cantidadPatas = cantidadPatas;
        this.edad = edad;
    };
    comunicar() {
        console.log('Sí');
    };
    respirar() {
        console.log('también');
    }
}

let tortuga = new Animal('tortuga', 2, true, 4);
console.log(tortuga);

class Humano extends Animal {
    constructor(nombre, ojos, estaVivo, cantidadPatas, edad, trabajo, numCelular) {
        super(nombre, ojos, estaVivo, cantidadPatas, edad);
        this.trabajo = trabajo;
        this.numCelular = numCelular;
    }
    trabajar() {
        console.log('Sí');
    }
    viajar() {
        console.log('también');
    }
}

let Rene = new Humano('Rene', 1, false, 2, 70, 'ya no', 1111);
console.log(Rene);

Rene.trabajar();
Rene.viajar();
Rene.comunicar();
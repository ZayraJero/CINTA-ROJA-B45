//Objeto literal
let person1 = {
    name: 'Diana',
    lastName: 'Perez',
    nationality: 'MX',
    food: 'chilaquiles'
};

console.log(person1);
console.log(person1.name);

let dog = {
    name: 'firulais',
    color: 'gris',
    gender: 'm',

    //metodo
    walk() {
        console.log('obvio');
    },
}

console.log(dog);
dog.walk();

let car = {
    motor: 'v8',
    doors: 4,
    color: 'morado',
    year: 2021,

    girarDerecha() {
        console.log('si');
    },
    girarIzquierda() {
        console.log('también');
    },
    pintarCoche(nuevoColor) {
        this.color = nuevoColor;
    }
}

console.log(car);
car.girarDerecha();
car.pintarCoche('verde');

car.transmision = 'automatica';
car.tapiceria = 'sintetica';
console.log(car);

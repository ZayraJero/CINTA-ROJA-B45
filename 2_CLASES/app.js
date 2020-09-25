//OBJETOS LITERALES
// let user1 = {
//     name: 'Diego',
//     age: 25
// };

// console.log(user1);

// let user2 = {
//     name: 'Alejandra',
//     age: 21,
// };

// console.log(user2);
// console.log(user2.age);

//CLASES
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let user3 = new User('Hana', 23);

// console.log(user3);
// console.log(user3.name);

class Bank {
    constructor(name, users, phone, location, employees) {
        this.name = name;
        this.users = users;
        this.phone = phone;
        this.location = location;
        this.employees = employees;
    };
    giveLoans() {
        console.log('me debes!');
    };
    charge() {
        console.log('págame');
    };
    hireEmployees(newEmployees) {
        this.employees += newEmployees;
    }
};

let HSBC = new Bank('HSBC', 1000000, 'México', 3333333, 200);
console.log(HSBC);

HSBC.hireEmployees(20);
console.log(HSBC);
HSBC.charge();

class Drink {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
    };
    coca() {
        console.log('bien');
    };
    setMedida(newMedida) {
        this.medida = newMedida;
    };
    getMedida() {
        return this.medida;
    }
}

let margarita = new Drink('Margarita', ['tequila', 'limón', 'sal']);
console.log(margarita);

let carajillo = new Drink('carajillo', ['expresso', 'alcohol 43', 'hielos']);
console.log(carajillo);

carajillo.price = 200;
console.log(carajillo);

carajillo.setMedida(250);
console.log(carajillo);
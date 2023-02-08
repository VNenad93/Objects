class Animal {
    name;
    age;
    type;

    constructor(name, age, type) {
        this.name = name,
        this.age = age,
        this.type = type
    }

    print() {
        return `This animal is called ${this.name} and is ${this.age} old and is ${this.type} type`
    }

}

class Car {
    brand;
    fuel;
    age;

    constructor(brand, fuel, age) {
        this.brand = brand;
        this.fuel = fuel;
        this.age = age;
    }

    print() {
        return `This car is the ${this.brand} and is ${this.fuel} fuel type and is built in ${this.age}`
    }
}

class Person {
    name;
    job;
    location;

    constructor(name, job, location) {
        this.name = name;
        this.job = job;
        this.location = location
    }

    print() {
        return `${this.name} is working in ${this.job} and is located in ${this.location}`
    }
}

const kiki = new Animal('Kiki', 4, 'cat')
const jacky = new Animal('Jacky', 10, 'dog')

class Pupu extends Animal {
    hasWings;

    constructor(name, age, type, wings) {
        super(name, age, type);
        this.hasWings = wings
    }

    wings() {
        if(this.hasWings) {
            return ' and it has wings'
        }
    }

}

class Marriage extends Person {
    isMarried;

    constructor(name, job, location, isMarried) {
        super(name, job, location)
        this.isMarried = isMarried
    }

    marriage() {
        if(this.isMarried) {
            return ' and is married'
        }
    }
}

const tommy = new Marriage('Tommy', 'IT', 'Vienna', true)

console.log(tommy.print() + tommy.marriage())

document.getElementById('text').innerHTML = `
    <h1>${tommy.print()}${tommy.marriage()}</h1>
`
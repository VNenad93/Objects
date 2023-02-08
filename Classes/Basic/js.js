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

class motorbike extends Car {
    numberWheels;

    constructor(brand, fuel, age, numberWheels) {
        super(brand, fuel, age)

        this.numberWheels = numberWheels
    }

    print() {
        return `This motorbike is the brand of ${this.brand} is ${this.fuel} fuel type. It's built in ${this.age} and has ${this.numberWheels} wheels`
    }
}

const kawasaki = new motorbike('Kawasaki', 'gasoline', 2020, 2)

class fish extends Animal {
    habitat;

    constructor(name,age,type,habitat) {
        super(name,age,type) 
        this.habitat = habitat
    }

    print() {
        return `Fish is an ${this.type} and its living on ${this.habitat}. Lifespan is around ${this.age} years and its name is ${this.name}`
    }
}

const shark = new fish('Shark', 30, 'Animal', 'Sea')

console.log(shark.print())
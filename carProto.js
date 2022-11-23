/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
        this.accelerate = () => {
            this.currentSpeed++;
        }
        this.brake = () => {
            this.currentSpeed--;
        }
    }
    // accelerate = () => {
    //         this.currentSpeed++;
    //     }
    // brake = () => {
    //         this.currentSpeed--;
    //     }
    toString = () => {
        return (`model:${this.model}, currentSpeed:${this.currentSpeed}`);
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const car1 = new Car('Honda');
car1.accelerate();
car1.accelerate();
car1.brake();
console.log(car1.toString());
console.log(car1);

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    constructor(model) {
        super(model);
    }

    accelerate () {
        super.accelerate();
        super.accelerate();
    }

    toString() {
        return (`model:${this.model}, currentSpeed:${this.currentSpeed}`)
    }
}
const car2 = new ElectricCar('Nissan');
car2.accelerate();
car2.accelerate();
car2.brake();
console.log(car2.toString());
console.log(car2);

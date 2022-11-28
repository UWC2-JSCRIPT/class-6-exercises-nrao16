/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
    }
    // prototype methods
    accelerate() {
            this.currentSpeed++;
        }
    brake(){
            this.currentSpeed--;
        }
    toString(){
        return (`model:${this.model}, currentSpeed:${this.currentSpeed}`);
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const car1 = new Car('Honda');
car1.accelerate();
car1.accelerate();
car1.brake();

console.log(car1.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    constructor(model) {
        super(model);
        this.motor = 'electric';
    }
    accelerate () {
        super.accelerate();
        super.accelerate();
    }
    toString() {
        return (`Electric model:${this.model}, currentSpeed:${this.currentSpeed}`)
    }
}
const car2 = new ElectricCar('Nissan');
car2.accelerate();
car2.accelerate();
car2.brake();

console.log(car2.toString());

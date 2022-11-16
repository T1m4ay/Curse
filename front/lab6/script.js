function task1() {
  function Car(pMake, pSpeed) {
    this.make = pMake;
    this.speed = pSpeed;
    this.accelerate = function () {
      console.log(this.speed + 10);
    };
    this.brake = function () {
      console.log(this.speed - 5);
    };
  }

  var bmw = new Car("BMW", 120);
  var mercedes = new Car("Mercedes", 95);

  bmw.accelerate();
  bmw.brake();

  mercedes.accelerate();
  mercedes.brake();
}

function task2() {
  class Car {
    #name;
    #speed;
    constructor(name, speed) {
      this.#name = name;
      this.#speed = speed;
    }
    accelerate() {
      this.#speed += 10;
      console.log(this.getSpeed);
    }
    brake() {
      this.#speed -= 5;
      console.log(this.getSpeed);
    }
    getSpeed() {
      return this.#speed;
    }
    getSpeedUS() {
      return this.getSpeed * 0, 62;
    }
  }

  let car = new Car("Ford", 120);
  console.log(car.getSpeed());
  console.log(car.getSpeedUS());
}
function task34() {
  class Car {
    constructor(name, speed) {
      this.name = name;
      this.speed = speed;
    }
    accelerate() {
      this.speed += 10;
      console.log(this.getSpeed);
    }
    brake() {
      this.speed -= 5;
      console.log(this.getSpeed);
    }
    getSpeed() {
      return this.speed;
    }
    getSpeedUS() {
      return this.getSpeed * 0.62;
    }
  }
  class EV extends Car {
    #charge;
    constructor(name, speed, charge) {
      super(name, speed);
      this.#charge = charge;
    }
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
    }
    accelerate() {
      this.speed += 20;
      this.#charge -= 1;
      this.print();
    }
    brake() {
      this.speed -= 10;
      this.#charge -= 1;
      this.print();
    }
    print() {
      console.log(
        `Tesla going at ${this.speed}km/h, with a charge of ${this.#charge}%`
      );
    }
  }
  const teslaev = new EV("Tesla", 120, 23);
  teslaev.print();
  teslaev.accelerate();
  teslaev.brake();
  teslaev.chargeBattery(80);
  teslaev.print();
}

task34();

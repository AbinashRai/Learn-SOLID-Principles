class vehicle {
    protected numberOfWheels: number = 0;
  
    constructor(wheels: number) {
      this.numberOfWheels = wheels;
    }
  
    hasWheels(): void {
      console.log(`Vehicle has ${this.numberOfWheels} wheels.`);
    }
  }
  
  class engineVehicles extends vehicle {
    hasEngine(): void {
      console.log("Engine vehicle has an engine.");
    }
  
 
    hasWheels(): void {
      console.log(`Engine vehicle has ${this.numberOfWheels} wheels.`);
    }
  }
  
  class bicycle extends vehicle {
    constructor() {
      super(2); 
    }
  }
  
  class car extends engineVehicles {
    constructor() {
      super(4); 
    }
  
    hasEngine(): void {
      console.log("Car has an engine.");
    }
  }
  
  class bike extends engineVehicles {
    constructor() {
      super(2);
    }
  
    hasEngine(): void {
      console.log("Bike has an engine.");
    }
  }
  

const myCar = new car();
myCar.hasWheels();
myCar.hasEngine();

const myBike = new bike();
myBike.hasWheels();
myBike.hasEngine();

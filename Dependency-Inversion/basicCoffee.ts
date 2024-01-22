import CoffeeBrewer from "./coffee";

class BasicCoffeeMachine implements CoffeeBrewer {
  brewCoffee(): string {
    return "Brewing basic coffee";
  }
}

export default BasicCoffeeMachine;
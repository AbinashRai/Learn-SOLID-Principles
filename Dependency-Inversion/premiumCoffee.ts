import CoffeeBrewer from "./coffee";

class PremiumCoffeeMachine implements CoffeeBrewer {
  brewCoffee(): string {
    return "Brewing premium coffee";
  }
}

export default PremiumCoffeeMachine;
import CoffeeBrewer from "./coffee";

class CoffeeShop {
    private coffeeBrewer: CoffeeBrewer;

    constructor(coffeeBrewer: CoffeeBrewer) {
        this.coffeeBrewer = coffeeBrewer;
    }

    serveCoffee(): string {
        return this.coffeeBrewer.brewCoffee();
    }
}

export default CoffeeShop;
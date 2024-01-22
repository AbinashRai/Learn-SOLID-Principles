import BasicCoffeeMachine from "./basicCoffee";
import PremiumCoffeeMachine from "./premiumCoffee";
import CoffeeShop from "./coffeeShop";

const basicMachine = new BasicCoffeeMachine();
const premiumMachine = new PremiumCoffeeMachine();

const basicCoffeeShop = new CoffeeShop(basicMachine);
const premiumCoffeeShop = new CoffeeShop(premiumMachine);

console.log(basicCoffeeShop.serveCoffee());
console.log(premiumCoffeeShop.serveCoffee());

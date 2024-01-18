import Add from "./Add";
import Subtract from "./Subtract";
import Multiply from "./Multiply";
import Divide from "./Divide";

const addOperation = new Add(5, 3);
const subtractOperation = new Subtract(8, 3);
const multiplyOperation = new Multiply(4, 6);
const divideOperation = new Divide(10, 2);

addOperation.perform();
console.log(`Add result: ${addOperation.getResult()}`);

subtractOperation.perform();
console.log(`Subtract result: ${subtractOperation.getResult()}`);

multiplyOperation.perform();
console.log(`Multiply result: ${multiplyOperation.getResult()}`);

divideOperation.perform();
console.log(`Divide result: ${divideOperation.getResult()}`);

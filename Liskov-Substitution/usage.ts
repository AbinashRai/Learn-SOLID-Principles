import Rectangle from "./rectangle";
import Square from "./square";
import AreaCalculator from "./areaCalculator";

const rectangle = new Rectangle(4, 5);
const square = new Square(4);

const rectangleArea = AreaCalculator.calculateArea(rectangle);
console.log(`Rectangle Area: ${rectangleArea}`);

const squareArea = AreaCalculator.calculateArea(square);
console.log(`Square Area: ${squareArea}`);

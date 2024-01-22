import Shape from "./shape";
class AreaCalculator {
    static calculateArea(shape: Shape): number {
      return shape.area();
    }
  }

  export default AreaCalculator;
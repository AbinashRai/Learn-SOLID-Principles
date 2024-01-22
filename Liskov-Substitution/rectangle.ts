import Shape from "./shape";
class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}
  
    area(): number {
      return this.width * this.height;
    }
  }

  export default Rectangle;
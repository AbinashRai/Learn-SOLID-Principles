import Shape from "./shape";
class Square implements Shape {
    constructor(public side: number) {}
  
    area(): number {
      return this.side * this.side;
    }
  }

  export default Square;
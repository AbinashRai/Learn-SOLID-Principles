import Calculator from "./calculator";
class Subtract implements Calculator {
  private firstNumber: number;
  private secondNumber: number;
  private result: number = 0;

  constructor(firstNumber: number, secondNumber: number) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  perform(): void {
    this.result = this.firstNumber - this.secondNumber;
  }

  getResult(): number {
    return this.result;
  }
}

export default Subtract;

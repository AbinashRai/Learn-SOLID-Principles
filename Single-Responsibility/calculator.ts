class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      return a - b;
    }
  }
  
  class CalculatorLogger {
    logAdd(a: number, b: number, result: number): void {
      console.log(`Added ${a} and ${b}. Result: ${result}`);
    }
  
    logSub(a: number, b: number, result: number): void {
      console.log(`Subtracted ${b} from ${a}. Result: ${result}`);
    }
  }


  const calculator = new Calculator();
  const calculatorLogger = new CalculatorLogger();
  
  const resultAdd = calculator.add(9, 3);
  calculatorLogger.logAdd(9, 3, resultAdd);
  
  const resultSub = calculator.subtract(14, 2);
  calculatorLogger.logSub(14, 2, resultSub);
  
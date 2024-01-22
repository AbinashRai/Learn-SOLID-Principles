class Patient {
    constructor(public id: number, public name: string, public age: number) {}
  
    getInfo(): string {
      return `Patient ${this.name}, Age: ${this.age}, ID: ${this.id}`;
    }
  }
  

  const patient = new Patient(1, 'John Doe', 25);
  console.log(patient.getInfo());
  
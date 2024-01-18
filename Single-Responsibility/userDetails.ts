class ValidatePerson {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  } 

  ValidateName(): boolean {
    return this.name.length > 3;
  }

  ValidateAge(): boolean {
    return this.age > 18;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }
}

class DisplayPerson {
  private personValidator: ValidatePerson;

  constructor(name: string, age: number) {
    this.personValidator = new ValidatePerson(name, age);
  }

  Display(): void {
    if (
      this.personValidator.ValidateName() &&
      this.personValidator.ValidateAge()
    ) {
      console.log(
        `Name: ${this.personValidator.getName()} and Age: ${this.personValidator.getAge()}`
      );
    } else {
      console.log("Invalid username or age");
    }
  }
}

const person = new DisplayPerson("Henry Wills", 25);
person.Display();

const person1 = new DisplayPerson("So", 12);
person1.Display();

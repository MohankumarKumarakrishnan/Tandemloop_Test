class Calculator {
  constructor(a, b) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
  }

  operate(type) {
    switch (type) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        if (this.b === 0) return "Error: Division by zero";
        return this.a / this.b;
      default:
        return "Invalid operation";
    }
  }
}


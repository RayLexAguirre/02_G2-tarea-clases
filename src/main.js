import Calculator from "./calculator.js";
import Range from "./range.js";

let calculator1 = new Calculator();
let calculator2 = new Calculator();

let range1 = new Range(0, 10);

console.log("Calculadora")
console.log((calculator1.add(8)));
console.log((calculator1.add(9)));
console.log(calculator1.multiply(4));
console.log((calculator2.add(5)));
console.log(calculator2.power(6));
console.log(calculator1.reset());

console.log("Rango");
console.log(range1.getAllNumbers());
console.log(range1.getAllNumbersInverted());
console.log(range1.getAllEven());
console.log(range1.getSum());
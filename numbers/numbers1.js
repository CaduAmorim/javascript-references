var numero1 = 1000;
var numero2 = 10.3;
var numero3 = 9.656;

var teste1 = numero1.toExponential();
var teste2 = numero1.toExponential(2);
var teste3 = numero1.toExponential(3);
var teste4 = numero2.toFixed();
var teste5 = numero2.toFixed(2);
var teste6 = numero2.toFixed(3);
var teste7 = numero3.toPrecision();
var teste8 = numero3.toPrecision(2);
var teste9 = numero3.toPrecision(3);

console.log(numero1);
console.log(teste1);
console.log(teste2);
console.log(teste3);
console.log(numero2);
console.log(teste4);
console.log(teste5);
console.log(teste6);
console.log(teste7);
console.log(teste8);
console.log(teste9);
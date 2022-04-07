const MathOperations = require('./MathOperations')


let operations = new MathOperations();

console.log("Suma los números 132 y 48:", operations.sum(132, 48))
console.log("Diferencia entre 96 y 122:", operations.diff(96, 122))
console.log("Producto de 45 x 3:", operations.product(45, 3))
console.log("Raíz cuadrada de 400:", operations.sqrt(400))
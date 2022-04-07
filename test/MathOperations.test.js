const MathOperations = require('../src/MathOperations')


let operations = new MathOperations();

describe("Tests de cálculo", () => {

    test('sumar 82 + 8 debería resultar en 90', () => {
        expect(operations.sum(82, 8)).toBe(90);
    });

    test('sumar -153 + 50 debería resultar en -103', () => {
        expect(operations.sum(-153, 50)).toBe(-103);
    });

    test('el producto de 45 * 3 debería ser 135', () => {
        expect(operations.product(45, 3)).toBe(135);
    });

    test('el producto de 2.6 * 2 debería ser 5.2', () => {
        expect(operations.product(2.6, 2)).toBe(5.2);
    });

    test('la diferencia entre 25 y 42 debería ser -17', () => {
        expect(operations.diff(25, 42)).toBe(-17);
    });

    test('la diferencia entre 10 y 8 debería ser 2', () => {
        expect(operations.diff(10, 8)).toBe(2);
    });

    test('la raíz cuadrada de 16 debería ser 4', () => {
        expect(operations.sqrt(16)).toBe(4);
    });

    test('la raíz cuadrada de 49 debería ser 7', () => {
        expect(operations.sqrt(49)).toBe(7);
    });

})
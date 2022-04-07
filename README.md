# Tests Unitarios en javascript JavaScript (Next U)
Proyecto ejemplo de tests unitarios usando Jest para un proyecto de Node.js

## Instalación
El código se ejecuta en la terminal usando el motor de ejecución `node` (Puedes instalar NodeJS visitando el siguiente [link](https://nodejs.org/)).  Luego de instalar node en tu sistema, tendrás `npm` disponible.  Para instalar las dependencias usa el comando:

```bash
❯ npm install
added 330 packages, and audited 331 packages in 25s

28 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Ejecución

Para ejecutar el programa principal escribes el siguiente comando:

```bash
❯ npm run start

> lc236_testing@0.1.0 start
> node src/index.js

Suma los números 132 y 48: 180
Diferencia entre 96 y 122: -26
Producto de 45 x 3: 135
Raíz cuadrada de 400: 20
```

Para ejecutar los tests unitarios:

```bash
❯ npm run test

 PASS  test/MathOperations.test.js
  Tests de cálculo
    ✓ sumar 82 + 8 debería resultar en 90 (2 ms)
    ✓ sumar -153 + 50 debería resultar en -103
    ✓ el producto de 45 * 3 debería ser 135 (1 ms)
    ✓ el producto de 2.6 * 2 debería ser 5.2
    ✓ la diferencia entre 25 y 42 debería ser -17 (1 ms)
    ✓ la diferencia entre 10 y 8 debería ser 2
    ✓ la raíz cuadrada de 16 debería ser 4
    ✓ la raíz cuadrada de 49 debería ser 7

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        0.269 s, estimated 1 s
Ran all test suites.
```

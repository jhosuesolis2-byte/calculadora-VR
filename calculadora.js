const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n==============================");
    console.log("   CALCULADORA ALEXANDER VR )");
    console.log("==============================");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir");
    
    rl.question("\nElige una opción (1-5): ", (opcion) => {
        if (opcion === '5') {
            console.log("¡Hasta luego!");
            rl.close();
            return;
        }

        if (['1', '2', '3', '4'].includes(opcion)) {
            rl.question("Ingresa el primer número: ", (num1) => {
                rl.question("Ingresa el segundo número: ", (num2) => {
                    const n1 = parseFloat(num1);
                    const n2 = parseFloat(num2);
                    let resultado;

                    switch (opcion) {
                        case '1':
                            resultado = n1 + n2;
                            console.log(`\nResultado: ${n1} + ${n2} = ${resultado}`);
                            break;
                        case '2':
                            resultado = n1 - n2;
                            console.log(`\nResultado: ${n1} - ${n2} = ${resultado}`);
                            break;
                        case '3':
                            resultado = n1 * n2;
                            console.log(`\nResultado: ${n1} * ${n2} = ${resultado}`);
                            break;
                        case '4':
                            if (n2 === 0) {
                                console.log("\nError: No se puede dividir entre cero.");
                            } else {
                                resultado = n1 / n2;
                                console.log(`\nResultado: ${n1} / ${n2} = ${resultado}`);
                            }
                            break;
                    }
                    mostrarMenu();
                });
            });
        } else {
            console.log("\nOpción no válida. Inténtalo de nuevo.");
            mostrarMenu();
        }
    });
}

// Iniciar la calculadora
mostrarMenu();
//Async / await

function descargarNuevosClientes(){
    return new Promise( resolve =>{
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);

    });
}

function descargarUltimosPedidos(){
    return new Promise( resolve =>{
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);

    });
}


async function app(){
    try {
        /*const clientes = await descargarNuevosClientes();
        const pedidos = await descargarUltimosPedidos();
        console.log(clientes);
        console.log(pedidos); //este codigo es para 1 consulta o 2 que dependan de si*/

        //Para ejecutar 2 o mas al mismo tiempo
        const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Este código no se bloquea');

/*Se pone un promise en la funcion que tarda mucho tiempo, para simularlo en el ejempo usamos el setTimeout
que activa el codigo despues del tiempo asignado (puede ser tambien setInterval y ese lo hace cada cierto tiempo)

luego se crea la funcion async que es la que se ejecutará en paralelo y se le pone un await antes de la funcion con el promise*/ 
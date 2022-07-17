
/*Diferencias var y let y const*/ 
//var permite volver a declarar la misma variable (malamente alv)
//let no permite, te marca error
//const es una constante, siempre debe de tener un valor y no cambia.
//const se usan mas para seleccionar elementos del HTML.

//en JS los string pueden ser con ''  o ""

const divMensaje = document.getElementById('mensaje');


let banda =  'Linkin Park', cancion='In the End';
let nombre = banda + ',: ' + cancion;
console.log(nombre + ' '+nombre.length); //length para obtener el total de caracteres


nombre = nombre.concat(' ',' es lo mejor!'); //concatenar
nombre = nombre.toLocaleUpperCase(); //mayusculas
console.log(nombre);


//split
let actividad = 'Aprendiendo JS con el curso';
nombre = actividad.split(' ');
console.log(nombre);
//replace
nombre = actividad.replace('JS', 'JavaScript');
console.log(nombre);

//includes revisa que algo exista
nombre = actividad.includes('curso');
console.log(nombre);

//repeat, repite el string
let master = 'Master ',
    pupets = 'Of Puppets';

nombre = master.repeat(3) +' ' + pupets;
console.log(nombre);

let resultado;
let numero1 = 10;
    numero2 = "20";
resultado = Math.round(2.5); //redondear
console.log(resultado);

resultado = Math.floor(2.5); //redondear hacia abajo
console.log(resultado);

resultado = Math.ceil(2.5); //redondear hacia arriba
console.log(resultado);

resultado = Math.abs(-330); //absoluto
console.log(resultado);

resultado = Math.min(2,1,20,3); //minimo
console.log(resultado);

resultado = Math.max(2,1,20,3); //maximo
console.log(resultado);

console.log(Number(numero2) + numero1); //convertir de string a numero
console.log(parseInt(numero2) + numero1); //convertir a int //con partFloat es con decimales.


//toFixed sirve para quitar o manejar decimales
//solo se puede usar en variables numericas, si es string hay que convertir


let numerito = 283728372832.2987328;
console.log(numerito.toFixed());


let numerito2 = 283728372832.2987328;
console.log(numerito2.toFixed(2)); //2 decimales

//de numero a string
let dato = 374973973979393;
dato = String(dato);
console.log(dato.length);

const name = 'Juan';
console.log(typeof name); //para ver de que tipo es


//arreglos
const numeros = [10,20,30,40,50];
//console.log(numeros);

const meses = new Array('enero','febrero','marzo');
//agregar datos al array
meses.push('abril'); //push siempre lo agrega al final
meses.push('mayo');
meses.unshift('mes 0'); //unshift agrega al inicio del arreglo


meses.pop(); //elimina el ultimo elemento del array
meses.shift(); //elimina el primer elemento del array

meses.splice(0,1); //eliminar un rango del arreglo

meses.reverse();//cambia el orden del arreglo
console.log(meses); 

//ordenar un array por orden alfabetico
let frutas = ['Platano', 'Fresa', 'Naranja','Manzana'];
frutas.sort();
console.log(frutas);


/*const arreglo = ['Hola',10,true,"si",null,undefined]; //pueden ir distintos tipos de datos
console.log(arreglo);
console.log(Array.isArray(arreglo)); //para ver si esun arreglo*/


//OBJETOS
const persona = {
    nombre: 'Juan',
    apellido: 'Lopez',
    edad: '80',
    trabajo: true,
    musica: ['Rock','Pop'],
    hogar: {
        ciudad: 'Culiacan',
        estado: 'Sinaloa'
    }
}
console.log(persona);
console.log(persona.apellido);
console.log(persona.musica[1]);
console.log(persona.hogar.estado);
console.log(persona['hogar']['estado']); //otra forma de imprimirlo


//templates string

const nombreC  = 'Alex',
        trabajo = 'Desarrollador';

console.log('Nombre: ' +nombreC+ ', Trabajo: '+trabajo); //forma no recomendada para muchas concatenaciones
console.log(`Nombre: ${nombreC}, Trabajo: ${trabajo}`); //forma recomendada de templates string

const contenedorApp = document.querySelector('#mensaje'); //tomar elemento del html
let html ='<ul>'+
              '<li> Nombre: ' + nombreC + '</li>'+
              '<li> Trabajo: ' + trabajo + '</li>'+
          '</ul>';

//con template string
let html2 = `<ul>
            <li>Nombre: ${nombreC}</li>
            <li>Trabajo: ${trabajo}</li>
            </ul>`;

//contenedorApp.innerHTML = html2; //así lo agrego al html

//Function declaration, AQUI NO HAY PROBLEMA SI SE MANDA LLAMAR ANTES, COMO C#
function saludar(nombreC = 'Visitante'){  //si no se manda el parametro toma ese valor
    console.log('Hola '+nombreC);
}
saludar('Alex'); //mandar llamar

//function expression AQUI SE TIENE QUE DECLARARLA ANTES DE UTILIZARLA
const suma = function(){
    console.log(1 + 2);

}
suma();

//IIFE son metodos que se mandan llamar solos
(function(tecnologia){
    console.log('AQUI ESTOY APRENDIENDO '+tecnologia);
})('JavaScript');

////// funcion dentro de un objeto
const musica = {
        reproducir:function(cancion){
            console.log('Reproduciendo la canción: '+cancion);
        },
        pausar:function(){
            console.log('Paused...');
        }
}

//los metodos tambien pueden ir por fuera
musica.borrar = function(id){
    console.log('Borrando la canción: '+id)
}


musica.reproducir('Hotel California');
musica.pausar();
musica.reproducir('In the end');
musica.borrar(121);

/////funciones que retornan un valor
const suma1 = function(a = 0, b = 0){
    return a+b;
}

//Arrow function,   se quita la palabra function y se pone la flecha despues del parentesis
//Si nada mas se pasa un parametro, se puede quitar el parentesis
//como nada mas regresa un valor tambien se puede resumir
const multiplicar = a =>  a * 5;

let total;
let resultado1 = suma1(10,20);
total = multiplicar(resultado1);

console.log(total);

//Ejemplo arrow
let viajando = destino => 'Viajando a la ciudad de '+destino;


let viaje;
viaje = viajando('Monterrey');
viaje = viajando('Guadalajara');
console.log(viaje);

const personax = {
    nombre:'Juan',
    edad:80,
    anioNacimiento: function(){
        return new Date().getFullYear() - this.edad;
     //se usa el .this para que sepa el objeto a que instancia pertenece, sin el marca error.

    }
}
console.log(personax.anioNacimiento());

//object constructor
/*function Tarea(nombre,urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}*/

//forma nueva de hacer el object constructor
class Tarea{
    constructor(nombre,urgencia){
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}

//crear tareas
const tarea1 = new Tarea('Aprender JS','Urgente');
const tarea2 = new Tarea('Preparar cafe','Urgente');
const tarea3 = new Tarea('Pasear al perro','Media');
const tarea4 = new Tarea('Conocer a mis suegros','0');


console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);

const diaHoy = new Date();
let valor = diaHoy;

//retorna el numero del mes, empezando con enero 0
valor = diaHoy.getMonth(); 
//retorna el numero del día, empezando del domingo 0
valor = diaHoy.getDay();
//retorna el numero del día del mes
valor = diaHoy.getDate();
//retorna el año actual
valor = diaHoy.getFullYear();
//retorna los minutos de la hora
valor = diaHoy.getMinutes();
//retorna la hora
valor = diaHoy.getHours();
//retorna el tiempo en milisegundos
valor = diaHoy.getTime();

//cambiar año
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(1998);
valor = diaHoy.getFullYear();
console.log(valor);

//new Date = MES, DIA, AÑO
//con esta forma podemos saber que día fue determinada fecha en el calendario
/*
Domingo     0
Lunes       1
Martes      2
Miercoles   3
Jueves      4
Viernes     5
Sabado      6
*/ 
const unDia = new Date('3-21-1993');
let valorx;
valorx = unDia.getDay();
console.log(valorx);

const puntaje = 1000;
//=== operador estricto, evalua el valor y el tipo de dato.
if(puntaje === '1000')
{
    console.log('si es igual');
}else{
    console.log('no es igual');
}

//ternario
let logueado = true;
console.log(logueado ? 'Si se logueo' : 'No se logueo');

//switch

const metodoPago = 'cheque';

switch(metodoPago){
    case 'efectivo':
        console.log('Pagaste con '+metodoPago);
        break;
    
    case 'cheque':
        console.log('Pagaste con '+metodoPago);
        break;  

    case 'tarjeta':
        console.log('Pagaste con '+metodoPago);
        break;
    default:  //a de cuenta que es un else
        console.log('Aun no has pagado');
        break;
}

/*//FOR LOOP
const carrito = ['p1','p2','p3']

for(let i = 0; i <carrito.length; i++){
    console.log(carrito[i]);
}

//while
let i = 0;
while(i < 10)
{
    console.log("Numero: "+i);
    i++;
}

//DO WHILE
do{
console.log(i);
i++;
}while(i < 10);*/

const pendientes = ['Tarea','Comer','Proyecto','Estudiar'];
const carritoc = [
    {id:1, producto:'Libro'},
    {id:2, producto:'Camisa'},
    {id:3, producto: 'Disco'}
];

let automovil = {
    modelo: 'Camaro',
    motor: 6.0
}

//UN FOR (parecido a foreach) para arreglos y arreglos con objeto, etc.
for(carro of carritoc){
    console.log(carro.producto);
}

//Para un objeto solo
for(info of Object.values(automovil)){
    console.log(info);
}

//Foreach
let na = pendientes.forEach(tarea => {
    //console.log(tarea);
})
//Map
//Se parece al foreach pero este si regresa un valor, ya que saca copia del arreglo
let na2 = pendientes.map(tarea => tarea);
console.log(na);
console.log(na2);

//Destructuring Object sirve para extraer datos
const cliente = {
    nombres: 'Alejandra',
    membresia: 'Premium',
    datos:{
        ubicacion:{
            ciudad: 'Mexico',
            pais: 'Mexico'
        },
        cuenta:{
            desde:'10-12-2012',
            saldo:4000
        }
    }
}

console.log(cliente);
//forma antigua obtener los datos, como el pais
const nombreCliente = cliente.nombres;  
        tipocliente = cliente.membresia,
        ubicacionCliente = cliente.datos.ubicacion;
        //console.log(ubicacionCliente.pais);



//forma object destructuring
let{nombres,membresia} = cliente; //lo que está entre las llaves debe de ser igual a la propiedad del objeto y así me puedo traer todas las variables de una
let{datos:{ubicacion:{pais}} } = cliente;
console.log(pais);


//Object literal enhacement
const bandaMusical = 'Metalica',
        genero = 'Metal',
            canciones = ['Master of pupets','Seek y Destroy', 'Enter Sandman'];

//forma anterior de hacerlo
const metallica = {
    bandaMusical: bandaMusical,
    genero: genero,
    canciones: canciones
}

//forma nueva
const metallicaNew = {bandaMusical,genero,canciones};
console.log(metallicaNew);

//otros metodos
const personas = [
    {nombre:'Juan',edad:20},
    {nombre:'Alex',edad:27},
    {nombre:'Pedro',edad:23},
    {nombre:'José',edad:29},
    {nombre:'Luis',edad:30 }
];

//obtener las personas mayores a 25 años (CON FILTER y usando ARROW FUNCTION)
const mayores = personas.filter(persona => persona.edad > 25);
console.log(mayores);

//Obtener la información de Alex (FUNCIONA CON FIND Y FILTER)
const Alexinfo = personas.find(persona => persona.nombre === 'Alex');
console.log(Alexinfo);

//reduce
let totalR = personas.reduce((edadTotal,persona) =>{
    return edadTotal + persona.edad;
},0);

//edadTotal es una variable que va sumando las edades y se le asigna a totalR
//totalR contiene la suma de las edades
//para sacar el promedio se usa totalR/personas.length
console.log(totalR /personas.length);


//FETCH API
descargarUsuarios(10);

function descargarUsuarios(cantidad){
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;

    //llamado a Fetch
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML(datos.results));
}


function imprimirHTML(datos){
    datos.forEach(usuario => {
        const li = document.createElement('li');

        const {name:{first},name:{last},picture:{medium},nat} = usuario;
        li.innerHTML = `
            Nombre: ${first} ${last}
            Pais: ${nat}
            imagen: <img src="${medium}">
        `;

        document.querySelector('#app').appendChild(li);
    });
}











































       /* console.time('HOLA');
        console.table([1,2,3]);
        console.error('ya valio');
        console.warn('casito');
        console.timeEnd('HOLA');*/
        /*console.clear();  limpiar consola*/
       /* var nombre = prompt('Cual es tu nombre?');
        document.getElementById('mensaje').innerHTML = `Bienvenido ${nombre}`; */
        /*`Bienvenido ${nombre}` lo puedo poner como 'Bienvenido '+nombre, e igual jala     */
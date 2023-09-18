//Monedas disponibles hechas objetos.
const dolarBl = {
    nombre: "dolar blue",
    precio: 740,
    lugar: "Estados Unidos",
    alias:"dolares",
}
const dolarOf = {
    nombre: "dolar oficial",
    precio: 350,
    lugar: "Estados Unidos",
    alias:"dolares",
}
const euro = {
    nombre: "euro",
    precio: 379.51,
    lugar: "la Unión Europea",
    alias:"euros",
}
const pesoMex = {
    nombre: "peso mexicano",
    precio: 20.90,
    lugar: "México",
    alias:"pesos Mexicanos",
}
const pesoUru = {
    nombre: "peso uruguayo",
    precio: 9.31,
    lugar: "Uruguay",
    alias:"pesos Uruguayos",
}
const yuan = {
    nombre: "yuan",
    precio: 48.22,
    lugar: "China",
    alias:"yuanes",
}
const realBr = {
    nombre: "real",
    precio: 71.12,
    lugar: "Brasil",
    alias:"reales",
}
// Array de todas las monedas.
const monedas = [dolarBl, dolarOf, euro, pesoMex, pesoUru, yuan, realBr]

// Uso el método map para crear un array nuevo solo con los nombres de las monedas para luego utilizarlo en un condicional.
const validacionNombre = monedas.map((el)=> el.nombre)

// Función para hacer la conversion. El toFixed me ayuda a redondear un poco el resultado (dejando dos decimales).
const convertir = (a,b) => (a / b).toFixed(2);

let pesosArg
let monedaElegida

// Variable con dato numerico para poder "cortar" con el ciclo.
let validacionCiclo = 15 

do{
    monedaElegida= prompt("Elija una de las monedas que quieras convertir a Pesos Argentinos: dolar blue, dolar oficial, euro, peso mexicano, peso uruguayo, yuan, real. Escribe 'salir' en caso de que no quieras seguir con la conversion. ")

    // Uso el metodo includes para validar que el nombre de la moneda ingresada por el usuario corresponde al nombre de una de las monedas ya establecidas en el array "validacionNombre". Creando asi una variable con un dato booleando el cual utilizaré para un condicional.
    let validacionCondicional = validacionNombre.includes(monedaElegida)

    // Condicional que permite salir del ciclo.
    if(monedaElegida == "salir"){
        alert("Haz decidido salir.")
        validacionCiclo = 10
    }
    else if(true == validacionCondicional){

        pesosArg= prompt("Ingresa la cantidad de pesos argentinos que tengas y quieras convertir.")

        // Uso el metodo find para encontrar el objeto cuyo nombre se compare al nombre ingresado por el usuario.
        const identificar = monedas.find((el)=> el.nombre == monedaElegida)
    
        conversion = "Tienes $" + convertir(pesosArg, identificar.precio)+ " " + identificar.alias+ ". Esta moneda es de " + identificar.lugar + ".";

        alert(conversion);
        
        // Este console.log simula ser el historial.
        console.log(conversion);



    }else{

        alert("¡Alguno de los datos ingresados no es correcto! Procura escribir sin faltas de ortografía el nombre de la moneda, tendrás que reiniciar la página.")
        validacionCiclo=10;

    }
}while(validacionCiclo == 15)

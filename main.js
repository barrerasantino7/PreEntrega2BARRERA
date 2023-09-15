//Monedas disponibles.
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

const monedas = [dolarBl, dolarOf, euro, pesoMex, pesoUru, yuan, realBr]

const validacionNombre = monedas.map((el)=> el.nombre)

const convertir = (a,b) => a / b;

let pesosArg
let monedaElegida


let validacionCiclo = 15 
do{
    monedaElegida= prompt("Elija una de las monedas que quieras convertir a Pesos Argentinos: dolar blue, dolar oficial, euro, peso mexicano, peso uruguayo, yuan, real.")

    let validacionCondicional = validacionNombre.includes(monedaElegida)

    if(true == validacionCondicional){

        pesosArg= prompt("Ingresa la cantidad de pesos argentinos que tengas y quieras convertir.")

        const identificar = monedas.find((el)=> el.nombre == monedaElegida)
    
        alert("Tienes $" + convertir(pesosArg, identificar.precio)+ " " + identificar.alias+ ". Esta moneda es de " + identificar.lugar + ".")


    }else{

        alert("¡Alguno de los datos ingresados no es correcto! Procura escribir sin faltas de ortografía el nombre de la moneda, tienes que reiniciar la página.")
        validacionCiclo=10;

    }
}while(validacionCiclo == 15)

//Monedas disponibles.
const dolar = 740;
const euro = 379.51;
const pesoMex = 20.90;
const pesoUru = 9.31;
const yuan = 48.22;
const realBr = 71.12;

//Variables que establecerá el usuario.
let pesoArg
let moneda

//Función para convertir las monedas a pesos argentinos.
const convertir = (a,b) => a / b;

let ok = 15 //Variable para determinar cuando terminará el ciclo.

do{//Ciclo, se repetirá las veces que el usuario escriba mal una palabra y terminará cuando el el calculo de la moneda sea correcto.

moneda = prompt("Elija una de las monedas que quieras convertir a Pesos Argentinos: dolar, euro, peso mexicano, peso uruguayo, yuan, real.")
pesoArg = prompt("Ingresa la cantidad de pesos argentinos que tengas y quieras convertir.")

if (moneda == "dolar"){
alert("Tienes " + convertir(pesoArg, dolar) + " dolares");
ok = 15

}else if (moneda == "euro"){
    alert("Tienes " + convertir(pesoArg, euro) + " euros");
    ok = 15

}else if (moneda == "peso mexicano"){
    alert ("Tienes " + convertir(pesoArg, pesoMex) + " pesos mexicanos"); 
    ok = 15

}else if (moneda == "peso uruguayo"){
    alert("Tienes " + convertir(pesoArg, pesoUru) + " pesos uruguayos");
    ok = 15

}else if (moneda == "yuan"){
    alert("Tienes " + convertir(pesoArg, yuan) + " yuanes"); 
    ok = 15

}else if (moneda == "real"){
    alert("Tienes " + convertir(pesoArg, realBr) + " reales"); 
    ok = 15

} else{
    alert("¡Alguno de los datos ingresados no es correcto!") //Este alert sirve para avisar al usuario que escribió con alguna falta de ortografia el nombre de la moneda.
    ok = 10
    
}
}while(ok == 10)// Condicional que mantiene el ciclo.
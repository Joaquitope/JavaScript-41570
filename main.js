let cantidad = parseInt(prompt("Ingresar un numero"));

for(let i = 0;i < cantidad; i++){
    alert("Hola " + (i+1));
}

let numero = parseInt(prompt("ingrese un numero"));

while (numero <= 50){
    alert("Su numero es: " + numero)
    numero = numero + parseInt(prompt( "Ingrese otro numero"))
}
alert("Su numero es " + numero + ", ciclo finalizado por numero mayor a 50")
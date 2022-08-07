 function calcularCuotas(){
    let monto = parseInt(prompt("Ingrese un monto a calcular. (Ingrese 0 para salir)"));
    let cuotas = parseInt( prompt("Ingrese cantidad de cuotas deseasas (MAX 12 con intereses)"));
    while (monto != 0){
    if (cuotas > 12){
        alert("La cantidad de cuotas no puede ser mayor a 12")
    }
    else{
        alert("Las cuotas son de $" + monto/cuotas * 1.25)
    }
    monto = parseInt(prompt("Ingrese un monto a calcular. (Ingrese 0 para salir)"));
    cuotas = parseInt( prompt("Ingrese cantidad de cuotas deseasas (MAX 12)"));
    }
    alert("Ciclo finalizado");
}

calcularCuotas()
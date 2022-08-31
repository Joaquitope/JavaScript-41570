function formulario() {
    let nombre = document.getElementById("nombre").value;
    
    if(nombre == ''){
        alert("no ingreso ningun nombre, se mostrara el ultimo ingresado")
        nombre = localStorage.getItem('nombreUsuario')
    }else{
        localStorage.setItem('nombreUsuario', JSON.stringify(nombre))
    }

    let valor = document.getElementById("valor").value;

     if(valor == ''){
        alert("Debe ingresar un valor")
        valor = localStorage.getItem('valorUsuario')
    }else{
        localStorage.setItem('valorUsuario', JSON.stringify(valor))
    }
    

    let cuotas = document.getElementById("cuotas").value;
    
    if(cuotas == '' || cuotas > 12){
        alert("Debe ingresar una cantidad de cuotas, la cual la max son 12")
        cuotas = localStorage.getItem('cuotasUsuario')
    }else{
        localStorage.setItem('cuotasUsuario', JSON.stringify(cuotas))
    }
    
    document.getElementById("msj").innerHTML = "Hola " + nombre + " " + "el precio final en "  + cuotas + " " + "cuotas seria de: " + valor/cuotas; 

    
}


 
/* function mostrarMsj() {
    let person = prompt("Ingrese su nombre ");
    if (person != null) {
      document.getElementById("usuario").innerHTML =
      "Hola " + person + " " + "podes ver nuestros productos en la seccion PRODUCTOS!";
    }
  }
 */
/* let productos = [
    { Modelo: 787, Fabricante: "Boeing", Aerolinea: "Aeromexico", precio: 20000 },
    { Modelo: 737, Fabricante: "Boeing", Aerolinea: "Aerolineas Argentinas", precio: 19000 },
    { Modelo: 777, Fabricante: "Boeing", Aerolinea: "Fly Emirates", precio: 18000 },
    { Modelo: 330, Fabricante: "Airbus", Aerolinea: "Aerolineas Argentinas", precio: 24000 },
]


function carritoCompras(){
    let precioMinimo = parseInt(prompt("Ingrese un precio minimo. (Ingrese 0 para salir)"));
    let precioMaximo = parseInt(prompt("Ingrese un monto a maximo. (Ingrese 0 para salir)"));
    
    const productosFiltrados = productos.filter((producto) => producto.precio > precioMinimo && producto.precio < precioMaximo);
    alert("Los productos que aplican al filtro son " + productosFiltrados.length)
    productosFiltrados.forEach(element => {
        alert("Modelo: " + element.Modelo + " , " + "Fabricante: " + element.Fabricante + " , " + "Aerolinea: " + element.Aerolinea + " , " + "Precio: " + element.precio)
    });
}

carritoCompras() */






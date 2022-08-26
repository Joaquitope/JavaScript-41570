function formulario() {
    const nombre = document.getElementById("nombre").value;
    const valor = document.getElementById("valor").value;
    const cuotas = document.getElementById("cuotas").value;

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






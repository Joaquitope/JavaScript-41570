let productos = [
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

carritoCompras()




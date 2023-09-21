class itemCompra {
    nombre;
    cantidad;
    precio;
    subtotal;

    constructor(nombre,cantidad,precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.subtotal = this.cantidad*this.precio;
    }

}
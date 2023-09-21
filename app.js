const productos = [
    { nombre: "Triangulo", precio: 5000},
    { nombre: "Top", precio: 4500},
    { nombre: "Enteriza", precio: 5500},
    { nombre: "Enteriza Infantil", precio: 5000},
    { nombre: "Top Infantil", precio: 5500},
];

const carrito = [];

let eleccion;
let terminar;
let total = 0;
let cantidad; 
let detalleCompra;

function validacion(cantidad) {
    while (cantidad <= 0 || isNaN(cantidad)) {
        cantidad = prompt('Cantidad incorrecta, por favor vuelva a ingresarla');
    }
    return cantidad;
}

function menu() {
    do{
        const listaDeProductos = productos.map((prod,index) => 
            `${index + 1} - ${prod.nombre} - $${prod.precio}`);
        eleccion = prompt("Que producto quiere adquirir? Ingrese el numero" + "\n" + listaDeProductos.join("\n"));  
        
        while(eleccion <= 0 || eleccion > 5){
            eleccion = prompt("Escriba una opcion de la lista de productos" + "\n" + listaDeProductos.join("\n") )
        }

        cantidad = parseInt(prompt("Ingrese la cantidad"));
        validacion(cantidad);

        carrito.push (new itemCompra(productos[eleccion-1].nombre,cantidad,productos[eleccion-1].precio));
        console.log(carrito);
        
        terminar = prompt("Desea terminar la compra? si/no");


    }while(terminar != "si");
}

alert( "Bienvenidx a la casa de las bikinis!");

menu ();

total = carrito.reduce((acc,item) => acc + item.subtotal,0);
alert(`Gracias por su compra! El total a pagar de su compra es de: $${total}`);









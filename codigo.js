// Función constructora para crear objetos Producto
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// Función para calcular el precio de venta al público
function calcularPrecioVenta(costoProducto, costosExtras, margenGanancia) {
  const costoTotalExtras = costosExtras.reduce((total, costo) => total + costo, 0);
  const costoTotal = costoProducto + costoTotalExtras;
  const precioVentaPublico = costoTotal * (1 + (margenGanancia / 100));
  return precioVentaPublico;
}

// Función de orden superior para aplicar un descuento opcional
function aplicarDescuento(precio, descuentoPorcentaje) {
  return precio * (1 - (descuentoPorcentaje / 100));
}

// Función para obtener los precios de los productos
function obtenerPreciosProductos(numProductos) {
  const productos = [];
  for (let i = 1; i <= numProductos; i++) {
    const nombreProducto = prompt(`Ingrese el nombre del Producto ${i}:`);
    const precioProducto = parseFloat(prompt(`Ingrese el precio del Producto ${i}:`));
    const producto = new Producto(nombreProducto, precioProducto);
    productos.push(producto);
  }
  return productos;
}

// Función para obtener los costos extras
function obtenerCostosExtras() {
  const numCostosExtras = parseInt(prompt("¿Cuántos costos extras desea ingresar?"));
  const costosExtras = [];
  for (let i = 1; i <= numCostosExtras; i++) {
    const costoExtra = parseFloat(prompt(`Ingrese el costo extra ${i}:`));
    costosExtras.push(costoExtra);
  }
  return costosExtras;
}

// Función para mostrar la lista de productos y el precio total
function mostrarListaProductosYTotal(productos, precioVenta) {
  console.log("Lista de Productos:");
  for (const producto of productos) {
    console.log(`- ${producto.nombre}: $${producto.precio.toFixed(2)}`);
  }
  console.log("Costos Extras:");
  for (let i = 0; i < costosExtras.length; i++) {
    console.log(`- Costo Extra ${i + 1}: $${costosExtras[i].toFixed(2)}`);
  }
  console.log(`Precio de Venta al Público: $${precioVenta.toFixed(2)}`);
}

// Pregunta al usuario cuántos productos desea ingresar
const numProductos = parseInt(prompt("¿Cuántos productos desea ingresar?"));

// Solicita al usuario ingresar los nombres y precios de los productos
const productos = obtenerPreciosProductos(numProductos);

// Solicita al usuario ingresar los costos extras
const costosExtras = obtenerCostosExtras();

// Pregunta al usuario cuánto desea marcar el margen de ganancia en porcentaje
const margenGanancia = parseFloat(prompt("Ingrese el margen de ganancia deseado en porcentaje:"));

// Calcula el costo total de los productos y costos extras
const costoTotalProductos = productos.reduce((total, producto) => total + producto.precio, 0);
const costoTotalExtras = costosExtras.reduce((total, costo) => total + costo, 0);

// Calcula el precio de venta al público utilizando la función
const precioVenta = calcularPrecioVenta(costoTotalProductos, costosExtras, margenGanancia);

// Pregunta al usuario si desea aplicar un descuento
const aplicarDescuentoFlag = confirm("¿Desea aplicar un descuento?");

if (aplicarDescuentoFlag) {
  // Pide al usuario que ingrese el porcentaje de descuento
  const descuentoPorcentaje = parseFloat(prompt("Ingrese el porcentaje de descuento:"));

  // Aplica el descuento utilizando la función de orden superior
  const precioConDescuento = aplicarDescuento(precioVenta, descuentoPorcentaje);

  // Muestra el precio con descuento en un mensaje de alerta
  alert(`El precio con un descuento del ${descuentoPorcentaje}% es: $${precioConDescuento.toFixed(2)}`);
} else {
  // Muestra la lista de productos, costos extras y el precio de venta al público en la consola
  mostrarListaProductosYTotal(productos, costosExtras, precioVenta);
}
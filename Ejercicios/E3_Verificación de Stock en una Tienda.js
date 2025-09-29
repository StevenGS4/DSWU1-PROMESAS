let inventario = { "laptop": 5, "mouse": 10, "teclado": 0 };

function verificarStock(producto, cantidad) {
  return new Promise((resolve, reject) => {
    if (inventario[producto] !== undefined && inventario[producto] >= cantidad) {
      resolve("Stock disponible, procediendo con la compra");
    } else {
      reject("Stock insuficiente");
    }
  });
}

verificarStock("laptop", 2).then(console.log).catch(console.error);
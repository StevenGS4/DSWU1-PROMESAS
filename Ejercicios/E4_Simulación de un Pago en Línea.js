function procesarPago(monto) {
  return new Promise((resolve, reject) => {
    if (monto > 0) {
      resolve(`Pago exitoso de $${monto}`);
    } else {
      reject("Error: Monto inválido");
    }
  });
}

procesarPago(150).then(console.log).catch(console.error);
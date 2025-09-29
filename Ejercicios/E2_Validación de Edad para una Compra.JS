function verificarEdad(edad) {
  return new Promise((resolve, reject) => {
    if (edad >= 18) {
      resolve("Compra permitida");
    } else {
      reject("Debes ser mayor de edad para comprar este producto");
    }
  });
}


verificarEdad(17).then(console.log).catch(console.error);
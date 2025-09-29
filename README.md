# DSWU1-PROMESAS
Introducción
En el desarrollo de aplicaciones modernas, muchas operaciones no se pueden ejecutar de manera inmediata, como consultar una base de datos, descargar archivos, procesar pagos en línea o acceder a servicios externos. Estas operaciones asíncronas requieren mecanismos que permitan continuar con la ejecución del programa mientras se espera la respuesta de estas tareas.
JavaScript ofrece varios métodos para manejar la asincronía, y uno de los más importantes son las promesas. Una promesa es un objeto que representa la eventual terminación o fallo de una operación asíncrona y su valor resultante. Las promesas pueden estar en tres estados:
Pendiente (Pending): La operación aún no se ha completado.
Cumplida (Fulfilled/Resuelta): La operación se completó exitosamente y se obtiene un resultado.
Rechazada (Rejected): La operación falló y se obtiene un motivo del fallo.


El uso de promesas permite escribir código más legible y manejable que los tradicionales callbacks, evitando el conocido “callback hell”. Además, pueden combinarse con then(), catch() y finally() para manejar los resultados o errores de manera estructurada.
En esta práctica, se aplican promesas a situaciones cotidianas simuladas, como:
Descargar archivos.
Verificar la edad de un usuario para comprar productos.
Comprobar disponibilidad de stock.
Procesar pagos en línea.
Autenticar usuarios.
Revisar saldo bancario.
Consultar información de clima.
Cada ejercicio refuerza la comprensión de cómo las promesas permiten controlar el flujo de operaciones asíncronas, manejar errores y asegurar que las aplicaciones reaccionen correctamente ante diferentes escenarios.
Instrucciones

Cada uno de los siguientes ejercicios debe resolverse de manera individual, sin el uso de herramientas de inteligencia artificial o generadores automáticos de código. El propósito de esta práctica es fortalecer la lógica de programación y el dominio del lenguaje JavaScript mediante la resolución manual de problemas. Se recomienda utilizar Visual Studio Code para escribir y probar las soluciones. Al finalizar cada ejercicio, es importante reflexionar sobre su funcionamiento y documentar los aprendizajes clave. En caso de dudas, se sugiere consultar la documentación oficial de JavaScript o intercambiar ideas con compañeros, priorizando siempre el razonamiento propio.

Descripción
Ejercicio 1: Simulación de Descarga de Archivo
Instrucción:
Crea una función descargarArchivo(tamaño) que devuelva una promesa.
Si el tamaño es menor o igual a 50MB, la promesa se resuelve con "Descarga completada".
Si el tamaño es mayor a 50MB, la promesa se rechaza con "El archivo es demasiado grande".


function descargarArchivo(tamaño) {
  return new Promise((resolve, reject) => {
    if (tamaño <= 50) {
      resolve("Descarga completada");
    } else {
      reject("El archivo es demasiado grande");
    }
  });
}


Ejercicio 2: Validación de Edad para una Compra
Instrucción:
Crea una función verificarEdad(edad) que devuelva una promesa.
Si la edad es 18 o más, la promesa se resuelve con "Compra permitida".
Si la edad es menor de 18, la promesa se rechaza con "Debes ser mayor de edad para comprar este producto".
function verificarEdad(edad) {
  return new Promise((resolve, reject) => {
    if (edad >= 18) {
      resolve("Compra permitida");
    } else {
      reject("Debes ser mayor de edad para comprar este producto");
    }
  });
}



Ejercicio 3: Verificación de Stock en una Tienda
Instrucción:
Crea una función verificarStock(producto, cantidad) que devuelva una promesa.
Si el producto existe en inventario y la cantidad está disponible, la promesa se resuelve con "Stock disponible, procediendo con la compra".
Si no hay suficiente stock, la promesa se rechaza con "Stock insuficiente".
Considere el siguiente objeto para hacer las búsquedas:

let inventario = { "laptop": 5, "mouse": 10, "teclado": 0 }; 


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


Ejercicio 4: Simulación de un Pago en Línea
Instrucción:
Crea una función procesarPago(monto) que devuelva una promesa.
Si el monto es mayor a 0, la promesa se resuelve con "Pago exitoso de $monto".
Si el monto es 0 o menor, la promesa se rechaza con "Error: Monto inválido".
function procesarPago(monto) {
  return new Promise((resolve, reject) => {
    if (monto > 0) {
      resolve(`Pago exitoso de $${monto}`);
    } else {
      reject("Error: Monto inválido");
    }
  });
}




Ejercicio 5: Autenticación de Usuario
Instrucción:
Crea una función autenticarUsuario(usuario, contraseña) que devuelva una promesa con el siguiente comportamiento:
Si el usuario es "admin" y la contraseña es "1234", la promesa se resuelve con un objeto que contiene { usuario, rol: "Administrador", mensaje: "Inicio de sesión exitoso" }.
Si los datos son incorrectos, la promesa se rechaza con un objeto { error: "Credenciales incorrectas", codigo: 401 }.

function autenticarUsuario(usuario, contraseña) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin" && contraseña === "1234") {
      resolve({
        usuario,
        rol: "Administrador",
        mensaje: "Inicio de sesión exitoso",
      });
    } else {
      reject({
        error: "Credenciales incorrectas",
        codigo: 401,
      });
    }
  });
}
Ejercicio 6: Verificación de Saldo Bancario
Instrucción:
Crea una función verificarSaldo(cuenta, monto) que devuelva una promesa con el siguiente comportamiento:
Si el saldo de la cuenta es suficiente para la transacción, la promesa se resuelve con { cuenta, saldoRestante, mensaje: "Transacción aprobada" }.
Si el saldo no es suficiente, la promesa se rechaza con { error: "Fondos insuficientes", saldoDisponible, codigo: 402 }.
let cuentas = {
  "123": 1000,
  "456": 200,
};

function verificarSaldo(cuenta, monto) {
  return new Promise((resolve, reject) => {
    if (cuentas[cuenta] !== undefined && cuentas[cuenta] >= monto) {
      cuentas[cuenta] -= monto;
      resolve({
        cuenta,
        saldoRestante: cuentas[cuenta],
        mensaje: "Transacción aprobada",
      });
    } else {
      reject({
        error: "Fondos insuficientes",
        saldoDisponible: cuentas[cuenta] || 0,
        codigo: 402,
      });
    }
  });
}

Ejercicio 7: Consulta de Clima desde un "Servicio"
Instrucción:
Crea una función consultarClima(ciudad) que devuelva una promesa con el siguiente comportamiento:
Si la ciudad existe en una base de datos local, la promesa se resuelve con { ciudad, temperatura, condicion }.
Si la ciudad no existe, la promesa se rechaza con { error: "Ciudad no encontrada", codigo: 404 }.
let baseClima = {
  "CDMX": { temperatura: 22, condicion: "Soleado" },
  "Monterrey": { temperatura: 30, condicion: "Caluroso" },
  "Guadalajara": { temperatura: 25, condicion: "Parcialmente nublado" },
};

function consultarClima(ciudad) {
  return new Promise((resolve, reject) => {
    if (baseClima[ciudad]) {
      resolve({
        ciudad,
        temperatura: baseClima[ciudad].temperatura,
        condicion: baseClima[ciudad].condicion,
      });
    } else {
      reject({
        error: "Ciudad no encontrada",
        codigo: 404,
      });
    }
  });
}


Para poder ejecutar todos y cada uno de los métodos:


descargarArchivo(30).then(console.log).catch(console.error);
verificarEdad(17).then(console.log).catch(console.error);
verificarStock("laptop", 2).then(console.log).catch(console.error);
procesarPago(150).then(console.log).catch(console.error);
autenticarUsuario("admin", "1234").then(console.log).catch(console.error);
verificarSaldo("123", 500).then(console.log).catch(console.error);
consultarClima("CDMX").then(console.log).catch(console.error);


Conclusión
En esta práctica se fortaleció el dominio de la programación asíncrona en JavaScript mediante el uso de promesas. Se comprendió cómo estas permiten ejecutar operaciones que requieren tiempo de respuesta, como descargas de archivos, verificación de stock, pagos en línea o consultas de clima, sin bloquear la ejecución del programa.
Además, se aprendió a:
Diferenciar entre los estados de una promesa: pendiente, resuelta y rechazada.
Manejar de manera efectiva los resultados y errores usando then() y catch().
Aplicar promesas a escenarios cotidianos, simulando situaciones reales que requieren validación de datos o control de flujo.


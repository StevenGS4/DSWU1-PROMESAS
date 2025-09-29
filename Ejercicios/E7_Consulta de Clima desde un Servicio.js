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


consultarClima("CDMX").then(console.log).catch(console.error);
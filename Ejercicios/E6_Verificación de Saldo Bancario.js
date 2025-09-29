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

verificarSaldo("123", 500).then(console.log).catch(console.error);
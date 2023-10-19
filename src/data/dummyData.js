import moment from "moment";
function distribuirValores(elementos) {
  const total = elementos.reduce(
    (total, elemento) => total + elemento.value,
    0
  );
  const factorDeEscalado = 100 / total;
  return elementos.map((elemento) => ({
    name: elemento.name,
    value: Math.floor(elemento.value * factorDeEscalado),
  }));
}
function aleatorioResumenMonetario() {
  return (
    Math.floor(Math.random() * (10000000000 - 1000000000 + 1)) + 1000000000
  );
}
function aleatorioResumenTransacional() {
  return Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;
}

function getTimelineData() {
  var y1 = Math.random() * 500000 + 500000;
  var y2 = Math.random() * 500 + 500;
  var y3 = Math.random() * 500 + 500;
  var d = moment(new Date()).startOf("day").toDate().valueOf();

  var data2 = new Array((moment().hours() * 60) / 5).fill(0).map((o, i) => {
    var date = new Date(d + i * 60 * 5 * 1000).valueOf();
    y1 += Math.random() * 100000 - 50000;
    return { date, y1 };
  });
  var data = new Array((24 * 60) / 5).fill(0).map((o, i) => {
    var date = new Date(d + i * 60 * 5 * 1000).valueOf();
    y1 += Math.random() * 100000 - 50000;
    y2 += Math.random() * 100 - 50;
    y3 += Math.random() * 100 - 50;
    const yl = y1 * 0.6 + Math.random();
    const yu = y1 / 0.6 + Math.random();
    const ye = y1 + Math.random() * 20000 - 50000;
    return { date, y1, y2, y3, yl, yu, ye };
  });

  data.map((o) =>
    Object.assign(o, {
      y1:
        data2.find((p) => p.date == o.date) != undefined
          ? data.find((p) => p.date == o.date).y1
          : null,
    })
  );

  return data;
}

function generarValoresAleatorios(nombres, rangoMinimo, rangoMaximo) {
  return nombres.map((nombre) => {
    const valor = Math.random() * (rangoMaximo - rangoMinimo) + rangoMinimo;
    return { name: nombre, value: Math.floor(valor) };
  });
}

function transaccionesNumeros() {
  const aceptadas = Math.floor(Math.random() * (100000 - 20000 + 1) + 20000);
  const rechazadas = aceptadas * 0.12;
  const total = aceptadas + rechazadas;
  const totalMonetario = Math.floor(
    Math.random() * (1000000000 - 200000000 + 1) + 200000000
  );
  const resultado = {
    aceptadas,
    rechazadas,
    total,
    totalMonetario,
  };

  return resultado;
}

export function getData() {
  const nombres = ["GFNORTE", "BYOD", "GFBA", "INVITADOS", "OTHERS"].map(
    (o) => ({
      name: o,
      count: Math.floor(Math.random() * (100 - 20) + 20),
    })
  );

  const disponibilidadInfraestructura = [
    "Servidores",
    "Base de datos",
    "Comunicaciones",
    "F5",
    "Enlaces",
    "IIS",
    "Seguridad",
    "Web Servers",
  ];
  const disponibilidadInfraestructuraConValores = generarValoresAleatorios(
    disponibilidadInfraestructura,
    1,
    4
  );

  const disponibilidad = [
    "Portal Payworks",
    "Emisores",
    "Comercios",
    "Comercios Digitales",
    "Comercios Físicos",
    "Transacciones Físicas",
    "Transacciones Digitales",
  ];
  const disponibilidadConValores = generarValoresAleatorios(
    disponibilidad,
    1,
    4
  );

  const cats = ["Monterrey", "Cd. de México", "Durango"].map((name) => ({
    name,
    value: Math.random() * 100000,
  }));
  const emisores = ["Banorte", "BBVA", "HSBC", "Santander", "Citibanamex"];
  const emisoresConValores = generarValoresAleatorios(emisores, 0, 100);
  const emisoresAjustados = distribuirValores(emisoresConValores);

  const comerciosDigitales = [
    "eBay",
    "Amazon",
    "Mercado Libre",
    "Netflix",
    "Spotify",
  ];
  const comerciosDigitalesConValores = generarValoresAleatorios(
    comerciosDigitales,
    0,
    100
  );
  const comerciosDigitalesAjustados = distribuirValores(
    comerciosDigitalesConValores
  );

  const comerciosFisicos = [
    "Walmart",
    "Apple Store",
    "McDonald's",
    "Liverpool",
    "Coppel",
  ];
  const comerciosFisicosConValores = generarValoresAleatorios(
    comerciosFisicos,
    0,
    100
  );
  const comerciosFisicosAjustados = distribuirValores(
    comerciosFisicosConValores
  );

  const nodos = [
    "PayworksWS",
    "Payworks AUT",
    "PayworksAuteGlobal",
    "PaywPlusWeb",
  ];
  const nodosConValores = generarValoresAleatorios(nodos, 5, 15);

  const puntosContacto = ["via.pagosbanorte.com", "CCA", "Tlalpan"];
  const puntosContactoConValores = generarValoresAleatorios(
    puntosContacto,
    1,
    4
  );

  const totalMonetario = aleatorioResumenMonetario();
  const pronosticoMonetario = totalMonetario + 9908000000;
  const promedioMonetario = totalMonetario + 43534;
  const metaMonetario = pronosticoMonetario + 109148;

  const totalTransaccional = aleatorioResumenTransacional();
  const pronosticoTransaccional = totalTransaccional + 10000;
  const promedioTransaccional = totalTransaccional + 43534;
  const metaTransaccional = pronosticoTransaccional + 109148;

  const digitales = transaccionesNumeros();
  const fisicas = transaccionesNumeros();

  return {
    nombres,
    cats,
    emisoresAjustados,
    comerciosDigitalesAjustados,
    comerciosFisicosAjustados,
    disponibilidadConValores,
    disponibilidadInfraestructuraConValores,
    nodosConValores,
    puntosContactoConValores,
    dispInfra: {
      prom: (Math.random() * (0.8 - 1) + 1) * 100,
      sla: (Math.random() * (0.8 - 1) + 1) * 100,
    },
    timeline1: getTimelineData(),
    timeline2: getTimelineData(),
    resumenMonetario: {
      total: totalMonetario,
      pronostico: pronosticoMonetario,
      promedio: promedioMonetario,
      meta: metaMonetario,
      porcentaje: Math.floor(Math.random() * 21) - 10,
    },
    resumenTransaccional: {
      total: totalTransaccional,
      pronostico: pronosticoTransaccional,
      promedio: promedioTransaccional,
      meta: metaTransaccional,
      porcentaje: Math.floor(Math.random() * 21) - 10,
    },
    transacciones: {
      digitales: {
        total: digitales.total,
        totalMonetario: digitales.totalMonetario,
        grafica: [
          { name: "aceptadas", value: digitales.aceptadas },
          { name: "rechazadas", value: digitales.rechazadas },
        ],
      },
      fisicas: {
        total: fisicas.total,
        totalMonetario: digitales.totalMonetario,
        grafica: [
          { name: "aceptadas", value: fisicas.aceptadas },
          { name: "rechazadas", value: fisicas.rechazadas },
        ],
      },
    },
    resumenBar: {
      actividad: totalMonetario,
      pronostico: pronosticoMonetario,
    },
  };
}
export const data = getData();

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

console.log("hola", getTimelineData());

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

  const cca = [
    "Avalibility",
    "Total Time mean",
    "Latency mean",
    "Packet max",
    "Packet mean",
  ];
  const ccaContactoConValores = generarValoresAleatorios(cca, 1, 4);
  const viaPagos = ["Avalibility", "Total Time mean", "DNS mean"];
  const viaPagosContactoConValores = generarValoresAleatorios(viaPagos, 1, 4);
  const tlalpan = [
    "Avalibility",
    "Total Time mean",
    "Latency mean",
    "Packet loss mean",
    "Packet loss max ",
  ];
  const tlalpanContactoConValores = generarValoresAleatorios(tlalpan, 1, 4);

  const puntosAcceso = ["via.pagosbanorte.com", "CCA", "Tlalpan"];
  const resultados = {};

  puntosAcceso.forEach((punto) => {
    const ms = (Math.random() * 100).toFixed(2) + "ms";
    const porcentaje = `(${(Math.random() * 100).toFixed(2)}%)`;
    const llamadas = (Math.random() * 1000).toFixed(2) + "m calls";
    const errores = (Math.random() * 10000).toFixed(2) + " Errors";

    resultados[punto] = {
      ms,
      porcentaje,
      llamadas,
      errores,
    };
  });

  // console.log(resultados);

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

  const categoriasDigital = [
    "Electrónica",
    "Artículos para el Hogar y autos",
    "Farmacia",
    "Bebidas y licores",
    "Ropa y Zapatería",
    "Bebés",
    "Carnes, Pescados y Mariscos",
    "Cuidado de la ropa",
    "Lácteos",
    "Congelados",
  ];
  const categoriasDigitalConValores = generarValoresAleatorios(
    categoriasDigital,
    0,
    100
  );
  const categoriasDigitalAjustados = distribuirValores(
    categoriasDigitalConValores
  );
  const categoriasFisica = [
    "Televisores",
    "Computación",
    "Telefonía",
    "Línea Blanca",
    "Colchones y blancos",
    "Decoración y Muebles",
    "Audio",
    "Vitaminas y Suplementos",
    "Medicamentos de Alta Especialidad",
    "Cervezas",
  ];
  const categoriasFisicaConValores = generarValoresAleatorios(
    categoriasDigital,
    0,
    100
  );
  const categoriasFisicaAjustados = distribuirValores(
    categoriasFisicaConValores
  );

  // Infraestructura

  // Servidores
  const servidores = [
    "SEFCU-WEB-1",
    "SEFCU-WEB-2",
    "SEFCU-WEB-3",
    "SEFCU-WEB-4",
  ];

  const servidoresConValores = generarValoresAleatorios(servidores, 1, 4);

  //   Seguridad
  const seguridad = [
    {
      nombre: "Antivirus",
      icon: "../../public/Shield.png",
    },

    {
      nombre: "Licencias",
      icon: "../../public/Lincence.png",
    },
  ];

  const seguridadConValores = generarValoresAleatorios(seguridad, 1, 4);

  //   Enlaces
  const enlaces = ["Principal", "Secundario"].map((name) => {
    const porcentaje = Math.round(Math.random() * 100);
    const mb = Number(((porcentaje / 100) * 1000).toFixed(2));
    let gb = 1.0;
    if (mb > 0) {
      gb = Math.max(1.0, Math.min(9.9, parseFloat((mb / 1000).toFixed(1))));
    }

    return {
      name,
      porcentaje,
      mb,
      gb,
    };
  });

  //   Base de datos
  const db = ["ATMTA", "ATMTXNDB", "CashManagementDB", "Dispatcher"];

  const dbValores = generarValoresAleatorios(db, 1, 4);

  //   Web servers
  const webServers = ["SVRBRN0001", "SVRBRN0002", "SVRBRN0003", "SVRBRN0004"];

  const webServersConValores = generarValoresAleatorios(webServers, 1, 4);

  //   Comunicaciones
  const porcentaje = Math.round(Math.random() * 100);
  const usado = Number(((porcentaje / 100) * 1000).toFixed(2));
  const disponible = Number((1000 - usado).toFixed(2));

  const comunicaciones = [
    {
      name: "Ancho de Banda",
      porcentaje,
      usado,
      disponible,
    },
  ];

  //   windows
  const Availability = Math.round(Math.random() * 100);
  const windows = ["Availability", "CPU", "Disk", "Ram"];
  const windowsConValores = generarValoresAleatorios(windows, 1, 4);

  //   IIS
  const response = Math.round(Math.random() * 100);
  const code200 = Math.round(Math.random() * 100);
  const code302 = Math.round(Math.random() * 100);
  const code404 = Math.round(Math.random() * 100);
  const code500 = Math.round(Math.random() * 100);

  const iis = ["Response time", "Response code", "Application pool"];
  const iisConValores = generarValoresAleatorios(iis, 1, 4);

  const iisData = [
    {
      name: "200",
      value: code200,
    },
    {
      name: "302",
      value: code302,
    },
    {
      name: "404",
      value: code404,
    },
    {
      name: "500",
      value: code500,
    },
  ];

  const responsetime = [
    {
      name: "Response time",
      value: response,
    },
  ];

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
    categoriasFisica,
    resultados,
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
    CPU: {
      values: [
        {
          date: 1695276000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695286000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695296000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695306000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695316000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
      ],
    },

    diskC: {
      values: [
        {
          date: "C://",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
      ],
    },

    diskD: {
      values: [
        {
          date: "D://",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
      ],
    },

    ram: {
      values: [
        {
          date: 1695276000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695286000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695296000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695306000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695316000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
      ],
    },

    availibility: {
      values: [
        {
          date: 1695276000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695286000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695296000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695306000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: 1695316000000,
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
      ],
    },

    // ThousendEyes
    thousendEyeCCA: {
      values: [
        {
          date: "Avalibility",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "Total Time mean",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "Latency mean",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "Packet max",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "Packet mean",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
      ],
    },

    thousendEyeVia: {
      values: [
        {
          date: "Avalibility",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "Total Time mean",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "DNS mean",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
      ],
    },

    thousendEyeTlalpan: {
      values: [
        {
          date: "Avalibility",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "Total Time mean",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "Latencu mean",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "Packet loss mean",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
        {
          date: "Packet loss max ",
          count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000,
        },
      ],
    },

    transaccional: {
      values: [
        {
          date: "Pronóstico",
          count: pronosticoTransaccional,
        },
        {
          date: "Meta",
          count: metaTransaccional,
        },
        {
          date: "Promedio",
          count: promedioTransaccional,
        },
      ],
    },

    monetario: {
      values: [
        {
          date: "Pronóstico",
          count: pronosticoMonetario,
        },
        {
          date: "Meta",
          count: metaMonetario,
        },
        {
          date: "Promedio",
          count: promedioMonetario,
        },
      ],
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

    te: {
      cca: ccaContactoConValores,
      viaPagos: viaPagosContactoConValores,
      tlalpan: tlalpanContactoConValores,
    },
    topCategorias: {
      digitales: categoriasDigitalAjustados,
      fisicas: categoriasFisicaAjustados,
    },

    // Infraestructura
    servidoresConValores,
    seguridadConValores,
    enlaces,
    dbValores,
    webServersConValores,
    comunicaciones,
    windowsConValores,
    Availability,
    response,
    iisConValores,
    iisData,
    responsetime,
  };
}
export const data = getData();

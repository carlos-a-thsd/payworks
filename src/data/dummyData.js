import moment from 'moment';
export function getData () {
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
    
        data.map(o =>
            Object.assign(o, {
                y1: data2.find(p => p.date == o.date) != undefined ? data.find(p => p.date == o.date).y1 : null,
            })
        );
    
        return data;
    }
    
    function getTimelineData2() {
        var y1 = Math.random() * 50000 + 50000;
        var y2 = Math.random() * 5000 + 5000;
        var y3 = Math.random() * 500 + 500;
        var d = moment(new Date()).startOf("day").toDate().valueOf();
    
        var data2 = new Array((moment().hours() * 60) / 5).fill(0).map((o, i) => {
            var date = new Date(d + i * 60 * 5 * 1000).valueOf();
            y1 += Math.random() * 10000 - 5000;
            return { date, y1 };
        });
        var data = new Array((24 * 60) / 5).fill(0).map((o, i) => {
            var date = new Date(d + i * 60 * 5 * 1000).valueOf();
            y1 += Math.random() * 10000 - 5000;
            y2 += Math.random() * 100 - 50;
            y3 += Math.random() * 100 - 50;
            const yl = y1 * 0.6 + Math.random();
            const yu = y1 / 0.6 + Math.random();
            const ye = y1 + Math.random() * 2000 - 5000;
            return { date, y1, y2, y3, yl, yu, ye };
        });
    
        data.map(o =>
            Object.assign(o, {
                y1: data2.find(p => p.date == o.date) != undefined ? data.find(p => p.date == o.date).y1 : null,
            })
        );
        
        return data;
    }
    
    const nombres = ["GFNORTE", "BYOD", "GFBA", "INVITADOS", "OTHERS"].map(
        (o) => ({
            name: o,
            count: Math.floor(Math.random() * (100 - 20) + 20),
        })
    );
    // function getRandomStatus() {
    //     const statuses = ["ACTIVO", "INACTIVO", "PENDIENTE"];
    //     const randomIndex = Math.floor(Math.random() * statuses.length);
    //     return statuses[randomIndex];
    // }
    let clientesTotal = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    let clientesActivos = Math.floor(clientesTotal * 0.8);
    let clientesInactivos = clientesTotal - clientesActivos;
    let erroresClientes = Math.floor(clientesInactivos*.2);
    
    var totalTransacciones = Math.round(Math.random() * 200000);
    var pronosticoTransacciones = totalTransacciones + totalTransacciones * .30;
    
    var totalMonto = Math.round(Math.random() * 2000000);
    var pronosticoMonto = totalMonto + totalMonto * .30;
    function getRandomDate() {
        const startDate = new Date(new Date().getFullYear(), 0, 1); // Primer día de este año
        const endDate = new Date(new Date().getFullYear(), 11, 31); // Último día de este año
    
        const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
        const randomDate = new Date(randomTime);
    
        const day = String(randomDate.getDate()).padStart(2, '0');
        const month = String(randomDate.getMonth() + 1).padStart(2, '0');
        const year = randomDate.getFullYear();
    
        return `${day}-${month}-${year}`;
    }
    
    const numberOfElements = 3; // Cambia esto al número deseado de elementos
    
    // Arreglo para almacenar los elementos generados
    const transacciones = [];
    
    // Ciclo for para generar elementos aleatorios
    for (let i = 0; i < numberOfElements; i++) {
        const randomDate =  getRandomDate();
        const randomQuantity = Math.round(Math.random() * (2000000 - 10000000) + 10000000);
        const randomReference = Math.round(Math.random() * (999999999 - 888888888) + 888888888);
        const randomStatus = Math.floor(Math.random() * (9 - 2 + 1) + 2);
        
        const currencyOptions = ["MNX", "USD", "MNX"];
        const randomCurrency =currencyOptions[Math.floor(Math.random() * currencyOptions.length)];
        const transactionOptions = ["SPEI", "Depósito", "Indeval"]
        const randomTransaction = transactionOptions[Math.floor(Math.random() * transactionOptions.length)];
        const receptorOptions = ["HSBC", "BBVA", "MIFEL"];
        const randomReceptor = receptorOptions[Math.floor(Math.random() * receptorOptions.length)];
        const transaction = {
            name: randomTransaction,
            date: randomDate,
            currency: randomCurrency,
            receptor: randomReceptor,
            quantity: randomQuantity,
            reference: randomReference,
            status: randomStatus,
        };
    
        transacciones.push(transaction);
    }

    return {
        "detalleTransacciones":{
            "transacciones":transacciones
        },
        "totalTransacciones":{
            "total":totalTransacciones,
            "pronostico":pronosticoTransacciones,
            "porcentaje":Math.floor(Math.random() * (80 - 20 + 1)) + 20,
            "subida": (Math.floor(Math.random() * 18) - 9) + 1,
            "limit":Math.floor(Math.random() * 5) + 1
        },
        "totalMonto":{
            "total":totalMonto,
            "pronostico":pronosticoMonto,
            "porcentaje":Math.floor(Math.random() * (80 - 20 + 1)) + 20,
            "subida": (Math.floor(Math.random() * 25) + 1) - 15,
            "limit":Math.floor(Math.random() * (13 - 8 + 1)) + 8
        },
        "transacciones": {
            "values": [
                { date: 1695276000000, count: Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000 },
                { date: 1695286000000, count: Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000 },
                { date: 1695296000000, count: Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000 },
                { date: 1695306000000, count: Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000 },
                { date: 1695316000000, count: Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000 }
            ]
        },
        "valorMonetario": {
            "values": [
                { date: 1695276000000, count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000 },
                { date: 1695286000000, count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000 },
                { date: 1695296000000, count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000 },
                { date: 1695306000000, count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000 },
                { date: 1695316000000, count: Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000 }
            ]
        },
        "alertas": [
            { date: 1695276000000, cant: Math.floor(Math.random() * (80 - 20 + 1)) + 20 },
            { date: 1695286000000, cant: Math.floor(Math.random() * (80 - 20 + 1)) + 20 },
            { date: 1695296000000, cant: Math.floor(Math.random() * (80 - 20 + 1)) + 20 },
            { date: 1695306000000, cant: Math.floor(Math.random() * (80 - 20 + 1)) + 20 },
            { date: 1695316000000, cant: Math.floor(Math.random() * (80 - 20 + 1)) + 20 }
        ],
        "drp":{
            "sinc":Math.floor(Math.random() * (90 - 20 + 1)) + 20,        
        },
        "nombres": {
            nombres
        },
        "clientes": {
            "total": clientesTotal,
            "activos": clientesActivos,
            "inactivos": clientesInactivos,
            "errores":erroresClientes
        },
        "ordenes1": {
            "total": [
                {
                    "total": 500,
                },
                {
                    "total": 0,
                },
            ],
            "activos": [
                {
                    "total": 420,
                },
                {
                    "total": 80,
                },
            ],
            "inactivos": [
                {
                    "total": 80,
                },
                {
                    "total": 420,
                },
            ]
        },
        "infraestructura": {
            "info": [
                { type: "SERVIDORES", correcto: Math.floor(Math.random() * (80 - 20 + 1)) + 20, problema:Math.floor(Math.random() * (3 - 1 + 1)) + 1 },
                { type: "STORAGE", correcto: Math.floor(Math.random() * (80 - 20 + 1)) + 20, problema:Math.floor(Math.random() * (3 - 1 + 1)) + 1 },
                { type: "BASE DE DATOS", correcto: Math.floor(Math.random() * (80 - 20 + 1)) + 20, problema:Math.floor(Math.random() * (3 - 1 + 1)) + 1 },
                { type: "COMUNICACIONES", correcto: Math.floor(Math.random() * (80 - 20 + 1)) + 20, problema:Math.floor(Math.random() * (3 - 1 + 1)) + 1 },
                { type: "SEGURIDAD PERIMETRAL", correcto: Math.floor(Math.random() * (80 - 20 + 1)) + 20, problema:Math.floor(Math.random() * (3 - 1 + 1)) + 1 }
            ]
        },
        "ordenes": {
            "enviadas": [
                {
                    "name": "Pendientes",
                    "numtransacciones": Math.round(Math.random() * (2000 - 10000) + 10000),
                    "volumenmonetario": Math.round(Math.random() * (2000000000 - 6000000000) + 6000000000)
                },
                {
                    "name": "Por Enviar",
                    "numtransacciones": Math.round(Math.random() * (20000 - 100) + 10000),
                    "volumenmonetario": Math.round(Math.random() * (4000000000 - 5000000000) + 5000000000)
                },
                {
                    "name": "Enviadas",
                    "numtransacciones": Math.round(Math.random() * (20000 - 10000) + 10000),
                    "volumenmonetario": Math.round(Math.random() * (2000000000 - 3000000000) + 3000000000)
                },
                {
                    "name": "Confirmadas",
                    "numtransacciones": Math.round(Math.random() * (20000 - 10000) + 10000),
                    "volumenmonetario": Math.round(Math.random() * (2000000000 - 3000000000) + 3000000000)
                },
                {
                    "name": "Liquidadas",
                    "numtransacciones": Math.round(Math.random() * (20000 - 10000) + 10000),
                    "volumenmonetario": Math.round(Math.random() * (4000000000 - 5000000000) + 5000000000)
                },
                {
                    "name": "Devoluciones",
                    "numtransacciones": Math.round(Math.random() * (20000 - 10000) + 10000),
                    "volumenmonetario": Math.round(Math.random() * (200000000 - 300000000) + 300000000)
                },
    
                {
                    "name": "Canceladas",
                    "numtransacciones": Math.round(Math.random() * (20000 - 10000) + 10000),
                    "volumenmonetario": Math.round(Math.random() * (400000000 - 700000000) + 700000000)
                },
                {
                    "name": "Rechazada Banxico",
                    "numtransacciones": Math.round(Math.random() * (20000 - 10000) + 10000),
                    "volumenmonetario": Math.round(Math.random() * (2000000000 - 3000000000) + 3000000000)
                },
                {
                    "name": "Rechazada Adapter",
                    "numtransacciones": Math.round(Math.random() * (20000 - 10000) + 10000),
                    "volumenmonetario": Math.round(Math.random() * (500000000 - 900000000) + 900000000)
                }
            ]
        },
        "lines": {
            "timeline1": getTimelineData(),
            "timeline2": getTimelineData2()
        },
    
    }
}
export const data = getData()
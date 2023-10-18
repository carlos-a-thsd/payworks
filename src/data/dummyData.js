import moment from 'moment';
function distribuirValores(elementos) {
    const total = elementos.reduce((total, elemento) => total + elemento.value, 0);
    const factorDeEscalado = 100 / total;
    return elementos.map(elemento => ({
        name: elemento.name,
        value: Math.floor(elemento.value * factorDeEscalado)
    }));
}
function aleatorioResumenMonetario(){
    return Math.floor(Math.random() * (10000000 - 1000000 + 1)) + 1000000;
}
function aleatorioResumenTransacional(){
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

    data.map(o =>
        Object.assign(o, {
            y1: data2.find(p => p.date == o.date) != undefined ? data.find(p => p.date == o.date).y1 : null,
        })
    );

    return data;
}

function generarValoresAleatorios(nombres, rangoMinimo, rangoMaximo) {
    return nombres.map(nombre => {
        const valor = Math.random() * (rangoMaximo - rangoMinimo) + rangoMinimo;
        return { name: nombre, value: Math.floor(valor) };
    });
}


export function getData() {
    const nombres = ["GFNORTE", "BYOD", "GFBA", "INVITADOS", "OTHERS"].map(
        (o) => ({
            name: o,
            count: Math.floor(Math.random() * (100 - 20) + 20),
        })
    );
    
    const disponibilidad = ["Portal Payworks", "Emisores", "Comercios", "Transacciones Físicas", "Transacciones Digitales"];
    const disponibilidadConValores = generarValoresAleatorios(disponibilidad, 1, 4);
    const cats = ["Monterrey", "Cd. de México", "Durango"].map(name => ({ name, value: Math.random() * 100000 }));
    const emisores = ["Banorte", "BBVA", "HSBC", "Santander", "Citibanamex"];
    const emisoresConValores = generarValoresAleatorios(emisores, 0, 100);
    const emisoresAjustados = distribuirValores(emisoresConValores)
    
    const comercios = ["Walmart", "Amazon", "Mercado Libre", "Liverpool", "Coppel"];
    const comerciosConValores = generarValoresAleatorios(comercios, 0, 100);
    const comerciosAjustados = distribuirValores(comerciosConValores);
    
    const totalMonetario = aleatorioResumenMonetario();
    const pronosticoMonetario = totalMonetario+10000;
    const promedioMonetario = totalMonetario + 43534;
    const metaMonetario = pronosticoMonetario+109148;
    
    const totalTransaccional = aleatorioResumenTransacional();
    const pronosticoTransaccional = totalTransaccional+10000;
    const promedioTransaccional = totalTransaccional + 43534;
    const metaTransaccional = pronosticoTransaccional+109148;

    return {
        nombres,
        cats,
        emisoresAjustados,
        comerciosAjustados,
        disponibilidadConValores,
        "timeline1": getTimelineData(),
        "timeline2": getTimelineData(),
        "resumenMonetario":{
            "total":totalMonetario,
            "pronostico":pronosticoMonetario,
            "promedio":promedioMonetario,
            "meta":metaMonetario,
            "porcentaje":(Math.floor(Math.random() * 21) - 10)
        },
        "resumenTransaccional":{
            "total":totalTransaccional,
            "pronostico":pronosticoTransaccional,
            "promedio":promedioTransaccional,
            "meta":metaTransaccional,
            "porcentaje":(Math.floor(Math.random() * 21) - 10)
        }
    }
}
export const data = getData()
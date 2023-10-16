import moment from 'moment';
export function getData () {

    
   
    
    const nombres = ["GFNORTE", "BYOD", "GFBA", "INVITADOS", "OTHERS"].map(
        (o) => ({
            name: o,
            count: Math.floor(Math.random() * (100 - 20) + 20),
        })
    );
    const cats = ["Monterrey", "Cd. de México", "Durango"].map(name => ({ name, value: Math.random() * 100000 }));
    const emisores = ["Banorte", "BBVA", "HSBC", "Santander", "Citibanamex"];

// Generar valores aleatorios para cada emisor
const emisoresConValores = emisores.map(emisor => {
    // Generar un valor aleatorio en el rango de 0 a 100
    const valor = Math.random() * 100;

    return { name: emisor, value: valor };
});

// Calcular el total de valores asignados a los emisores
const totalActual = emisoresConValores.reduce((total, emisor) => total + emisor.value, 0);

// Ajustar los valores para que el total sea igual a 100
const factorDeEscalado = 100 / totalActual;
const emisoresAjustados = emisoresConValores.map(emisor => ({
    name: emisor.name,
    value: Math.floor(emisor.value * factorDeEscalado)
}));
    return {
            nombres,
            cats,
            emisoresAjustados
    }
}
export const data = getData()
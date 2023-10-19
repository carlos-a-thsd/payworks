import { Chart, registerables } from "chartJs3";


//labels/cantidad/volumen monetario/id de Chart
export function makeChartBars (types, cant, vm, id){
    const data = {
        labels: types,
        datasets: [{
            label: 'Transacciones',
            data: cant,
            backgroundColor: [
                '#B5E3FD'
            ],
            borderColor: [
                '#B5E3FD'
            ],
            borderWidth: 1
        },
        {
            label: 'Volumen monetario',
            data: vm,
            backgroundColor: [
                '#FFB0BA'
            ],
            borderColor: [
                '#FFB0BA'
            ],
            borderWidth: 1
        }]
    };
    
    const config = {
        type: 'bar',
        data,
        options: {
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
        }
    };
    
    
    const myChart = new Chart(
        id,
        config
    );
}



export function makeChartBarSingle (types, cant, id, color, position, maximo){

    const data = {
        labels: types,
        datasets: [{
            data: cant,
            backgroundColor: [
                color            
            ],
            borderColor: [
                color
            ],
            borderWidth: 1
        }]
    };
    
    const config = {
        type: 'bar',
        data,
        options: {
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            plugins: {
                legend: {
                    position: 'none',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    
                    display: false,
                    
                },
                x: {
                    position: position,
                    max:maximo
                }
                
            },
        }
    };
    
    
    const myChart = new Chart(
        id,
        config
    );
}

export function makeConcepto(cant, vm, id, maximocant, maximovm){
    makeChartBarSingle(["Transacciones"], cant,id+"_transacciones", "#A569BD", "top", maximocant);
    makeChartBarSingle(["Volumen monetario"], vm,id+"_volumenmonetario", "#5DADE2", "bottom", maximovm);
}
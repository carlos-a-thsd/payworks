<template>
    <div class="container-grid">
        <div v-for="(comercio, index) in widgetData.topComerciosData" :key="comercio.name">
            <div v-for="topComercio in comercio" class="card">
                <div class="titulo">
                    <h6>{{ topComercio.name }}</h6>
                </div>
                <canvas :id="`${this.id}_${index}`" style="width:40%;height:40%;margin: 0 auto;"></canvas>
                <div class="container">
                    <div class="container_1">
                        <div>
                            <p>$ {{ topComercio.total || 'No disponible' }} <span class="signo">M</span></p>
                            <p class="name">Total</p>
                        </div>
                        <p class="desviacion"> {{ topComercio.desviacion | formatPercentage || 'No disponible' }}
                            <span>%</span>
                        </p>
                    </div>
                    <div class="container_2">
                        <div>
                            <p>$ {{ topComercio.meta | formatMillions || 'No disponible' }} <span class="signo">M</span></p>
                            <p class="name">Meta</p>
                        </div>
                        <div>
                            <p>${{ topComercio.pronostico | formatMillions || 'No disponible' }} <span
                                    class="signo">M</span>
                            </p>
                            <p class="name">Pronostico</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ChartLib } from '../components/libs/ChartLib';

export default {
    data() {
        return {
            colores: ["#004e97", "#46b3a9", "#fc586f", "#8b74d7", "#fdbc38", "#6e838e", "#2a9ec6", "#e10052", "#26e7a7"],
        };
    },
    props: ["id", "widgetData"],
    filters: {
        formatMillions(value) {
            if (typeof value !== 'number') {
                return 'No disponible';
            }

            if (value >= 1000000) {
                return (value / 1000000).toFixed(2) + 'M';
            }

            return value.toString();
        },
        formatPercentage(value) {
            if (typeof value === 'number') {
                return (value * 100).toFixed(2) + '%';
            }
            return 'No disponible';
        },
    },
    methods: {
        buildComponent() {
            for (let index = 0; index < this.widgetData.topComerciosData.length; index++) {
                this.createDoughnutChart(index);
            }
        },
        createDoughnutChart(index) {
            const chartId = this.id + '_' + index;
            const comercio = this.widgetData.topComerciosData[index];
            console.log(comercio);

            ChartLib.palettes.custom = this.colores;
            ChartLib.doughnut(chartId, comercio, {
                xValues: ["name"],
                yvalues: ["disponibilidad", "noDisponibilidad"],
                yfmt: "n",
                legend: false,
                palette: "custom",
            });
        },
    },
    watch: {
        widgetData: {
            handler() {
                this.buildComponent();
            },
            deep: true,
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.buildComponent();
        });
    },
};
</script>
  
<style scoped>
.container-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 768px) {
    .container-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}

.card {
    width: 240px;
    padding: 1px;
    margin: 5px;
    border-radius: 10px;
    border: 1.5px solid gray;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    background-color: #FFFDFF;
}

.titulo {
    padding-top: 5px;
    padding-bottom: 0px;
    text-align: center;
}

.container {
    display: flex;
    justify-content: space-between;
    gap: .5rem;
    align-items: center;
}

.container_2 {
    display: flex;
    gap: 1.5rem;
    justify-content: space-between;
    font-size: 10px;
    font-weight: 600;
}

.container_1 {
    display: flex;
    align-items: start;
    gap: .3rem;
    font-size: 10px;
    font-weight: 600;
}

.name {
    font-weight: 500;
    font-size: 13px;
}

.desviacion {
    color: #FF0000;
    font-size: 10px;
}

.signo {
    font-size: 10px;
    font-weight: 600;
}
</style>
  
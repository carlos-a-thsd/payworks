<template>
    <div class=" me-4">
        <div class="text-center">
            <h3 class="d-inline total">{{ formatear("ch6", this.widgetData.resumenTransaccional.promedio) }}</h3>
            <p class="d-inline me-1"
                v-bind:class="this.widgetData.resumenTransaccional.porcentaje > 0 ? 'text-success' : 'text-danger'">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                    <path :fill="this.widgetData.resumenTransaccional.porcentaje > 0 ? 'currentColor' : 'red'"
                        :d="this.widgetData.resumenTransaccional.porcentaje > 0 ? 'M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z' : 'M6 18v-2h8.59L5 6.41L6.41 5L16 14.59V6h2v12z'">
                    </path>
                </svg>
                {{ formatear("p100", this.widgetData.resumenTransaccional.porcentaje) }}
            </p>
        </div>
        <div class="d-flex justify-content-between align-items-center pt-3">
            <h6 class="d-inline subtitle-line">Pronóstico</h6>
            <h5 class="d-inline ml-2 grey number">{{ formatear("ch6", this.widgetData.resumenTransaccional.pronostico) }}
            </h5>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-0">
            <h6 class="d-inline subtitle-line">Promedio</h6>
            <h5 class="d-inline ml-2 grey number">{{ formatear("ch6", this.widgetData.resumenTransaccional.promedio) }}</h5>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-0">
            <h6 class="d-inline subtitle-line">Meta</h6>
            <h5 class="d-inline ml-2 grey number">{{ formatear("ch6", this.widgetData.resumenTransaccional.meta) }}</h5>
        </div>
    </div>
    <div style="display: flex; justify-content: center; align-items: center;">
        <canvas :id="this.id + `1`" style="width:285px;height:90px;"></canvas>
    </div>
</template>
<script>
import { fmt } from './libs/fmt';
import { ChartLib } from '../components/libs/ChartLib';

export default {
    data() {
        return {
            colores: ["#ff0054", "#8900f2", "#006ba6", "#2e294e", "#582f0e", "#D2691E", "#247ba0", "#87CEEB", "#E0B0FF"]
        };
    },
    props: [
        "widgetData",
        "id"
    ],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;
            ChartLib.hbar(this.id + `1`, this.widgetData.transaccional.values, {
                xvalues: "date",
                yvalues: ["count"],
                yfmt: "s",
                legend: false,
                palette: "custom",
                // fill: ["#3cba9f"],
            });
        },
        formatear(formato, valor) {
            return fmt(formato)(valor)
        }
    },
    watch: {
        'widgetData.windowsData': {
            handler() {
                this.buildComponent();
            },
            deep: true
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.buildComponent();
        });
    }
}
</script>
<style>
.grey {
    color: grey;
}

.number {
    font-size: 1.2rem;
}

.subtitle-line {
    font-size: 13px;
}
</style>
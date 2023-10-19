<template>
    <div class="row">
        <div class="col-6">
            <canvas :id="`${id}`" style="width:100%;height:100%;"></canvas>
        </div>
        <div class="col-6">
            <div class="col text-center mb-2">
                    <h6 class="mb-0 ms-1">{{ formatear("n", this.widgetData.transacciones[this.id].grafica[0].value) }}</h6>
                    <span class="bullet me-1" style="background-color: #007B0C;"></span>
                    <p class="d-inline">Aceptadas</p>
                </div>
                <div class="col text-center mb-2">
                    <h6 class="mb-0 ms-1">{{ formatear("n", this.widgetData.transacciones[this.id].grafica[1].value) }}</h6>
                    <span class="bullet me-1" style="background-color: #E00000;"></span>
                    <p class="d-inline">Rechazadas</p>
                </div>
                <div class="col text-center mb-2">
                    <h6 class="mb-0 ms-1">{{ formatear("n", this.widgetData.transacciones[this.id].total) }}</h6>
                    <p class="d-inline">Total</p>
                </div>
        </div>
        <div class="col text-end ms-1">
            <p class="d-inline">Total monetario:</p>
            <h5 class="d-inline ms-1">{{ formatear("ch6", this.widgetData.transacciones[this.id].totalMonetario) }}</h5>
        </div>
    </div>
</template>
<script>
import { ChartLib } from '../components/libs/ChartLib';
import { fmt } from './libs/fmt';
export default {
    data() {
        return {
            colores: ["#007B0C", "#E00000", "#fc586f", "#8b74d7", "#fdbc38", "#6e838e", "#2a9ec6", "#e10052", "#26e7a7"],
        };
    },
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;
            console.log(this.id)
            ChartLib.doughnut(this.id, this.widgetData.transacciones[this.id].grafica, {
                xvalues: "name",
                yvalues: ["value"],
                yfmt: "n",
                legend: false,
                palette: "custom"
            });
        },
        formatear(formato, valor) {
            return fmt(formato)(valor)
        }
    },
    watch: {
        widgetData: {
            handler() {
                this.buildComponent();
            },
            deep: true,
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.buildComponent();
        })
    }
}
</script>
<style scoped>
.bullet {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #004e97;
    border-radius: 10px;
    margin-right: 5px;
    /* margin-bottom:5px ; */
}
.p{
    font-size: 12px;
}
</style>
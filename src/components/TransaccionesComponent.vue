<template>
    <div class="row">
        <div class="col-6">
            <canvas :id="`${id}`" style="width:100%;height:100%;"></canvas>
        </div>
        <div class="col-6">
            <div
                class="col mb-2
                d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                <div
                    class="d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                    <span class="bullet-t" style="background-color: #007B0C;"></span>
                    <h2>Aceptadas: </h2>
                </div>
                <h6 class="ms-1">{{ formatear("n", this.widgetData.transacciones[this.id].grafica[0].value) }}</h6>
            </div>
            <div
                class="col mb-2
                d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-star">
                <div
                    class="d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                    <span class="bullet-t" style="background-color: #E00000;"></span>
                    <h2>Rechazadas: </h2>
                </div>
                <h6 class="ms-1">{{ formatear("n", this.widgetData.transacciones[this.id].grafica[1].value) }}</h6>
            </div>
            <div
                class="col mb-2
                d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start">
                <h2>Total: </h2>
                <h6 class="ms-1">{{ formatear("n", this.widgetData.transacciones[this.id].total) }}</h6>
            </div>
        </div>
        <div class="col text-end ms-1">
            <p class="d-inline">Total monetario:</p>
            <h5 class="d-inline ms-1">{{ formatear("ch6",
                this.widgetData.transacciones[this.id].totalMonetario) }}</h5>
        </div>
    </div>
</template>
<script>
import { ChartLib } from '../components/libs/ChartLib';
import { fmt } from './libs/fmt';
export default {
    data() {
        return {
            colores: ["#049631", "#E00000", "#fc586f", "#8b74d7", "#fdbc38", "#6e838e", "#2a9ec6", "#e10052", "#26e7a7"],
        };
    },
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;
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
.row {
    display: flex;
    justify-content: center;
    align-items: center;
}

.bullet-t {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #004e97;
    border-radius: 10px;
    margin-right: 5px;
    margin-bottom: 5px;
}

.p {
    font-size: 12px;
}

h5 {
    font-size: 24px;
    font-weight: 600;
}

h2 {
    font-size: 15px;
    font-weight: 400;
}
</style>
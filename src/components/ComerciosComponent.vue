<template>
    <div>
        <div class="row">
            <div class="col">
                <canvas :id="`${this.id}`" style="width:100%;height:100%;"></canvas>
            </div>
            <div class="col ms-0">
                <ul class="custom-list">
                    <li v-for="(comercio, index) in widgetData[this.id]" :key="comercio.name">
                        <div class="d-flex align-items-center justify-content-between w-100 mt-2">
                            <span class="bullet-c" :style="{ backgroundColor: colores[index % colores.length] }"></span>
                            <div class="d-flex align-items-center justify-content-between w-100 gap-2">
                                <h2 class="value">{{ comercio.name }}</h2>
                                <span class="value">{{ formatear("p100", comercio.value) }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="m-0">
        <div class="col-12 d-flex align-items-center justify-content-center">
            <span class="bullet-c mt-2" style="background-color: green;"></span>
            <h3 class="d-inline mt-2">
                {{ this.id == "comerciosFisicosAjustados" ? "Autorizador B" : "Autorizador A" }}
            </h3>
        </div>
    </div>
</template>
  
<script>
import { ChartLib } from '../components/libs/ChartLib';
import { fmt } from './libs/fmt';
export default {
    data() {
        return {
            colores: ["#ff0054", "#8900f2", "#006ba6", "#2e294e", "#582f0e", "#D2691E", "#247ba0", "#87CEEB", "#E0B0FF"],
            autorizador: "A"
        };
    },
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;
            ChartLib.pie(this.id, this.widgetData[this.id], {
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
    justify-content: space-between;
    align-items: center;
}

.value {
    font-size: 12px;
    font-weight: 500;
    color: #000;
    margin-bottom: 0;
}

.custom-list {
    list-style-type: none;
    padding-left: 0;
    font-size: 12px;
}

.bullet-c {
    display: inline-block;
    width: 12px;
    /* Ancho del bullet */
    height: 10px;
    /* Alto del bullet */
    background-color: #004e97;
    /* Color de fondo del bullet */
    border-radius: 10px;
    /* Bordes rectos para hacerlo rectangular */
    margin-right: 5px;
    /* Espacio entre los bullets y el texto */
}

h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0;
}
</style>
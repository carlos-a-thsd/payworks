<template>
    <div>
        <div class="row">
            <div class="col-6">
                <canvas :id="`${this.id}`" style="width:100%;height:100%;"></canvas>
            </div>
            <div class="col-6 ms-0">
                <ul class="custom-list">
                    <li v-for="(comercio, index) in widgetData.comerciosAjustados" :key="comercio.name">
                        <span class="bullet" :style="{ backgroundColor: colores[index % colores.length] }"></span> {{ comercio.name +" "+formatear("p100",comercio.value) }}
                    </li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="col-12 d-flex align-items-center justify-content-around">
            <div>
                <span class="bullet"  style="background-color: red;"></span>
                <h3 class=" d-inline">Autorizador B</h3>
            </div>
        </div>
    </div>
</template>
<script>
import { ChartLib } from '../components/libs/ChartLib';
import { fmt } from './libs/fmt';
export default {
    data() {
        return {
            colores: ["#004e97", "#46b3a9", "#fc586f", "#8b74d7", "#fdbc38", "#6e838e", "#2a9ec6", "#e10052", "#26e7a7"],
        };
    },
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;  
            ChartLib.pie(this.id, this.widgetData.comerciosAjustados, {
                xvalues: "name",
                yvalues: ["value"],
                yfmt: "n",
                legend: false,
                palette: "custom"
            });
        },
        formatear(formato, valor){
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
.custom-list {
    list-style-type: none;
    padding-left: 0;
}

.bullet {
    display: inline-block;
    width: 15px; /* Ancho del bullet */
    height: 15px; /* Alto del bullet */
    background-color: #004e97; /* Color de fondo del bullet */
    border-radius: 10px; /* Bordes rectos para hacerlo rectangular */
    margin-right: 5px; /* Espacio entre los bullets y el texto */
}

</style>
<template>
    <div>
        <div class="row">
            <div class="col">
                <canvas :id="`${this.id}`" style="width:100%;height:100%;"></canvas>
            </div>
            <div class="col ms-0">
                <ul class="custom-list">
                    <li v-for="(emisor, index) in widgetData.emisoresAjustados" :key="emisor.name">
                        <span class="bullet" :style="{ backgroundColor: colores[index % colores.length] }"></span> {{
                            emisor.name + " " + formatear("p100", emisor.value) }}
                    </li>
                </ul>
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
            ChartLib.pie(this.id, this.widgetData.emisoresAjustados, {
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
.custom-list {
    list-style-type: none;
    padding-left: 0;
    font-size: 12px;
}

.bullet {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #004e97;
    border-radius: 10px;
    margin-right: 5px;
}
</style>
<template>
    <div>
        <div class="row">
            <div class="col">
                <canvas :id="`${this.comercio}`" style="width:100%;height:100%;"></canvas>
            </div>
            <div class="col ms-0">
                <ul class="custom-list" style="font-size: 14px;">
                    <li v-for="(emisor, index) in widgetData.topCategorias[this.comercio]" :key="emisor.name">
                        <span class="bullet" :style="{ backgroundColor: colores[index % colores.length] }"></span> {{
                            emisor.name}}
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
            colores: ["#00A6C6", "#FB5A00", "#2EBDCB", "#F2EADD", "#A4DF23", "#007DC5", "#85BB03", "#624034", "#F87B1F", "#51CBE3"],
        };
    },
    props: [
        "id",
        "widgetData",
        "comercio"
    ],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;
            console.log(this.widgetData.topCategorias[this.comercio]);
            ChartLib.doughnut(this.comercio, this.widgetData.topCategorias[this.comercio], {
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
    
</style>
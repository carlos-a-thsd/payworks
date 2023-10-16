<template>
    <div>
        <div>
            <canvas :id="`${this.id}`" style="width:100%;height:100%;"></canvas>
        </div>
    </div>
</template>
<script>
let colores = ["#004e97", "#46b3a9", "#fc586f", "#8b74d7", "#fdbc38", "#6e838e", "#2a9ec6", "#e10052", "#26e7a7"];

import { ChartLib } from '../components/libs/ChartLib';
export default {
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = colores;            
            ChartLib.bar(this.id, this.widgetData.cats, {
                xvalues: "name",
                yvalues: ["value"],
                palette: "custom",
                xfmt: "n",
                yfmt: "s"
            });
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
<style>
    
</style>
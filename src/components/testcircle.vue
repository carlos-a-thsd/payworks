<template>
    <div>
        <div>
            <canvas :id="`${this.id}`" style="width:100%;height:100%;"></canvas>
        </div>
    </div>
</template>
<script>
import { ChartLib } from '../components/libs/ChartLib';
export default {
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            ChartLib.pie(this.id, this.widgetData.cats.cats, {
                xvalues: "name",
                yvalues: ["value"],
                yfmt: "n",
                legend: false,
                palette: "triage"
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
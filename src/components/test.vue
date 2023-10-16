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
            const cats = ["Monterrey", "Cd. de México", "Durango"].map(name => ({ name, value: Math.random() * 100000 }));

            ChartLib.bar("alertas", cats, {
                xvalues: "name",
                yvalues: ["value"],
                palette: "triage",
                flip: true,
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
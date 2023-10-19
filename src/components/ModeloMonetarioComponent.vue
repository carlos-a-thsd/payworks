<template>
    <div class="row">
        <div class="col-12 mb-2">
            <canvas :id="`${this.id}`" style="width:100%;height:100%;"></canvas>
        </div>
    </div>
    <div class="row ms-2">
        <div class="col-4">
            <div class="rectangle d-inline-block" style="background-color: #A2A29D">
            </div>
            <h6 class="ms-0 d-inline-block">Intérvalo&nbsp;</h6>
        </div>
        <div class="col-4">
            <div class="rectangle d-inline-block" style="background-color: #F76300">
            </div>
            <h6 class="ms-0 d-inline-block">Pronóstico&nbsp;</h6>
        </div>
        <div class="col-4">
            <div class="rectangle d-inline-block" style="background-color: #27D507">
            </div>
            <h6 class="ms-0 d-inline-block">Real&nbsp;</h6>
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
            const model = this.widgetData.timeline1;
            ChartLib.line(this.id, model, {
                yvalues: ["ye", "y1", "yl", "yu"],
                palette: "model",
                yfmt: "ch6",
                fill: [null, null, "#FFFDFF", "#898585"],
                width: [0.5, 2, 0.1, 0.1]
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
<style scoped>
.chart-container {
    margin-left: -60px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.titulo {
    padding-top: 5px;
    padding-bottom: 0px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: left;
}

.rectangle {
    display: flex;
    width: 20px;
    height: 10px;
    border-radius: 3px;
    margin: 0 10px;
}
</style>
<template>
    <div class="card">
        <h1>IIS</h1>
        <div class="container-w">
            <div class="col">
                <div>
                    <p class="porcentajeAvailability">{{ widgetData.response }} %</p>
                    <h2 class="availability">Response time</h2>
                </div>
                <ul class="custom-list">
                    <li v-for="elemento in widgetData.iisConValores" :key="elemento.name">
                        <span class="bullet" :class="{
                            red: elemento.value === 1,
                            green: elemento.value === 2,
                            yellow: elemento.value === 3
                        }"></span>
                        {{ elemento.name }}
                    </li>
                </ul>
            </div>
            <div>
                <div class="col">
                    <canvas :id="this.id + `_2`" style="width:350px;height:125px;"></canvas>
                </div>
                <div class="col">
                    <canvas :id="this.id + `_1`" style="width:320px;height:125px;"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ChartLib } from '../../components/libs/ChartLib';

export default {
    data() {
        return {
            colores: ["#FFA07A", "#9370DB", "#4682B4", "#A0522D", "#DA70D6", "#D2691E", "#9932CC", "#87CEEB", "#E0B0FF"]
        };
    },
    props: ['id', 'widgetData'],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;
            ChartLib.bar(this.id + `_1`, this.widgetData.iisData, {
                yvalues: ["value"],
                legend: false,
                palette: "custom",
            });

            ChartLib.line(this.id + `_2`, this.widgetData.availibility.values, {
                xvalues: "date",
                yvalues: ["count"],
                yfmt: "n",
                legend: false,
                palette: "custom",
            });

        }
    },
    watch: {
        'widgetData.windowsData': {
            handler() {
                this.buildComponent();
            },
            deep: true
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.buildComponent();
        });
    }
}

</script>

<style scoped>
h1 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
}

.card {
    padding: 10px;
    margin: 5px;
    margin-left: 0px;
    margin-right: -15px;
    border-radius: 10px;
    border: 1.5px solid gray;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    width: auto;
    background-color: #FFFDFF;
}

.container-w {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-top: 10px;
}

.availability {
    font-size: .8rem;
    font-weight: 400;
    margin-bottom: 2rem;
    margin-top: 10px;
    text-align: center;
}

.porcentajeAvailability {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
    color: #000000;
}
</style>
<template>
    <div class="card">
        <h1>Windows</h1>
        <div class="container-w">
            <div class="col">
                <div>
                    <p class="porcentajeAvailability">{{ widgetData.Availability }} %</p>
                    <h2 class="availability">Availability</h2>
                </div>
                <ul class="custom-list">
                    <li v-for="elemento in widgetData.windowsConValores" :key="elemento.name">
                        <span class="bullet" :class="{
                            red: elemento.value === 1,
                            green: elemento.value === 2,
                            yellow: elemento.value === 3
                        }"></span>
                        {{ elemento.name }}
                    </li>
                </ul>
            </div>
            <div class="col">
                <div style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
                    <p>CPU</p>
                    <canvas :id="this.id + `1`" style="width:305px;height:80px;"></canvas>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
                    <p>RAM</p>
                    <canvas :id="this.id + `2`" style="width:305px;height:80px;"></canvas>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
                    <p>Disk</p>
                    <div>
                        <canvas :id="this.id + `3`" style="width:305px;height:50px;"></canvas>
                        <canvas :id="this.id + `4`" style="width:305px;height:50px;"></canvas>
                    </div>
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
            colores: ["#ff0054", "#8900f2", "#006ba6", "#2e294e", "#582f0e", "#D2691E", "#247ba0", "#87CEEB", "#E0B0FF"]
        };
    },
    props: ['id', 'widgetData'],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;
            ChartLib.line(this.id + `1`, this.widgetData.CPU.values, {
                xvalues: "date",
                yvalues: ["count"],
                yfmt: "n",
                legend: false,
                palette: "custom",
            });

            ChartLib.bar(this.id + `2`, this.widgetData.ram.values, {
                xvalues: "date",
                yvalues: ["count"],
                yfmt: "n",
                legend: false,
                palette: "custom",
                fill: ["#3cba9f"],
            });

            ChartLib.hbar(this.id + `3`, this.widgetData.diskC.values, {
                xvalues: "date",
                yvalues: ["count"],
                yfmt: "s",
                legend: false,
                palette: "custom",
                fill: ["#3cba9f"],
            });

            ChartLib.hbar(this.id + `4`, this.widgetData.diskD.values, {
                xvalues: "date",
                yvalues: ["count"],
                yfmt: "s",
                legend: true,
                palette: "custom",
                fill: ["#3cba9f"],
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
};
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
  
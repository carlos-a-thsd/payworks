<template>
    <div class="ms-4">
        <div class="row">
            <div class="col-6 me-0 pt-4">
                <div class="ms-3" :id="`${this.id}`" style="width:100%;height:auto;"></div>
                <div class="col d-flex pt-2">
                    <div class="col text-center mb-2">
                        <h6 class="mb-0 ms-1">{{ formatear("p100", this.widgetData.dispInfra.prom)}}</h6>
                        <p style="font-size: 14px;" class="d-inline">Promedio</p>
                    </div>
                    <div class="col text-center mb-2">
                        <h6 class="mb-0 ms-1">{{ formatear("p100", this.widgetData.dispInfra.sla)}}</h6>
                        <p style="font-size: 14px;" class="d-inline">SLA</p>
                    </div>
                </div>
            </div>
            <div class="col-6 ms-0">
                <ul class="custom-list">
                    <li v-for="elemento in widgetData.disponibilidadInfraestructuraConValores" :key="elemento.name">
                        <span class="bullet"
                            :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }"></span>
                        {{ elemento.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { progress } from './libs/progressChart';
// import { ChartLib } from '../components/libs/ChartLib';
import { fmt } from './libs/fmt';
export default {
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            var options2 = [
                {
                    w: "100",
                    h: "100",
                    innerRadius: "40",
                    fontsize1: "16px",
                    fontsize2: "10px",
                    text: "Rendimiento",
                    dy: "13",
                },
            ];
            progress(
                (Math.random() * (0.8 - 1) + 1) * 100,
                "#" + this.id,
                ["#049631", "#049631", "#049631", "#049631"],

                options2
            );

        },
        formatear(formato, valor) {
            return fmt(formato)(valor)
        }
    },
    watch: {
        widgetData: {
            handler() {
                // this.buildComponent();
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
.custom-list {
    list-style-type: none;
    padding-left: 0;
}

.red,
.green,
.yellow {
    display: inline-block;
    width: 12px;
    /* Ancho del bullet */
    height: 12px;
    /* Alto del bullet */
    border-radius: 15px;
    /* Bordes rectos para hacerlo rectangular */
    margin-right: 5px;
    /* Espacio entre los bullets y el texto */
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

.yellow {
    background-color: yellow;
}</style>

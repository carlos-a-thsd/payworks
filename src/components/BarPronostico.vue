<template>
    <div class="row d-flex">
        <div class="col-2">
            <h2 class="mb-0 ms-1">{{ formatear("ch6", this.widgetData.resumenBar.actividad) }}</h2>
            <p class="d-inline">Actividad</p>
        </div>
        <div class="col-8 text-center">
            <canvas class="d-inline" id="mundo" style="width:100%;height:50px;"></canvas>
        </div>
        <div class="col-2 text-center ">
            <h2 class="mb-0 ms-1">{{ formatear("ch6", this.widgetData.resumenBar.pronostico) }}</h2>
            <p class="d-inline">Pronóstico</p>
        </div>
    </div>
</template>
<script>
// import { smallLine } from './libs/w2';
import { stackedHbar } from './libs/stackedHbar';
import { fmt } from './libs/fmt';
export default {
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            var total = this.widgetData.resumenBar.actividad;
            var pronostico = this.widgetData.resumenBar.pronostico;
            const maxim = pronostico + 5000;
            var resume = [
                { name: "pronostico", count: [total] },
                { name: "promedio", count: [total] },
                { name: "total", count: [total] }
            ];
            stackedHbar("mundo", resume, "ch6", [
                "#049631",
                "#049631",
            ], maxim);
            // smallLine("mundo", "#676544");
            stackedHbar()
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
<style></style>
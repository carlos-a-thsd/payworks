<template>
    <div>
        <div class="text-end">
            <p class="d-inline me-1" style="color: blue;">
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
    <path fill="currentColor" :d="this.widgetData.resumenTransaccional.porcentaje > 0 ? 'M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z' : 'M6 18v-2h8.59L5 6.41L6.41 5L16 14.59V6h2v12z'"></path>
  </svg>
  <!-- {{ this.widgetData.resumenMonetario.porcentaje }} -->
  {{ formatear("p100", this.widgetData.resumenTransaccional.porcentaje) }}
</p>

            <h3 class="d-inline">{{ formatear("n", this.widgetData.resumenTransaccional.promedio) }}</h3>
        </div>
        <div class="d-flex justify-content-between align-items-center pt-3">
            <h6 class="d-inline">Pronóstico</h6>
            <h5 class="d-inline ml-2 grey">{{ formatear("n", this.widgetData.resumenTransaccional.pronostico) }}</h5>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-0">
            <h6 class="d-inline">Promedio</h6>
            <h5 class="d-inline ml-2 grey">{{ formatear("n", this.widgetData.resumenTransaccional.promedio) }}</h5>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-0">
            <h6 class="d-inline">Meta</h6>
            <h5 class="d-inline ml-2 grey">{{ formatear("n", this.widgetData.resumenTransaccional.meta) }}</h5>
        </div>
    </div>
</template>
<script>
import { fmt } from './libs/fmt';
export default {
    props: [
        "widgetData"
    ],
    watch: {
        widgetData: {
            handler() {
                
            },
            deep: true,
        },
    },
    methods:{
        formatear(formato, valor){
            return fmt(formato)(valor)
        }
    },
    mounted() {
        this.$nextTick(() => {
            // this.buildComponent();
        })
    }
}
</script>
<style>
    .grey{
        color: grey;
    }
</style>
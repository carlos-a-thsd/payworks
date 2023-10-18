<template>
    <div>
        <h1>Dashboard</h1>
        <div class="row">
            <div class="col-6">
                <CardComponent title="Bancos" icon="banda.png">
                    <EmisoresComponent id="emisores" :widgetData="dummydata"></EmisoresComponent>
                </CardComponent>
            </div>
            <div class="col-6">
                <CardComponent title="Emisores" icon="banda.png">
                    <ComerciosComponent id="comercios" :widgetData="dummydata"></ComerciosComponent>
                </CardComponent>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-6">
                <CardComponent title="Modelo analítico Transaccional" icon="banda.png">
                    <ModeloTransaccionalComponent id="transaccional" :widgetData="dummydata"></ModeloTransaccionalComponent>
                </CardComponent>
            </div>
            <div class="col-6">
                <CardComponent title="Modelo analítico Monetario" icon="banda.png">
                    <ModeloMonetarioComponent id="monetario" :widgetData="dummydata"></ModeloMonetarioComponent>
                </CardComponent>
            </div>
        </div>
        <div class="row mt-3">

            <div class="col-4">
                <CardComponent title="Volumen monetario" icon="banda.png">
                    <ResumenVolumenMonetario :widgetData="dummydata"></ResumenVolumenMonetario>
                </CardComponent>
            </div>
            <div class="col-4">
                <CardComponent title="Volumen transaccional" icon="banda.png">
                    <ResumenVolumenTransaccional :widgetData="dummydata"></ResumenVolumenTransaccional>
                </CardComponent>
            </div>
            <div class="col-4">
                <CardComponent title="Disponibilidad" icon="banda.png">
                    <DisponibilidadComponent :widgetData="dummydata"></DisponibilidadComponent>
                </CardComponent>
            </div>
        </div>
        <!-- <div class="col-4">

            <CardComponent title="Disponibilidad" icon="banda.png">
                <test></test>
            </CardComponent>
        </div>             -->
    </div>
</template>
<script setup>
import CardComponent from '../components/CardComponent.vue';
import test from '../components/test.vue';
import ComerciosComponent from '../components/ComerciosComponent.vue';
import EmisoresComponent from '../components/EmisoresComponent.vue';
import ResumenVolumenMonetario from '../components/ResumenVolumenMonetario.vue';
import ResumenVolumenTransaccional from '../components/ResumenVolumenTransaccional.vue';
import DisponibilidadComponent from '../components/DisponibilidadComponent.vue';

import ModeloTransaccionalComponent from '../components/ModeloTransaccionalComponent.vue';
import ModeloMonetarioComponent from '../components/ModeloMonetarioComponent.vue'
import { onMounted, ref } from "vue"
import { getData } from '../data/dummyData';

const dummydata = ref(getData())
onMounted(() => {
    setInterval(() => {
        dummydata.value = getData()
    }, 3000)
})
</script>
<style>
.row {
    width: 100%;
}
</style>
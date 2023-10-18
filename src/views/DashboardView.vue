<template>
    <div>
        <h1>Dashboard</h1>
        <div class="row">
            <div class="col-4">
                <CardComponent title="Bancos">
                    <test id="alertas" :widgetData="dummydata"></test>
                </CardComponent>
            </div>
            <div class="col-4">
                <CardComponent title="Emisores" icon="banda.png">
                    <EmisoresComponent id="otro" :widgetData="dummydata"></EmisoresComponent>
                </CardComponent>
            </div>
            <div class="col-4">
                <CardComponent title="Emisores" icon="banda.png">
                    aqui va un component
                </CardComponent>
            </div>
            <div class="mt-4">
                <h1>Top comercios</h1>
                <TopComerciosComponent :widgetData="dummydata" id="comercios" />
            </div>
            <div class="mt-4">
                <h1>Top Emisores</h1>
                <TopEmisoresComponent :widgetData="dummydata" id="topEmisores" />
            </div>
            <div class="col-4 mt-4">
                <TransaccionesComponent :widgetData="dummydata" id="transacciones" />
            </div>
        </div>

    </div>
</template>
<script setup>
import CardComponent from '../components/CardComponent.vue';
import TopComerciosComponent from '../components/TopComerciosComponent.vue';
import test from '../components/test.vue';
import EmisoresComponent from '../components/EmisoresComponent.vue';
import { onMounted, ref } from "vue"
import { getData } from '../data/dummyData';
import TopEmisoresComponent from '../components/TopEmisoresComponent.vue';
import TransaccionesComponent from '../components/TransaccionesComponent.vue';

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
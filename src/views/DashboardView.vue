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
                <CardComponent title="Bancos">
                    Aquí va el componente
                </CardComponent>
            </div>
        </div>

    </div>
</template>
<script setup>
import CardComponent from '../components/CardComponent.vue';
import test from '../components/test.vue';
import EmisoresComponent from '../components/EmisoresComponent.vue';
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
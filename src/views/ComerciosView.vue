<template>
    <div>

        <div class="col d-flex align-items-center">
            <fa icon="arrow-left" class="me-2 ms-2 fa-2x" @click="$router.go(-1)"/>
        <h1 class="m-0">Comercios {{ $route.params.tipo }}</h1>
    </div>

    <div class="row mt-4">
            <div class="col-md-6 col-sm-6 col-xl-6 col-xxl-6">
                <CardComponent title="Top categorías">
                    <TopComponent :id="$route.params.tipo" comercio="digitales" :widgetData="dummydata">
                    </TopComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-6 col-xxl-6">
                <CardComponent title="Top productos">
                    <TopComponent :id="$route.params.tipo" comercio="fisicas" :widgetData="dummydata">
                    </TopComponent>
                </CardComponent>
            </div>
        </div>
</div>
</template>
<script setup>
import CardComponent from '../components/CardComponent.vue';
import TopComponent from '../components/TopComponent.vue';
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
    
</style>
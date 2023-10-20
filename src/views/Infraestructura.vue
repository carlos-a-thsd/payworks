<template>
    <div class="row">
        <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3 mt-4">
            <CardComponent title="Servidores" icon="banda.png">
                <Servidores id="servidores" :widgetData="dummydata"></Servidores>
            </CardComponent>
        </div>
        <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3 mt-4">
            <CardComponent title="Seguridad" icon="banda.png">
                <Seguridad id="servidores" :widgetData="dummydata"></Seguridad>
            </CardComponent>
        </div>
        <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3 mt-4">
            <CardComponent title="Enlaces" icon="banda.png">
                <Enlaces id="servidores" :widgetData="dummydata"></Enlaces>
            </CardComponent>
        </div>
        <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3 mt-4">
            <CardComponent title="Base de Datos" icon="banda.png">
                <Db id="db" :widgetData="dummydata"></Db>
            </CardComponent>
        </div>
        <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3 mt-4">
            <CardComponent title="Web Servers" icon="banda.png">
                <WebServers id="webservers" :widgetData="dummydata"></WebServers>
            </CardComponent>
        </div>
        <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3 mt-4">
            <CardComponent title="Comunicaciones" icon="banda.png">
                <Comunicaciones id="comunicaciones" :widgetData="dummydata"></Comunicaciones>
            </CardComponent>
        </div>
        <div class="container-g">
            <div>
                <Windows id="chart-" :widgetData="dummydata"></Windows>
            </div>
            <div>
                <IIS id="iis" :widgetData="dummydata"></IIS>
            </div>
        </div>
    </div>
</template>

<script setup>
import CardComponent from '../components/CardComponent.vue';
import Servidores from '../components/Infraestructura/Servidores.vue';
import Seguridad from '../components/Infraestructura/Seguridad.vue';
import Enlaces from '../components/Infraestructura/Enlaces.vue';
import { onMounted, ref } from "vue"
import { getData } from '../data/dummyData';
import Db from '../components/Infraestructura/Db.vue';
import WebServers from '../components/Infraestructura/WebServers.vue';
import Comunicaciones from '../components/Infraestructura/Comunicaciones.vue';
import Windows from '../components/Infraestructura/Windows.vue';
import IIS from '../components/Infraestructura/IIS.vue';

const dummydata = ref(getData())
onMounted(() => {
    setInterval(() => {
        dummydata.value = getData()
    }, 3000)
})


</script>

<style scoped>
.row {
    width: 100%;
}

.container-g {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-top: 10px;
}
</style>
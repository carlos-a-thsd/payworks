<template>
    <div>
        <h1>Dashboard</h1>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Salud/Disponibilidad" icon="banda.png">
                    <DisponibilidadComponent id="disponibilidad" :widgetData="dummydata"></DisponibilidadComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Volumen monetario" icon="banda.png">
                    <ResumenVolumenMonetario :widgetData="dummydata"></ResumenVolumenMonetario>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Volumen transaccional" icon="banda.png">
                    <ResumenVolumenTransaccional :widgetData="dummydata"></ResumenVolumenTransaccional>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Disponibilidad/Infraestructura" icon="banda.png">
                    <DisponibilidadInfraestructuraComponent id="disponibilidadInfraestructura" :widgetData="dummydata"></DisponibilidadInfraestructuraComponent>
                </CardComponent>
            </div>
        </div>        
        
        <div class="row mt-3">           
            <div class="col-3">
                <CardComponent title="Comercios Digitales" icon="banda.png">
                    <ComerciosComponent id="comerciosDigitalesAjustados" :widgetData="dummydata"></ComerciosComponent>
                </CardComponent>
            </div>
            <div class="col-3">
                <CardComponent title="Transacciones Digitales" icon="banda.png">
                    <TransaccionesComponent id="digitales" :widgetData="dummydata"></TransaccionesComponent>
                </CardComponent>
            </div>
            <div class="col-3">
                <CardComponent title="Comercios Físicos" icon="banda.png">
                    <ComerciosComponent id="comerciosFisicosAjustados" :widgetData="dummydata"></ComerciosComponent>
                </CardComponent>
            </div>
            <div class="col-3">
                <CardComponent title="Transacciones Físicas" icon="banda.png">
                    <TransaccionesComponent id="fisicas" :widgetData="dummydata"></TransaccionesComponent>
                </CardComponent>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Emisores" icon="banda.png">
                    <EmisoresComponent id="emisores" :widgetData="dummydata"></EmisoresComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Puntos de Contacto" icon="banda.png">
                    <PuntosContactoComponent id="puntosContacto" :widgetData="dummydata"></PuntosContactoComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="ThousandEyes" icon="banda.png">
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Nodos" icon="banda.png">
                    <NodosComponent id="nodos" :widgetData="dummydata"></NodosComponent>
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
import DisponibilidadInfraestructuraComponent from '../components/DisponibilidadInfraestructuraComponent.vue';
import TransaccionesComponent from '../components/TransaccionesComponent.vue';
import NodosComponent from '../components/NodosComponent.vue';
import PuntosContactoComponent from '../components/PuntosContactoComponent.vue';


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
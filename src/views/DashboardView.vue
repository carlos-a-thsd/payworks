<template>
    <div>
        <div class="text-end pe-4 pt-3">
            <p style="text-decoration: underline;">Inicio>Dashboards</p>
        </div>
        <div class="row mb-4 align-items-center">
            <div class="col">
                <h1 class="mt-0 mb-4 d-inline">Dashboards - Payworks</h1>
            </div>
            <div class="col-4">
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Buscar" aria-label="Search"
                        aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        <BarPronostico id="bar" :widgetData="dummydata"></BarPronostico>


        <div class="row mt-5">
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Salud/Disponibilidad">
                    <DisponibilidadComponent id="disponibilidad" :widgetData="dummydata"></DisponibilidadComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Volumen monetario" icon="Monetario.png" :iconColor="'#ffd000'">
                    <ResumenVolumenMonetario :widgetData="dummydata" id="monetario"></ResumenVolumenMonetario>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Volumen transaccional" icon="Transaccional.png">
                    <ResumenVolumenTransaccional :widgetData="dummydata" id="transaccion"></ResumenVolumenTransaccional>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Disponibilidad/Infraestructura">
                    <RouterLink to="/infraestructura" style="text-decoration: none; color: inherit;">
                        <DisponibilidadInfraestructuraComponent id="disponibilidadInfraestructura" :widgetData="dummydata">
                        </DisponibilidadInfraestructuraComponent>
                    </RouterLink>
                </CardComponent>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Comercios Digitales" icon="Comercio.png">
                    <ComerciosComponent id="comerciosDigitalesAjustados" :widgetData="dummydata"></ComerciosComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Transacciones Digitales" icon="Transacciones_D.png">
                    <TransaccionesComponent id="digitales" :widgetData="dummydata"></TransaccionesComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Comercios Físicos" icon="Comercio.png" type="fisicos" ruta="comercios">
                    <ComerciosComponent id="comerciosFisicosAjustados" :widgetData="dummydata"></ComerciosComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Transacciones Físicas" icon="Transacciones_F.png" :iconColor="'#ff0000'">
                    <TransaccionesComponent id="fisicas" :widgetData="dummydata"></TransaccionesComponent>
                </CardComponent>
            </div>
        </div>

        <div class="row mt-5">
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Emisores" icon="Bank.png">
                    <EmisoresComponent id="emisores" :widgetData="dummydata"></EmisoresComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Puntos de Contacto" icon="CTM.png">
                    <PuntosContactoComponent id="puntosContacto" :widgetData="dummydata"></PuntosContactoComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="ThousandEyes" icon="Eye.png">
                    <TeComponent id="te" :widgetData="dummydata"></TeComponent>
                </CardComponent>
            </div>
            <div class="col-md-6 col-sm-6 col-xl-4 col-xxl-3">
                <CardComponent title="Nodos" icon="Nodos.png">
                    <NodosComponent id="nodos" :widgetData="dummydata"></NodosComponent>
                </CardComponent>
            </div>
        </div>


        <div class="row mt-5">
            <div class="col-6">
                <CardComponent title="Modelo analítico Transaccional">
                    <ModeloTransaccionalComponent id="transaccional" :widgetData="dummydata"></ModeloTransaccionalComponent>
                </CardComponent>
            </div>
            <div class="col-6">
                <CardComponent title="Modelo analítico Monetario">
                    <ModeloMonetarioComponent id="monetario" :widgetData="dummydata"></ModeloMonetarioComponent>
                </CardComponent>
            </div>
        </div>
    </div>
</template>

<script setup>
import CardComponent from '../components/CardComponent.vue';
import ComerciosComponent from '../components/ComerciosComponent.vue';
import EmisoresComponent from '../components/EmisoresComponent.vue';
import ResumenVolumenMonetario from '../components/ResumenVolumenMonetario.vue';
import ResumenVolumenTransaccional from '../components/ResumenVolumenTransaccional.vue';
import DisponibilidadComponent from '../components/DisponibilidadComponent.vue';
import DisponibilidadInfraestructuraComponent from '../components/DisponibilidadInfraestructuraComponent.vue';
import TransaccionesComponent from '../components/TransaccionesComponent.vue';
import NodosComponent from '../components/NodosComponent.vue';
import PuntosContactoComponent from '../components/PuntosContactoComponent.vue';
import BarPronostico from '../components/BarPronostico.vue';
import TeComponent from '../components/TeComponent.vue';

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
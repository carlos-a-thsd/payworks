<template>
    <div>
        <h1>Dashboard</h1>
        <div class="container-cards">
            <div>
                <CardComponent title="Bancos">
                    Aquí va el componente
                </CardComponent>
            </div>
            <div>
                <CardComponent title="Bancos">
                    Aquí va el componente
                </CardComponent>
            </div>
            <div>
                <CardComponent title="Bancos">
                    Aquí va el componente
                </CardComponent>
            </div>
        </div>

    </div>
</template>
<script setup>
import CardComponent from '../components/CardComponent.vue';

</script>
<style>
.container-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
}
</style>
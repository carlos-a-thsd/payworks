<template>
    <div v-for="elemento in widgetData.comunicaciones">
        <div class="container-p">
            <p>{{ elemento.porcentaje }} %</p>
            <h3>{{ elemento.name }}</h3>
        </div>
        <div class="mt-4">
            <div class="usado">
                <h3>Usado</h3>
                <p>{{ elemento.usado }} MB</p>
            </div>
            <div class="disponible">
                <h3>Disponible</h3>
                <p>{{ elemento.disponible }} MB</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "id",
        "widgetData"
    ],
}

</script>

<style scoped>
.container-p {
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
    width: 100%;
}

.container-p p {
    font-size: 2rem;
    font-weight: medium;
    color: #000000;
    margin: 0;
}

.container-p h3 {
    font-size: 1rem;
    font-weight: normal;
    color: #000000;
    margin: 0;
}

.usado {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.usado h3 {
    font-size: 1rem;
    font-weight: normal;
    color: #000000;
    margin: 0;
}

.usado p {
    font-size: 1.3rem;
    font-weight: medium;
    color: #5DD39E;
    margin: 0;
}

.disponible {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.disponible h3 {
    font-size: 1rem;
    font-weight: normal;
    color: #000000;
    margin: 0;
}

.disponible p {
    font-size: 1.3rem;
    font-weight: medium;
    color: #727272;
    margin: 0;
}
</style>
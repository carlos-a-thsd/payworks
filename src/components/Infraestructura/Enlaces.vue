<template>
    <div class="container">
        <div v-for="item in widgetData.enlaces">
            <div class="container-sec">
                <h2>{{ item.name }}</h2>
                <p class="porcentaje">{{ item.porcentaje }} %</p>
                <p class="mb">{{ item.mb }} Mb</p>
                <p class="total">
                    Total: <span>{{ item.gb }} Gb</span>
                </p>
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
.row {
    width: 100%;
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.container-sec h2 {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 0;
}

.porcentaje {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 0;
    color: #5DD39E;
}

.mb {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 0;
    color: #5DD39E;
}

.total {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 0;
}

.total span {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 0;
    color: #969998;
}
</style>
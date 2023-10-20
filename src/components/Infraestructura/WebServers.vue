<template>
    <div class="col-8 m-auto">
        <ul class="custom-list">
            <li v-for="elemento in widgetData.webServersConValores" :key="elemento.name">
                <span class="bullet"
                    :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }"></span>
                {{ elemento.name }}
            </li>
        </ul>
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

.custom-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.custom-list li {
    padding: 5px 0;
}

.custom-list li .bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
}

.custom-list li .bullet.red {
    background-color: #E00000;
}

.custom-list li .bullet.green {
    background-color: #007B0C;
}

.custom-list li .bullet.yellow {
    background-color: #E1FF26;
}
</style>
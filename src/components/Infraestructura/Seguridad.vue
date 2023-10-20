<template>
    <div>
        <div class="col-8 m-auto">
            <ul class="custom-list">
                <li v-for="elemento in widgetData.seguridadConValores" :key="elemento.name">
                    <div class="list-item">
                        <span class="bullet"
                            :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }">
                            <img :src="elemento.name.icon" alt="">
                        </span>
                        <span class="item-text">{{ elemento.name.nombre }}</span>
                    </div>
                </li>
            </ul>
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

.list-item {
    display: flex;
    align-items: center;
    padding: 5px 0;
}

.list-item .bullet {
    width: 30px;
    height: 30px;
    border-radius: 20%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.list-item .bullet img {
    width: 80%;
    height: 80%;
}

.list-item .bullet.red {
    background-color: #E00000;
}

.list-item .bullet.green {
    background-color: #007B0C;
}

.list-item .bullet.yellow {
    background-color: #E1FF26;
}
</style>
<template>
    <div class="card">
        <div v-if="icon" class="icon-box">
            <img :src="imageSrc" alt="Icon">
        </div>

        <div v-if="ruta" class="titulo">
            <router-link :to="{ name: this.ruta, params: { tipo: this.type } }" style="text-decoration: none; color: black;">
                <h6>{{ title }}</h6>
            </router-link>
        </div>
        <div v-else class="titulo">
            <h6>{{ title }}</h6>
        </div>
        <div class="">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        "title",
        "icon",
        "ruta",
        "type"
    ],
    computed: {
        imageSrc() {
            return new URL(`../assets/${this.icon}`, import.meta.url).href;
        },
        // link(){
        //     return `${this.ruta}`;
        // },

    }
};
</script>

<style scoped>
.card {
    padding: 10px;
    margin: 5px;
    margin-left: 0px;
    margin-right: -15px;
    border-radius: 10px;
    border: 1.5px solid gray;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    width: auto;
    background-color: #FFFDFF;
}

.titulo {
    padding-top: 5px;
    padding-bottom: 0px;
    text-align: center;

}

.icon-box {
    position: absolute;
    top: -15px;
    left: 10%;
    padding-left: 0;
    transform: translateX(-50%);
    background-color: #00B491;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
}

.icon-box img {
    width: 40px;
    height: 40px;
    padding: 5px;
}
</style>
<template>
    <div class="card">
        <div v-if="icon" class="icon-box">
            <img :src="imageSrc" alt="Icon">
        </div>

        <div class="titulo">
            <h6>{{ this.title }}</h6>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: [
        "title",
        "icon"
    ],
    computed:{
        imageSrc(){
            return new URL(`../assets/${this.icon}`, import.meta.url).href;
        }
    }
};
</script>

<style scoped>
.card {
    padding: 10px;
    /* padding-bottom: 30px; */
    margin: 5px;
    border-radius: 10px;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    height: auto;
    width: auto;
    /* color: white; */
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
    left: 3%;
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
    /* Ajusta el tamaño de la imagen */
    height: 40px;
    /* border-radius: 50%; */
    padding: 5px;
}
</style>
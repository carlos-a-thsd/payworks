<template>
    <div>
        <div class="row ms-1">
            <div class="col-4 ms-0">
                <p class="mb-2">CCA</p>                
                <ul class="custom-list">
                    <li v-for="elemento in widgetData.te.cca" :key="elemento.name">
                        <div class="d-flex me-0 justify-content-left align-items-center">
                            <span class="bullet"
                                :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }"></span>
                            <span class="ms-2">{{ elemento.name }}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-4 ms-0">
                <p class="mb-2">Via.pagosbanorte.com</p>                
                <ul class="custom-list">
                    <li v-for="elemento in widgetData.te.viaPagos" :key="elemento.name">
                        <div class="d-flex me-0 justify-content-left align-items-center">
                            <span class="bullet"
                                :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }"></span>
                            <span class="ms-2">{{ elemento.name }}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-4 ms-0">
                <p class="mb-2">Tlalpan</p>                
                <ul class="custom-list">
                    <li v-for="elemento in widgetData.te.tlalpan" :key="elemento.name">
                        <div class="d-flex me-0 justify-content-left align-items-center">
                            <span class="bullet"
                                :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }"></span>
                            <span class="ms-2">{{ elemento.name }}</span>
                        </div>
                    </li>
                </ul>
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
    methods: {
        buildComponent() {

        },
        formatear(formato, valor) {
            return fmt(formato)(valor)
        }
    },
    watch: {
        widgetData: {
            handler() {
                // this.buildComponent();
            },
            deep: true,
        }
    },
    mounted() {
        this.$nextTick(() => {
            // this.buildComponent();
        })
    }
}
</script>
<style>
.custom-list {
    list-style-type: none;
    padding-left: 0;
    font-size: 10px;
}

.red,
.green,
.yellow {
    display: inline-block;
    width: 12px;
    /* Ancho del bullet */
    height: 12px;
    /* Alto del bullet */
    border-radius: 15px;
    /* Bordes rectos para hacerlo rectangular */
    margin-right: 5px;
    /* Espacio entre los bullets y el texto */
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

.yellow {
    background-color: yellow;
}</style>
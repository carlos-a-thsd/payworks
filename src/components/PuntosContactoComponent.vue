<template>
    <div>
        <div>
            <ul class="custom-list">
                <li v-for="elemento in widgetData.puntosContactoConValores" :key="elemento.name">
                    <div class="d-flex flex-column mb">
                        <div class="d-flex">
                            <span class="bullet"
                                :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }"></span>
                            <span class="ms-2 name">{{ elemento.name }}</span>
                        </div>
                        <div class="d-flex justify-content-left align-items-center info">
                            <div class="d-flex">
                                <p class="ms">{{ widgetData.resultados[elemento.name].ms }}</p>
                                <p class="porcentaje">{{ widgetData.resultados[elemento.name].porcentaje }}</p>
                            </div>
                            <p class="llamadas">{{ widgetData.resultados[elemento.name].llamadas }}</p>
                            <p class="errores">{{ widgetData.resultados[elemento.name].errores }}</p>
                        </div>
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
<style scoped>
.yellow {
    background-color: #ffd000;
}

.name {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
}

.porcentaje {
    font-size: 12px;
    font-weight: 400;
    color: #000000;
    margin-left: 4px;
}

.llamadas {
    font-size: 13px;
    font-weight: 400;
    color: #000000;
    margin-left: 10px;
}

.errores {
    font-size: 13px;
    font-weight: 400;
    color: #000000;
    margin-left: 10px;
}

.ms {
    font-size: 13px;
    font-weight: 400;
    color: #000000;
    margin-left: 10px;
}

.mb {
    margin-bottom: -19px;
}
</style>
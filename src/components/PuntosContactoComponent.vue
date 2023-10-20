<template>
    <div>
        <div class="col-12 ms-0">
            <ul class="custom-list">
                <li v-for="elemento in widgetData.puntosContactoConValores" :key="elemento.name">
                    <div class="d-flex ms-5 me-4 justify-content-left align-items-center">
                        <span class="bullet"
                            :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }"></span>
                        <span class="ms-2">{{ elemento.name }}</span>
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
<style>
</style>
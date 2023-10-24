<template>
    <div>
        <div class="col-12 ms-0">
            <ul class="custom-list">
                <li v-for="elemento in widgetData.nodosConValores" :key="elemento.name">
                    <div class="d-flex ms-4 me-4 justify-content-between align-items-center mb">
                        <span class="bullet" :class="{
                            'green': elemento.value !== 1 && elemento.value !== 3,
                            'red': elemento.value === 1,
                            'yellow': elemento.value === 3
                        }"></span>
                        <span class="ms-2">{{ elemento.name }}</span>
                        <span class="ms-auto name">{{ elemento.value }}</span>
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
.name {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
}

.mb {
    margin-bottom: .1rem;
}
</style>
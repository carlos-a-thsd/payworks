<template>
    <div class="row">
        <div class="col-4 me-0">
            <div :id="`${this.id}`" style="width:100%;height:auto;"></div>
        </div>
        <div class="col-8 ms-0 mb-4">
            <ul class="custom-list">
                <li v-for="elemento in widgetData.disponibilidadConValores" :key="elemento.name"
                    class="d-flex align-items-center">
                    <span class="bullet"
                        :class="{ 'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3 }"></span>
                    <h2 class="name"> {{ elemento.name }}</h2>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { progress } from './libs/progressChart';
export default {
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            var options2 = [
                {
                    w: "100",
                    h: "100",
                    innerRadius: "40",
                    fontsize1: "16px",
                    fontsize2: "10px",
                    text: "Rendimiento",
                    dy: "13",
                },
            ];
            progress(
                (Math.random() * (0.8 - 1) + 1) * 100,
                "#" + this.id,
                ["#049631", "#049631", "#049631", "#049631"],

                options2
            );

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
            this.buildComponent();
        })
    }
}
</script>

<style>
.row {
    display: flex;
    justify-content: center;
    align-items: normal;
}

.custom-list {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 1rem;
}

.name {
    font-size: 14px;
    margin-top: 5px;
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
    background-color: #ff0000;
}

.green {
    background-color: #008000;
}

.yellow {
    background-color: #ffd000;
}
</style>

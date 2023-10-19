<template>
    <div>
        <div class="row">
            <div class="col-4 me-0">
                <div :id="`${this.id}`" style="width:100%;height:100%;"></div>
            </div>
            <div class="col-8 ms-0">
                <ul class="custom-list">
                    <li v-for="elemento in widgetData.disponibilidadConValores" :key="elemento.name">
                        <span class="bullet" :class="{'red': elemento.value === 1, 'green': elemento.value === 2, 'yellow': elemento.value === 3}"></span> {{ elemento.name }}
                    </li>
                </ul>
            </div>
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
                "#"+this.id,
                ["#049631", "#049631", "#049631", "#049631"],

                options2
            );

        },
        formatear(formato, valor){
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
.custom-list {
    list-style-type: none;
    padding-left: 0;
}

.red, .green, .yellow {
    display: inline-block;
    width: 12px; /* Ancho del bullet */
    height: 12px; /* Alto del bullet */
    border-radius: 15px; /* Bordes rectos para hacerlo rectangular */
    margin-right: 5px; /* Espacio entre los bullets y el texto */
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

.yellow {
    background-color: yellow;
}


</style>

<template>
    <div>
        <div class="row">
            <div class="col">
                <canvas :id="`${this.id}`" style="width:100%;height:100%;"></canvas>
            </div>
            <div class="col ms-0">
                <ul class="custom-list">
                    <li v-for="(emisor, index) in widgetData.emisoresAjustados" :key="emisor.name"
                        class="d-flex align-items-center justify-content-between w-100">
                        <span class="bullet-e" :style="{ backgroundColor: colores[index % colores.length] }"></span>
                        <div class="d-flex align-items-center justify-content-between w-100 gap-2">
                            <h2 class="value">{{ emisor.name }}</h2>
                            <span class="value">{{ formatear("p100", emisor.value) }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { ChartLib } from '../components/libs/ChartLib';
import { fmt } from './libs/fmt';
export default {
    data() {
        return {
            colores: ["#ff0054", "#8900f2", "#006ba6", "#2e294e", "#582f0e", "#D2691E", "#247ba0", "#87CEEB", "#E0B0FF"],
        };
    },
    props: [
        "id",
        "widgetData"
    ],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;
            ChartLib.pie(this.id, this.widgetData.emisoresAjustados, {
                xvalues: "name",
                yvalues: ["value"],
                yfmt: "n",
                legend: false,
                palette: "custom"
            });
        },
        formatear(formato, valor) {
            return fmt(formato)(valor)
        }
    },
    watch: {
        widgetData: {
            handler() {
                this.buildComponent();
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
<style scoped>
.custom-list {
    list-style-type: none;
    padding-left: 0;
    font-size: 12px;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.value {
    font-size: 12px;
    font-weight: 500;
    color: #000;
    margin-bottom: 0;
    margin-top: 5px;
}

.bullet-e {
    display: inline-block;
    width: 11px;
    height: 10px;
    background-color: #004e97;
    border-radius: 2000px;
    margin-right: 5px;
    margin-bottom: -5px;
}
</style>
<template>
    <div class="card">
        <div class="icon-box">
            <img src="/Eye.png" alt="Icon">
        </div>
        <div class="titulo">
            <h6>ThousandEyes</h6>
        </div>
        <div class="container-te">
            <div class="col-4 ms-0 d-flex align-items-center">
                <div>
                    <p class="mb-2 title">CCA</p>
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
                <div>
                    <canvas :id="this.id + `1`" style="width:225px;height:130px;"></canvas>
                </div>
            </div>
            <div class="col-4 ms-0 d-flex align-items-center">
                <div>
                    <p class="mb-2 title">via.pagosbanorte.com</p>
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
                <div>
                    <canvas :id="this.id + `2`" style="width:220px;height:125px;"></canvas>
                </div>
            </div>
            <div class="col-4 ms-0 d-flex align-items-center">
                <div>
                    <p class="mb-2 title">Tlalpan</p>
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
                <div>
                    <canvas :id="this.id + `3`" style="width:225px;height:130px;"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fmt } from './libs/fmt';
import { ChartLib } from '../components/libs/ChartLib';

export default {
    data() {
        return {
            colores: ["#ff0054", "#8900f2", "#006ba6", "#2e294e", "#582f0e", "#D2691E", "#247ba0", "#87CEEB", "#E0B0FF"]
        };
    },
    props: [
        "id",
        "widgetData", "title",
        "icon",
        "iconColor",
        "ruta",
        "type"
    ],
    methods: {
        buildComponent() {
            ChartLib.palettes.custom = this.colores;
            ChartLib.hbar(this.id + `1`, this.widgetData.thousendEyeCCA.values, {
                xvalues: "date",
                yvalues: ["count"],
                yfmt: "s",
                legend: false,
                palette: "custom",
                // fill: ["#3cba9f"],
            });

            ChartLib.hbar(this.id + `2`, this.widgetData.thousendEyeVia.values, {
                xvalues: "date",
                yvalues: ["count"],
                yfmt: "s",
                legend: false,
                palette: "custom",
                // fill: ["#3cba9f"],
            });

            ChartLib.hbar(this.id + `3`, this.widgetData.thousendEyeTlalpan.values, {
                xvalues: "date",
                yvalues: ["count"],
                yfmt: "s",
                legend: false,
                palette: "custom",
                // fill: ["#3cba9f"],
            });
        },
        formatear(formato, valor) {
            return fmt(formato)(valor)
        }
    },
    watch: {
        'widgetData.windowsData': {
            handler() {
                this.buildComponent();
            },
            deep: true
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.buildComponent();
        });
    },
    computed: {
        imageSrc() {
            return new URL(`../../public/${this.icon}`, import.meta.url).href;
        }
    }
}
</script>

<style scoped>
.container-te {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    width: 100%;
}



.custom-list {
    list-style-type: none;
    padding-left: 0;
    font-size: 15px;
    width: max-content;
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
}

.card {
    padding: 10px;
    margin: 5px;
    margin-left: 0px;
    margin-right: -15px;
    border-radius: 10px;
    border: 1.5px solid gray;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    height: 260px;
    width: 99%;
    background-color: #FFFDFF;
}

.titulo {
    padding-top: 5px;
    padding-bottom: 0px;
    text-align: center;
    position: relative;
}

.titulo h6 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 35px;
}

.icon-box {
    position: absolute;
    top: -25px;
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
    height: 40px;
    padding: 5px;
}

.title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    width: 170px;
    position: relative;
    left: 12px;
}
</style>
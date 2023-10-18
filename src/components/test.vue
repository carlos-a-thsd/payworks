<template>
    <div>
        <div id="graficaprogress" style="width:100%;height:100%;"></div>
    </div>
</template>
<script>
// import { ChartLib } from '../components/libs/ChartLib';
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
                "#graficaprogress",
                ["#F3F3F4", "#6EFFDA", "#02839B", "#FFFFFF"],
                options2
            );

        }
    },
    // watch: {
    //     widgetData: {
    //         handler() {
    //             this.buildComponent();
    //         },
    //         deep: true,
    //     } 
    // },
    mounted() {
        this.$nextTick(() => {
            this.buildComponent();
        });
    }
}
</script>
<style>
</style>
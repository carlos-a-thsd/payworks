import { Chart, registerables } from "chartJs3";
Chart.register(...registerables)

export function updatew2Line(id) {
  setInterval(function () {
    w2(id);
  }, 3000);
}

var w2Line = [];

export function smallLine(id, color) {
  var ctx = document.getElementById(id);


 
    w2Line[id] = new Chart(ctx, {
      type: "line",
      data: {
        labels: new Array(10).fill(""),
        datasets: [
          {
            data: new Array(10).fill().map(function () {
              return Math.random();
            }),
            fill: false,
            borderColor: color,
            borderWidth: 1.5,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
              display: false
          }
      },
        scales: {
          y: {
            display: false, // Esto oculta el eje Y
          },
        },
      },
      
    });
  
}

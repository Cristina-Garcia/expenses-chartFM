// import "./chart.js";

import data from "./utiles/data.json" assert { type: "json" };

const ctx = document.getElementById("chart-spending").getContext("2d");

function createChart(data) {
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["mon", "tue", "wed", "thus", "fri", "sat", "sun"],
      datasets: [
        {
          label: data.amount,
          data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
          backgroundColor: [
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(186, 34%, 60%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
          ],
          borderColor: [
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(186, 34%, 60%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      hoverBackgroundColor: "true",
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5,
            padding: 5,
            font: {
              size: 15,
              weight: "bold",
            },
            callback: (value, index, values) => {
              console.log(value);
              //   console.log(index);
              //   console.log(values);
              //   const totalItems = values.length - 1;
              //   if (index !== totalItems) {
              //     return value;
              //   }
            },
          },
          grid: {
            drawOnChartArea: false,
            drawTicks: false,
          },
        },
      },
    },
  });
}

window.addEventListener("load", createChart);

import data from "./utiles/data.json" assert { type: "json" };

const ctx = document.getElementById("chart-spending").getContext("2d");

const days = data.map(function (index) {
  return index.day;
});
// console.log(days);

const amount = data.map(function (index) {
  return index.amount;
});
// console.log(amount);

function createChart(data) {
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: days,
      datasets: [
        {
          data: amount,
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
      elements: {
        bar: {
          borderRadius: 5,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
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

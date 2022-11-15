import data from "./utiles/data.json" assert { type: "json" };

const ctx = document.getElementById("chart-spending").getContext("2d");
// const totalExpenses = document.querySelector(".total-expenses");

const days = data.map(function (index) {
  return index.day;
});
// console.log(days);

const amount = data.map(function (index) {
  return index.amount;
});
// console.log(amount);

// const suma = amount.reduce((a, b) => a + b, 0);
// console.log(suma);

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
        labels: {
          font: {
            family: "'DM Sans', sans-serif",
          },
        },
      },
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
            drawBorder: false,
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
              // console.log(value);
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
            drawBorder: false,
          },
        },
      },
    },
  });
}
Chart.defaults.font.size = 16;
Chart.defaults.color = "#93867b";

/* responsive size

Chart.defaults.font.size = 16;

function responsiveFont() {
  if (window.outerWidth > 999) {
    Chart.defaults.font.size = 18;
  }
  if (window.outerWidth < 999 && window.outerWidth > 500) {
    Chart.defaults.font.size = 16;
  }
  if (window.outerWidth < 375) {
    Chart.defaults.font.size = 14;
  }
  console.log(window.outerWidth);
  createChart.update();
}*/

window.addEventListener("load", createChart);

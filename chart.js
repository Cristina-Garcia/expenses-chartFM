const ctx = document.getElementById("chart-spending").getContext("2d");

// const days = datas.day.map(function (e) {
//   return e.day;
// });

// const amount = datas.amount.map(function (e) {
//   return e.amount;
// });

function createChart(dataExpense) {
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: dataExpense.day,
      datasets: [
        {
          label: dataExpense.amount,
          data: dataExpense.amount,
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
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      hoverBackgroundColor: "true",
      pluging: {
        title: {
          display: false,
        },
      },
    },
  });
}

// window.addEventListener("load", createChart);

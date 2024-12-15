// scroll
var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
// chart 
var ctx = document.getElementById("chart-bars").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sales",
      tension: 0.4,
      borderWidth: 0,
      borderRadius: 4,
      borderSkipped: false,
      backgroundColor: "#fff",
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
      maxBarThickness: 6
    }, ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 500,
          beginAtZero: true,
          padding: 15,
          font: {
            size: 14,
            family: "Inter",
            style: 'normal',
            lineHeight: 2
          },
          color: "#fff"
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false
        },
        ticks: {
          display: false
        },
      },
    },
  },
});


var ctx2 = document.getElementById("chart-line").getContext("2d");

var gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);

gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "Mobile apps",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "#cb0c9f",
        borderWidth: 3,
        backgroundColor: gradientStroke1,
        fill: true,
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        maxBarThickness: 6

      },
      {
        label: "Websites",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "#3A416F",
        borderWidth: 3,
        backgroundColor: gradientStroke2,
        fill: true,
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        maxBarThickness: 6
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#b2b9bf',
          font: {
            size: 11,
            family: "Inter",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          color: '#b2b9bf',
          padding: 20,
          font: {
            size: 11,
            family: "Inter",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  },
});

 // Sample data for different years
 const dataByYear = {
    2019: {
        categories: ['DKI Jakarta', 'Jawa Timur','Jawa Barat','Banten','Jawa Tengah','DI Yogyakarta','Sumatera Selatan','Riau','Sumatera Utara','Sumatera Barat'],
        emas: [34,14,18,18,12,4,4,8,6],
        perak: [34,44,30,26,22,14,6,4,10,6],
        perungggu: [42,40,38,32,32,14,14,10,4,14],
    },
    2020: {
        categories: ['USA', 'China', 'India', 'Russia','Canada', 'France', 'Germany', 'Brazil','Canada', 'France'],
        emas: [1,2,3,4,5,6,7,8,9,10],
        perak: [1,2,3,4,5,6,7,8,9,10],
        perungggu: [1,2,3,4,5,6,7,8,9,10],
    },
    2021: {
        categories: ['USA', 'China', 'India', 'Russia','Canada', 'France', 'Germany', 'Brazil','Canada', 'France'],
        emas: [1,2,3,4,5,6,7,8,9,10],
        perak: [1,2,3,4,5,6,7,8,9,10],
        perungggu: [1,2,3,4,5,6,7,8,9,10],
    },
    2022: {
        categories: ['USA', 'China', 'India', 'Russia','Canada', 'France', 'Germany', 'Brazil','Canada', 'France'],
        emas: [1,2,3,4,5,6,7,8,9,10],
        perak: [1,2,3,4,5,6,7,8,9,10],
        perungggu: [1,2,3,4,5,6,7,8,9,10],
    },
    2023: {
        categories: ['USA', 'China', 'India', 'Russia','Canada', 'France', 'Germany', 'Brazil','Canada', 'France'],
        emas: [1,2,3,4,5,6,7,8,9,10],
        perak: [1,2,3,4,5,6,7,8,9,10],
        perungggu: [1,2,3,4,5,6,7,8,9,10],
    },
    2024: {
        categories: ['USA', 'China', 'India', 'Russia','Canada', 'France', 'Germany', 'Brazil','Canada', 'France'],
        emas: [1,2,3,4,5,6,7,8,9,10],
        perak: [1,2,3,4,5,6,7,8,9,10],
        perungggu: [1,2,3,4,5,6,7,8,9,10],
    }
};



  // Initial chart creation
  let chart = Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jumlah Perolehan Medali per Provinsi pada tahun 2019',
        align: 'left'
    },
    xAxis: {
        categories: ['DKI Jakarta', 'Jawa Timur','Jawa Barat','Banten','Jawa Tengah','DI Yogyakarta','Sumatera Selatan','Riau','Sumatera Utara','Sumatera Barat'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max : 50,
        tickInterval: 5,
        title: {
            text: 'Jumlah Perolehan Medali'
        }
    },
    // tooltip: {
    //     valueSuffix: ' (10)'
    // },
    series: [
    {
        name: 'Emas',
        data: dataByYear[2019].emas,
        color: '#FFD700' // Gold color
    },
    {
        name: 'Perak',
        data: dataByYear[2019].perak,
        color: '#C0C0C0' // Silver color
    },
    {
        name: 'Perunggu',
        data: dataByYear[2019].perungggu,
        color: '#CD7F32' // Bronze color
    }
]
});

function updateChart(year) {
// Update the x-axis categories dynamically based on the year
const categories = dataByYear[year].categories; // Get categories for the selected year
chart.xAxis[0].setCategories(categories);

// Update the series data dynamically
chart.series[0].setData(dataByYear[year].emas);
chart.series[1].setData(dataByYear[year].perak);
chart.series[2].setData(dataByYear[year].perungggu);

// Update the chart title to reflect the selected year
        text: 
chart.setTitle({ text: ` 'Jumlah Perolehan Medali per Provinsi pada tahun'${year}` });
}
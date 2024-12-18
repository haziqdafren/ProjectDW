
const dataByYear = {
    2009: {
        categories: ['DKI Jakarta', 'Riau', 'Sumatera Utara', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Bali', 'Kalimantan', 'Aceh', 'Papua'],
        emas: [34, 14, 18, 18, 12, 4, 4, 8, 6, 2],
        perak: [34, 44, 30, 26, 22, 14, 6, 4, 10, 6],
        perungggu: [42, 40, 38, 32, 32, 14, 14, 10, 4, 14]
    },
    2010: {
        categories: ['DKI', 'Riau', 'Sumatera Utara', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Bali', 'Kalimantan', 'Aceh', 'Papua'],
        emas: [30, 20, 25, 15, 10, 5, 3, 2, 1, 0],
        perak: [30, 20, 25, 15, 10, 5, 3, 2, 1, 0],
        perungggu: [30, 20, 25, 15, 10, 5, 3, 2, 1, 0]
    },
    2011: {
        categories: ['DKI Jakarta', 'Riau', 'Sumatera Utara', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Bali', 'Kalimantan', 'Aceh', 'Papua'],
        emas: [20, 30, 15, 25, 10, 5, 3, 2, 1, 0],
        perak: [20, 30, 15, 25, 10, 5, 3, 2, 1, 0],
        perungggu: [20, 30, 15, 25, 10, 5, 3, 2, 1, 0]
    },
    2012: {
        categories: ['DKI Jakarta', 'Riau', 'Sumatera Utara', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Bali', 'Kalimantan', 'Aceh', 'Papua'],
        emas: [1,2,3,4,5,6,7,8,9,1],
        perak: [1,2,3,4,5,6,7,8,9,10],
        perungggu: [1,2,3,4,5,6,7,8,9,10]
    },
    2013: {
        categories: ['DKI Jakarta', 'Riau', 'Sumatera Utara', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Bali', 'Kalimantan', 'Aceh', 'Papua'],
        emas: [1,2,3,4,5,6,7,8,9,1],
        perak: [1,2,3,4,5,6,7,8,9,10],
        perungggu: [1,2,3,4,5,6,7,8,9,10]
    },
};

const dataBySchoolYear = {
    2009: {
        categories: ['Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E','Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E'],
        emas: [5, 3, 4, 7, 2,5, 3, 4, 7, 2],
        perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
    },
    2010: {
        categories: ['Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E','Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E'],
        emas: [5, 3, 4, 7, 2,5, 3, 4, 7, 2],
        perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
    },
 
    2011: {
        categories: ['Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E','Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E'],
        emas: [5, 3, 4, 7, 2,5, 3, 4, 7, 2],
        perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
    },
 
    2012: {
        categories: ['Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E','Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E'],
        emas: [5, 3, 4, 7, 2,5, 3, 4, 7, 2],
        perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
    },
 
    2013: {
        categories: ['Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E','Sekolah A', 'Sekolah B', 'Sekolah C', 'Sekolah D', 'Sekolah E'],
        emas: [5, 3, 4, 7, 2,5, 3, 4, 7, 2],
        perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
    },
 
};


// Initial chart creation
let chart = Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jumlah Perolehan Medali Provinsi 10 Teratas pada tahun 2009',
        align: 'left'
    },
    xAxis: {
        categories: ['DKI Jakarta', 'Riau', 'Sumatera Utara', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur','Bali','Kalimantan', 'Aceh','Papua'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 10,  // Adjust according to your data range // Adjust to match your needs
        title: {
        }
    },
    series: [
        {
            name: 'Emas',
            data: dataByYear[2009].emas,
            color: '#FFD700' // Gold color
        },
        {
            name: 'Perak',
            data: dataByYear[2009].perak,
            color: '#C0C0C0' // Silver color
        },
        {
            name: 'Perunggu',
            data: dataByYear[2009].perungggu,
            color: '#CD7F32' // Bronze color
        }
    ]
});

// Function to update the chart based on selected year and display totals
function updateChart(year) {
     // Update the x-axis categories dynamically based on the year
    const categories = dataByYear[year].categories; // Get categories for the selected year
    chart.xAxis[0].setCategories(categories);
    // Update the data for both corn and wheat series
    chart.series[0].setData(dataByYear[year].emas);
    chart.series[1].setData(dataByYear[year].perak);
    chart.series[2].setData(dataByYear[year].perungggu);

    // Update the chart title to reflect the selected year
    chart.setTitle({ text: `Jumlah Perolehan Medali Provinsi 10 Teratas pada tahun ${year}` });

    // Calculate the totals for each category
    const totalEmas = dataByYear[year].emas.reduce((a, b) => a + b, 0);
    const totalPerak = dataByYear[year].perak.reduce((a, b) => a + b, 0);
    const totalPerunggu = dataByYear[year].perungggu.reduce((a, b) => a + b, 0);

    // Display the totals on the page
    document.getElementById('totals-provinsi').innerHTML = `
        <p>Total Emas: ${totalEmas}
        <p>Total Perak: ${totalPerak}
        <p>Total Perunggu: ${totalPerunggu}
    `;

       // Update the school chart
    const schoolCategories = dataBySchoolYear[year].categories;
    schoolChart.xAxis[0].setCategories(schoolCategories);
    schoolChart.series[0].setData(dataBySchoolYear[year].emas);
    schoolChart.series[1].setData(dataBySchoolYear[year].perak);
    schoolChart.series[2].setData(dataBySchoolYear[year].perungggu);
    schoolChart.setTitle({ text: `Jumlah Perolehan Medali Berdasarkan Sekolah pada tahun ${year}` });

     // Calculate the totals for each category
     const totalEmas1 = dataBySchoolYear[year].emas.reduce((x, y) => x + y, 0);
     const totalPerak1 = dataBySchoolYear[year].perak.reduce((x, y) => x + y, 0);
     const totalPerunggu1 = dataBySchoolYear[year].perungggu.reduce((x, y) => x + y, 0);
 
     // Display the totals on the page
     document.getElementById('totals-sekolah').innerHTML = `
         <p>Total Emas: ${totalEmas1}
         <p>Total Perak: ${totalPerak1}
         <p>Total Perunggu: ${totalPerunggu1}
     `;
 
}
// Create the initial school chart
let schoolChart = Highcharts.chart('school-container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jumlah Perolehan Medali Berdasarkan Sekolah pada tahun 2009',
        align: 'left'
    },
    xAxis: {
        categories: dataBySchoolYear[2009].categories,
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 100,  // Adjust according to your data range
        title: {
            text: 'Jumlah Medali'
        }
    },
    series: [
        {
            name: 'Emas',
            data: dataBySchoolYear[2009].emas,
            color: '#FFD700' // Gold color
        },
        {
            name: 'Perak',
            data: dataBySchoolYear[2009].perak,
            color: '#C0C0C0' // Silver color
        },
        {
            name: 'Perunggu',
            data: dataBySchoolYear[2009].perungggu,
            color: '#CD7F32' // Bronze color
        }
    ]
});
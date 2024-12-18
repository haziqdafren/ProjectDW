
const dataByYear1 = {
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

const dataBySchoolYear1 = {
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
let chart1 = Highcharts.chart('partisipanP', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jumlah Partisipan Provinsi 10 Teratas pada tahun 2009',
        align: 'left'
    },
    xAxis: {
        categories: ['DKI Jakarta', 'Riau', 'Sumatera Utara', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur','Bali','Kalimantan', 'Aceh','Papua'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 100,  // Adjust according to your data range // Adjust to match your needs
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
function updateChart1(year) {
     // Update the x-axis categories dynamically based on the year
    const categories = dataByYear1[year].categories; // Get categories for the selected year
    chart.xAxis[0].setCategories(categories);
    // Update the data for both corn and wheat series
    chart1.series[0].setData(dataByYear1[year].emas);
    chart1.series[1].setData(dataByYear1[year].perak);
    chart1.series[2].setData(dataByYear1[year].perungggu);

    // Update the chart title to reflect the selected year
    chart1.setTitle({ text: `Jumlah Partisipan Provinsi 10 Teratas pada tahun ${year}` });


       // Update the school chart
    const schoolCategories1 = dataBySchoolYear1[year].categories;
    schoolChart1.xAxis[0].setCategories(schoolCategories1);
    schoolChart1.series[0].setData(dataBySchoolYear1[year].emas);
    schoolChart1.series[1].setData(dataBySchoolYear1[year].perak);
    schoolChart1.series[2].setData(dataBySchoolYear1[year].perungggu);
    schoolChart1.setTitle({ text: `Jumlah Partisipan 10 Tertinggi per Sekolah pada tahun ${year}` });

 
}
// Create the initial school chart
let schoolChart1 = Highcharts.chart('partisipanS', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Jumlah Partisipan 10 Tertinggi per Sekolah pada tahun 2009',
        align: 'left'
    },
    xAxis: {
        categories: dataBySchoolYear1[2009].categories,
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
            data: dataBySchoolYear1[2009].emas,
            color: '#FFD700' // Gold color
        },
        {
            name: 'Perak',
            data: dataBySchoolYear1[2009].perak,
            color: '#C0C0C0' // Silver color
        },
        {
            name: 'Perunggu',
            data: dataBySchoolYear1[2009].perungggu,
            color: '#CD7F32' // Bronze color
        }
    ]
});
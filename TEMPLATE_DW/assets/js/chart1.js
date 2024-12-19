
const dataByYear1 = {
    2009: {
        categories: ['DKI Jakarta', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur','Jawa Barat','Banten', 'Bali','Sumatera Utara', 'Riau',  'Sumatera Barat'],
        emas: [105,91,56,52,41,31,31,28,24,23],
        // perak: [34, 44, 30, 26, 22, 14, 6, 4, 10, 6],
        // perungggu: [42, 40, 38, 32, 32, 14, 14, 10, 4, 14]
    },
    2010: {
        categories: ['Jawa Tengah','DKI Jakarta', 'Jawa Timur', 'Jawa Barat','Sumatera Utara','Banten','DI Yogyakarta', 'Sumatera Barat', 'Bali', 'Riau'],
        emas: [145,129,110,74,59,50,43,39,30],
        // perak: [30, 20, 25, 15, 10, 5, 3, 2, 1, 0],
        // perungggu: [30, 20, 25, 15, 10, 5, 3, 2, 1, 0]
    },
    2011: {
        categories: ['Jawa Timur','Jawa Tengah','DKI Jakarta','Jawa Barat','DI Yogyakarta','Banten','Bali', 'Sumatera Barat','Sumatera Utara','Riau'],
        emas: [139,118,117,77,53,50,46,40,37,26],
        // perak: [20, 30, 15, 25, 10, 5, 3, 2, 1, 0],
        // perungggu: [20, 30, 15, 25, 10, 5, 3, 2, 1, 0]
    },
    2012: {
        categories: ['Jawa Tengah','Jawa Timur','DKI Jakarta','Jawa Barat','Banten','DI Yogyakarta','Bali', 'Sumatera Barat','Riau','Sumatera Utara'],
        emas: [135,116,108,106,56,50,44,37,32,27],
        // perak: [1,2,3,4,5,6,7,8,9,10],
        // perungggu: [1,2,3,4,5,6,7,8,9,10]
    },
    2013: {
        categories: ['Jawa Tengah','DKI Jakarta', 'Jawa Timur','DI Yogyakarta','Banten', 'Bali', 'Sumatera Barat', 'Riau','Sumatera Utara'],
        emas: [154,127,126,119,60,54,54,41,36,33],
        // perak: [1,2,3,4,5,6,7,8,9,10],
        // perungggu: [1,2,3,4,5,6,7,8,9,10]
    },
};

const dataBySchoolYear1 = {
    2009: {
        categories: ['SMAN 1 Yogyakarta','SMA Kristen BPK Penabur 1 Jakarta','MAN Insan Cendikia Gorontalo','SMAN 8 Jakarta', 'MAN Insan Cendikia Serpong','SMAN Plus Provinsi Riau','SMA Sutomo 1 Medan','SMAN 1 Singaraja','SMA Kristen BPK Penabur Gading Serpong','SMAN Sragen BBS'],
        emas: [22,18,17,16,12,11,11,10,10,6],
        // perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        // perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
    },
    2010: {
        categories: ['MAN Insan Cendikia Gorontalo','SMAN Sragen BBS','SMAN Plus Provinsi Riau','SMAN 8 Jakarta','SMAN 1 Singaraja','MAN Insan Cendikia Serpong','SMA Kristen BPK Penabur Gading Serpong','SMA Kristen BPK Penabur 1 Jakarta', 'SMAN 1 Yogyakarta', 'SMA Sutomo 1 Medan'],
        emas: [16,15,14,14,13,13,12,12,11,10],
        // perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        // perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
    },
 
    2011: {
        categories: ['MAN Insan Cendikia Serpong','SMAN Sragen BBS','SMAN 8 Jakarta','SMAN 1 Singaraja','SMA Sutomo 1 Medan','MAN Insan Cendikia Gorontalo','SMA Kristen BPK Penabur Gading Serpong','SMA Kristen BPK Penabur 1 Jakarta','SMAN Plus Provinsi Riau','SMAN 1 Yogyakarta'],
        emas: [13,12,11,10,10,10,9,9,7,7],
        // perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        // perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
    },
 
    2012: {
        categories: ['MAN Insan Cendikia Gorontalo','SMAN Sragen BBS','SMAN Plus Provinsi Riau','SMA Kristen BPK Penabur Gading Serpong','MAN Insan Cendikia Serpong','SMAN 8 Jakarta','SMA Sutomo 1 Medan','SMAN 1 Singaraja','SMA Kristen BPK Penabur 1 Jakarta'],
        emas: [14,13,13,13,13,9,9,8,7,6],
        // perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        // perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
    },
 
    2013: {
        categories: ['MAN Insan Cendikia Gorontalo','SMAN Sragen BBS','MAN Insan Cendikia Serpong','SMAN Plus Provinsi Riau','SMA Sutomo 1 Medan','SMAN 8 Jakarta','SMAN 1 Yogyakarta','SMA Kristen BPK Penabur Gading Serpong','SMAN 1 Singaraja','SMA Kristen BPK Penabur 1 Jakarta'],
        emas: [15,14,13,12,12,11,10,10,6,6],
        // perak: [2, 2, 3, 2, 1,5, 3, 4, 7, 2],
        // perungggu: [3, 4, 4, 2, 5,5, 3, 4, 7, 2],
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
            color: '#fa0202' // Gold color
        },
        // {
        //     name: 'Perak',
        //     data: dataByYear[2009].perak,
        //     color: '#C0C0C0' // Silver color
        // },
        // {
        //     name: 'Perunggu',
        //     data: dataByYear[2009].perungggu,
        //     color: '#CD7F32' // Bronze color
        // }
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
            color: '#fa0202' // Gold color
        },
        // {
        //     name: 'Perak',
        //     data: dataBySchoolYear1[2009].perak,
        //     color: '#C0C0C0' // Silver color
        // },
        // {
        //     name: 'Perunggu',
        //     data: dataBySchoolYear1[2009].perungggu,
        //     color: '#CD7F32' // Bronze color
        // }
    ]
});
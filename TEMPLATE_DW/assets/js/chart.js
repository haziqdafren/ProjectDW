
const dataByYear = {
    2009: {
        categories: ['DKI Jakarta', 'Jawa Tengah', 'DI Yogyakarta', 'Banten', 'Jawa Barat', 'Jawa Timur', 'Sumatera Utara', 'Riau', 'Bali', 'Sumatera Barat',],
        emas: [14,7,7,4,0,3,2,1,0,0],
        perak: [22,19,5,12,5,3,2,3,2,0],
        perungggu: [20,25,16,5,12,7,8,6,7,1]
    },
    2010: {
        categories: ['DKI Jakarta','Jawa Tengah','Jawa Timur','Jawa Barat','Banten','DI Yogyakarta','Sumatera Utara','Bali','Riau','Sumatera Barat'],
        emas: [13,12,4,8,8,3,0,3,2,0],
        perak: [26,27,10,8,11,3,4,2,1,1],
        perungggu: [37,30,29,10,4,7,8,5,4,5]
    },
    2011: {
        categories: ['DKI Jakarta','Jawa Tengah','Jawa Timur','Banten','Jawa Barat','Bali','DI Yogyakarta','Sumatera Utara','Riau','Sumatera Barat'],
        emas: [12,5,8,4,4,0,1,2,1,0],
        perak: [19,17,7,10,7,5,5,0,1,1],
        perungggu: [21,17,13,8,9,8,6,5,3,0]
    },
    2012: {
        categories: ['Jawa Tengah','DKI Jakarta', 'Jawa Timur', 'Jawa Barat', 'Banten', 'DI Yogyakarta', 'Bali', 'Riau', 'Sumatera Utara','Sumatera Barat'],
        emas: [17,16,7,5,7,2,2,0,1,2],
        perak: [32,20,20,11,6,4,2,4,4,1],
        perungggu: [29,29,23,20,12,9,11,7,2,3]
    },
    2013: {
        categories: ['Jawa Tengah','DKI Jakarta', 'Jawa Timur', 'Jawa Barat', 'Banten', 'DI Yogyakarta', 'Bali','Sumatera Utara','Riau', 'Sumatera Barat' ],
        emas: [15,21,5,6,6,3,1,3,1,0],
        perak: [32,25,17,15,12,9,3,1,1,2],
        perungggu: [40,25,26,24,9,9,8,6,6,2]
    },
};

const dataBySchoolYear = {
    2009: {
        categories: ['SMAN 1 Yogyakarta','SMA Kristen BPK Penabur 1 Jakarta','SMAN 8 Jakarta','MAN IC Serpong','SMA Kristen BPK Penabur Gading Serpong','SMA Sutomo 1 Medan','SMAN Plus Prov Riau','SMAN Sragen BBS','MAN IC Gorontalo','SMAN 1 Singaraja'],
        emas: [5,5,0,0,3,0,1,0,0,0],
        perak: [3,5,3,5,5,2,2,1,1,0],
        perungggu: [8,1,6,4,0,4,2,3,1,1],
    },
    2010: {
        categories: ['SMA Kristen BPK Penabur Gading Serpong','SMAN 8 Jakarta','SMA Kristen BPK Penabur 1 Jakarta','SMAN Sragen BBS','MAN IC Serpong','SMAN 1 Yogyakarta','SMA Sutomo 1 Medan','SMAN 1 Singaraja','MAN IC Gorontalo','SMAN Plus Prov Riau'],
        emas: [6,2,3,1,2,1,0,1,0,1],
        perak: [3,1,4,5,6,1,2,0,0,0],
        perungggu: [3,8,3,3,0,5,3,2,3,1],
    },
 
    2011: {
        categories: ['SMAN Sragen BBS','SMAN 8 Jakarta','MAN IC Serpong','SMA Kristen BPK Penabur Gading Serpong','SMA Kristen BPK Penabur 1 Jakarta','SMAN 1 Singaraja','SMA Sutomo 1 Medan','SMAN 1 Yogyakarta','SMAN Plus Prov Riau','MAN IC Gorontalo'],
        emas: [0,1,3,1,2,0,2,1,0,0],
        perak: [6,6,5,2,3,1,0,2,0,1],
        perungggu: [4,3,0,4,2,4,2,0,1,0],
    },
 
    2012: {
        categories: ['SMAN Sragen BBS','SMA Kristen BPK Penabur Gading Serpong','SMAN 8 Jakarta','SMAN 1 Yogyakarta','SMA Sutomo 1 Medan','MAN IC Gorontalo','SMAN Plus Prov Riau','SMAN 1 Singaraja','SMA Kristen BPK Penabur 1 Jakarta','MAN IC Serpong'],
        emas: [5,3,3,2,1,0,0,0,1,0],
        perak: [5,4,2,1,2,1,2,1,1,1,],
        perungggu: [2,4,2,2,2,,4,1,2,1,2],
    },
 
    2013: {
        categories: ['SMAN Sragen BBS','MAN IC Gorontalo','MAN IC Serpong','SMAN 8 Jakarta','SMA Kristen BPK Penabur Gading Serpong','SMAN 1 Yogyakarta','SMA Sutomo 1 Medan','SMA Kristen BPK Penabur 1 Jakarta','SMAN Plus Prov Riau','SMAN 1 Singaraja',],
        emas: [1,2,1,4,4,,2,2,3,0,0],
        perak: [4,3,4,1,1,1,0,2,0,1],
        perungggu: [5,5,4,2,1,2,3,0,3,1],
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
        categories: ['DKI Jakarta', 'Jawa Tengah', 'DI Yogyakarta', 'Banten', 'Jawa Barat', 'Jawa Timur', 'Sumatera Utara', 'Riau', 'Bali', 'Sumatera Barat'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 50,  // Adjust according to your data range // Adjust to match your needs
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
        max: 50,  // Adjust according to your data range
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
// Data untuk grafik berdasarkan tahun
const dataByYear1 = {
    2009: {
        categories: ['DKI Jakarta', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur', 'Jawa Barat', 'Banten', 'Bali', 'Sumatera Utara', 'Riau', 'Sumatera Barat'],
        partisipan: [105, 91, 56, 52, 41, 31, 31, 28, 24, 23],
    },
    2010: {
        categories: ['Jawa Tengah', 'DKI Jakarta', 'Jawa Timur', 'Jawa Barat', 'Sumatera Utara', 'Banten', 'DI Yogyakarta', 'Sumatera Barat', 'Bali', 'Riau'],
        partisipan: [145, 129, 110, 74, 59, 50, 43, 39, 30, 23],
    },
    2011: {
        categories: ['Jawa Timur', 'Jawa Tengah', 'DKI Jakarta', 'Jawa Barat', 'DI Yogyakarta', 'Banten', 'Bali', 'Sumatera Barat', 'Sumatera Utara', 'Riau'],
        partisipan: [139, 118, 117, 77, 53, 50, 46, 40, 37, 26],
    },
    2012: {
        categories: ['Jawa Tengah', 'Jawa Timur', 'DKI Jakarta', 'Jawa Barat', 'Banten', 'DI Yogyakarta', 'Bali', 'Sumatera Barat', 'Riau', 'Sumatera Utara'],
        partisipan: [135, 116, 108, 106, 56, 50, 44, 37, 32, 27],
    },
    2013: {
        categories: ['Jawa Tengah', 'DKI Jakarta', 'Jawa Timur', 'DI Yogyakarta', 'Banten', 'Bali', 'Sumatera Barat', 'Riau', 'Sumatera Utara'],
        partisipan: [154, 127, 126, 119, 60, 54, 54, 41, 36, 33],
    },
};

// Data untuk grafik berdasarkan sekolah per tahun
const dataBySchoolYear1 = {
    2009: {
        categories: ['SMAN 1 Yogyakarta', 'SMA Kristen BPK Penabur 1 Jakarta', 'MAN Insan Cendikia Gorontalo', 'SMAN 8 Jakarta', 'MAN Insan Cendikia Serpong', 'SMAN Plus Provinsi Riau', 'SMA Sutomo 1 Medan', 'SMAN 1 Singaraja', 'SMA Kristen BPK Penabur Gading Serpong', 'SMAN Sragen BBS'],
        partisipan: [22, 18, 17, 16, 12, 11, 11, 10, 10, 6],
    },
    2010: {
        categories: ['MAN Insan Cendikia Gorontalo', 'SMAN Sragen BBS', 'SMAN Plus Provinsi Riau', 'SMAN 8 Jakarta', 'SMAN 1 Singaraja', 'MAN Insan Cendikia Serpong', 'SMA Kristen BPK Penabur Gading Serpong', 'SMA Kristen BPK Penabur 1 Jakarta', 'SMAN 1 Yogyakarta', 'SMA Sutomo 1 Medan'],
        partisipan: [16, 15, 14, 14, 13, 13, 12, 12, 11, 10],
    },
    2011: {
        categories: ['MAN Insan Cendikia Serpong', 'SMAN Sragen BBS', 'SMAN 8 Jakarta', 'SMAN 1 Singaraja', 'SMA Sutomo 1 Medan', 'MAN Insan Cendikia Gorontalo', 'SMA Kristen BPK Penabur Gading Serpong', 'SMA Kristen BPK Penabur 1 Jakarta', 'SMAN Plus Provinsi Riau', 'SMAN 1 Yogyakarta'],
        partisipan: [13, 12, 11, 10, 10, 10, 9, 9, 7, 7],
    },
    2012: {
        categories: ['MAN Insan Cendikia Gorontalo', 'SMAN Sragen BBS', 'SMAN Plus Provinsi Riau', 'SMA Kristen BPK Penabur Gading Serpong', 'MAN Insan Cendikia Serpong', 'SMAN 8 Jakarta', 'SMA Sutomo 1 Medan', 'SMAN 1 Singaraja', 'SMA Kristen BPK Penabur 1 Jakarta'],
        partisipan: [14, 13, 13, 13, 13, 9, 9, 8, 7, 6],
    },
    2013: {
        categories: ['MAN Insan Cendikia Gorontalo', 'SMAN Sragen BBS', 'MAN Insan Cendikia Serpong', 'SMAN Plus Provinsi Riau', 'SMA Sutomo 1 Medan', 'SMAN 8 Jakarta', 'SMAN 1 Yogyakarta', 'SMA Kristen BPK Penabur Gading Serpong', 'SMAN 1 Singaraja', 'SMA Kristen BPK Penabur 1 Jakarta'],
        partisipan: [15, 14, 13, 12, 12, 11, 10, 10, 6, 6],
    },
};

// Fungsi untuk membuat chart partisipan provinsi
let chart1 = Highcharts.chart('partisipanP', {
    chart: { type: 'column' },
    title: { text: 'Jumlah Partisipan 10 Teratas Berdasarkan Provinsi pada tahun 2009', align: 'left' },
    xAxis: { categories: dataByYear1[2009].categories, crosshair: true },
    yAxis: {
        min: 0,
        max: 160,
        title: { text: 'Jumlah Partisipan' },
    },
    series: [{ name: 'Partisipan', data: dataByYear1[2009].partisipan, color: '#fa0202' }],
});

// Fungsi untuk membuat chart partisipan sekolah
let schoolChart1 = Highcharts.chart('partisipanS', {
    chart: { type: 'column' },
    title: { text: 'Jumlah Partisipan 10 Teratas Berdasarkan Sekolah pada tahun 2009', align: 'left' },
    xAxis: { categories: dataBySchoolYear1[2009].categories, crosshair: true },
    yAxis: {
        min: 0,
        max: 30,
        title: { text: 'Jumlah Partisipan' },
    },
    series: [{ name: 'Partisipan', data: dataBySchoolYear1[2009].partisipan, color: '#fa0202' }],
});

// Fungsi untuk memperbarui kedua chart berdasarkan tahun yang dipilih
function updateChart1(year) {
    if (!dataByYear1[year] || !dataBySchoolYear1[year]) {
        console.error(`Data untuk tahun ${year} tidak ditemukan.`);
        return;
    }

    // Update chart partisipan provinsi
    chart1.xAxis[0].setCategories(dataByYear1[year].categories);
    chart1.series[0].setData(dataByYear1[year].partisipan);
    chart1.setTitle({ text: `Jumlah Partisipan 10 Teratas Berdasarkan Provinsi pada tahun ${year}` });

    // Update chart partisipan sekolah
    schoolChart1.xAxis[0].setCategories(dataBySchoolYear1[year].categories);
    schoolChart1.series[0].setData(dataBySchoolYear1[year].partisipan);
    schoolChart1.setTitle({ text: `Jumlah Partisipan 10 Teratas Berdasarkan Sekolah pada tahun ${year}` });
}

// Event listener untuk dropdown tahun
document.getElementById('year-selector').addEventListener('change', function () {
    const year = this.value;
    updateChart1(year);
});

// Inisialisasi dengan data tahun 2009 saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    const defaultYear = '2009';
    updateChart1(defaultYear);
});

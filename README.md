# OSN Dashboard — Olimpiade Sains Nasional

Data dashboard dan analisis untuk **Olimpiade Sains Nasional (OSN)** — ajang kompetisi sains terbesar di Indonesia.

**Live site:** [osn-dashboard.vercel.app](https://osn-dashboard.vercel.app) <!-- update after deploy -->

---

## Struktur Proyek

```
osn-dashboard/
├── website/              # Static website (deployed to Vercel)
│   ├── index.html        # Redirect ke halaman utama
│   ├── vercel.json       # Konfigurasi deployment
│   ├── pages/
│   │   ├── tentang.html  # Halaman tentang OSN
│   │   ├── grafik.html   # Visualisasi data interaktif (Highcharts)
│   │   └── artikel.html  # Artikel & berita OSN
│   └── assets/           # CSS, JS, gambar
│
├── analysis/
│   └── osn_analysis.ipynb  # Notebook analisis data end-to-end
│
├── data/
│   ├── raw/              # Data mentah (.xlsx) per kategori & tahun
│   │   ├── Medali_Provinsi/
│   │   ├── Medali_Sekolah/
│   │   ├── Partisipan_Provinsi/
│   │   └── JenjangSekolah/
│   └── clean/            # Data hasil pembersihan (.csv) + grafik output
│
└── README.md
```

---

## Website

Dibangun dengan **HTML/CSS/JS statis** menggunakan Bootstrap 5 (Soft UI Dashboard) dan Highcharts untuk visualisasi interaktif.

**Halaman:**
- **Tentang** — Penjelasan tentang OSN
- **Grafik** — Visualisasi interaktif: partisipan per tahun, performa sekolah, sentimen analisis
- **Artikel** — Berita dan artikel terkait OSN 2023/2024

**Deploy ke Vercel:**
1. Import repo di [vercel.com](https://vercel.com)
2. Set **Root Directory** ke `website/`
3. Tidak perlu build command — pure static site

---

## Analisis Data

Buka `analysis/osn_analysis.ipynb` untuk melihat full pipeline:

```
Load data mentah → Cleaning → Analisis → Visualisasi → Export
```

**Data yang dianalisis (2019–2024):**
| Dataset | Deskripsi |
|---|---|
| Medali_Provinsi | Top 10 provinsi peraih medali per tahun |
| Medali_Sekolah | Top 10 sekolah peraih medali per tahun |
| Partisipan_Provinsi | Top 10 provinsi dengan partisipan terbanyak |
| JenjangSekolah | Jumlah sekolah peserta per jenjang (SMP/SMA) |

**Jalankan notebook:**
```bash
pip install pandas matplotlib openpyxl jupyter
jupyter notebook analysis/osn_analysis.ipynb
```

---

## Temuan Utama

- DKI Jakarta secara konsisten menjadi juara umum OSN
- Partisipan OSN menunjukkan tren pertumbuhan dari 2019–2024
- Analisis sentimen: **39% Negatif**, 31% Netral, 30% Positif — menunjukkan ruang perbaikan

---

## Tech Stack

| Komponen | Teknologi |
|---|---|
| Website | HTML, CSS, Bootstrap 5, Highcharts, Particles.js |
| Analisis | Python, Pandas, Matplotlib |
| Deployment | Vercel |
| Data | Excel (.xlsx), CSV |

---

*Proyek ini dibuat sebagai bagian dari mata kuliah Data Warehouse.*

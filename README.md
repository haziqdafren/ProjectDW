# OSN Dashboard — Olimpiade Sains Nasional

Ini adalah proyek mata kuliah **Data Warehouse** yang aku buat sebagai bagian dari tugas akhir semester. Idenya sederhana — aku pengen bikin sesuatu yang bukan cuma bisa dijalankan di laptop sendiri, tapi juga bisa dilihat orang lain secara online.

Jadi aku pilih topik **Olimpiade Sains Nasional (OSN)** karena datanya menarik dan cukup lengkap. OSN itu kompetisi sains terbesar di Indonesia yang diikuti siswa dari seluruh provinsi setiap tahunnya. Dari data ini aku bisa lihat banyak hal — provinsi mana yang paling banyak raih medali, sekolah mana yang paling berprestasi, sampai gimana tren partisipasi peserta dari tahun ke tahun.

---

## Isi Proyek

```
osn-dashboard/
├── website/        → website statis yang bisa langsung dibuka di browser
├── analysis/       → notebook Python untuk analisis datanya
├── data/
│   ├── raw/        → data mentah Excel yang aku kumpulkan
│   └── clean/      → hasil setelah data dibersihkan
└── README.md
```

---

## Website

Website-nya aku deploy ke Vercel supaya bisa diakses siapa saja tanpa perlu install apapun.

**Halaman yang ada:**
- **Tentang** — penjelasan singkat tentang apa itu OSN
- **Grafik** — visualisasi interaktif data OSN pakai Highcharts, ada filter per tahun juga
- **Artikel** — kumpulan berita dan artikel seputar OSN 2023–2024

Untuk tampilannya aku pakai template Bootstrap 5 dari Creative Tim (Soft UI Dashboard) yang sudah aku modifikasi dan bersihkan dari komponen-komponen yang nggak kepake.

**Cara buka lokal:**
Cukup buka file `website/index.html` langsung di browser, nggak perlu server khusus.

---

## Analisis Data

Semua proses analisis ada di file `analysis/osn_analysis.ipynb`. Di sana aku dokumentasikan step by step mulai dari:

1. Load data dari file Excel
2. Bersihin data — cek nilai kosong, hapus duplikat, normalisasi kolom
3. Analisis medali per provinsi (2019–2024)
4. Analisis medali per sekolah
5. Analisis jumlah partisipan per provinsi
6. Perbandingan peserta jenjang SMP vs SMA
7. Analisis sentimen dari saran-saran yang masuk tentang OSN

**Cara jalankan notebook-nya:**

Pastiin dulu sudah install library yang dibutuhkan:
```bash
pip install pandas matplotlib openpyxl jupyter
```

Lalu jalankan:
```bash
jupyter notebook analysis/osn_analysis.ipynb
```

---

## Data

Data yang aku pakai dikumpulkan dari berbagai sumber dan disimpan dalam format Excel per tahun (2019–2024):

| Folder | Isi |
|---|---|
| `Medali_Provinsi/` | Top 10 provinsi peraih medali tiap tahun |
| `Medali_Sekolah/` | Top 10 sekolah peraih medali tiap tahun |
| `Partisipan_Provinsi/` | Top 10 provinsi dengan peserta terbanyak |
| `JenjangSekolah/` | Jumlah peserta SMP dan SMA per tahun |

Setelah dianalisis, hasilnya disimpan ke `data/clean/` dalam format CSV.

---

## Beberapa Hal yang Aku Temukan

- DKI Jakarta hampir selalu jadi juara umum OSN setiap tahunnya
- Jumlah peserta OSN terus meningkat dari 2019 sampai 2024
- Dari analisis sentimen, ternyata 39% saran yang masuk bersifat negatif — artinya masih banyak yang ngerasa OSN perlu diperbaiki dari sisi pelaksanaannya

---

## Tech Stack

- **Website:** HTML, CSS, Bootstrap 5, Highcharts, Particles.js
- **Analisis:** Python, Pandas, Matplotlib, Jupyter Notebook
- **Deployment:** Vercel
- **Data:** Excel (.xlsx) → CSV

---

*Dibuat oleh Mohamad Haziq Dafren — Proyek Data Warehouse*

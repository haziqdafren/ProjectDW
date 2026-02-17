# OSN Dashboard — Olimpiade Sains Nasional

This is a data warehouse project I built for my university coursework. The topic I chose is **Olimpiade Sains Nasional (OSN)** — Indonesia's biggest national science olympiad, held every year with students competing from all 34 provinces.

I was curious about the patterns behind the competition — which provinces consistently win the most medals, which schools keep showing up at the top, and how participation has grown over the years. That curiosity turned into this project.

---

## How the Project Flows

The whole thing went through three stages, and I think that's the most important thing to understand about this project:

**1. Exploring with Tableau**

Before writing a single line of Python, I used Tableau to explore the raw data visually. This helped me get a feel for what the data actually looked like — spotting obvious outliers, understanding the shape of each dataset, and figuring out which questions were actually worth asking. The Tableau dashboards for medal counts and participant numbers are still linked in the website.

**2. Cleaning and Analysing with Python**

Once I knew what I was working with, I moved everything into Python. The Jupyter notebook in `analysis/` documents the full process — loading the Excel files, cleaning up missing values and duplicates, normalising column names, and then producing the actual charts and findings. I kept the notebook readable on purpose, with markdown explaining each step, so anyone can follow the logic without having to guess what the code is doing.

**3. Presenting on the Website**

The final output is a static website built with Bootstrap 5 and Highcharts. It's not just a pretty wrapper — the interactive charts on the Grafik page are driven by the same cleaned data from the analysis. The website is deployed on Vercel so it's accessible to anyone, not just people running it locally.

---

## Project Structure

```
osn-dashboard/
├── website/            → the static site, deployed to Vercel
│   ├── index.html
│   ├── vercel.json
│   ├── pages/
│   │   ├── tentang.html    → about OSN
│   │   ├── grafik.html     → interactive charts
│   │   └── artikel.html    → news and articles
│   └── assets/
│       ├── css/
│       ├── js/
│       └── img/
│
├── analysis/
│   └── osn_analysis.ipynb  → full analysis notebook
│
├── data/
│   ├── raw/                → original Excel files, organised by category
│   │   ├── Medali_Provinsi/
│   │   ├── Medali_Sekolah/
│   │   ├── Partisipan_Provinsi/
│   │   └── JenjangSekolah/
│   └── clean/              → cleaned CSVs and chart outputs
│
└── README.md
```

---

## Running the Analysis

You'll need Python and a few libraries. If you don't have them yet:

```bash
pip install pandas matplotlib openpyxl jupyter
```

Then open the notebook:

```bash
jupyter notebook analysis/osn_analysis.ipynb
```

The notebook walks through everything step by step — loading each dataset, cleaning it, and generating the visualisations. The cleaned data gets saved to `data/clean/` automatically when you run it.

---

## The Data

All datasets cover **2019 to 2024**, stored as individual Excel files per year:

| Folder | What's inside |
|---|---|
| `Medali_Provinsi/` | Top 10 provinces by medal count each year |
| `Medali_Sekolah/` | Top 10 schools by medal count each year |
| `Partisipan_Provinsi/` | Top 10 provinces by number of participants |
| `JenjangSekolah/` | Number of participating schools by level (SMP vs SMA) |

---

## What I Found

- DKI Jakarta dominates the medal table almost every single year — the gap between first and second place is consistently large
- Participation has grown steadily from 2019 through 2024, which suggests the competition is reaching more schools over time
- The sentiment analysis on feedback about OSN showed 39% negative responses — meaning a good chunk of people feel there's still room to improve how the competition is run

---

## Tech Stack

| Layer | Tools |
|---|---|
| Data exploration | Tableau |
| Data cleaning & analysis | Python, Pandas, Matplotlib, Jupyter |
| Website | HTML, CSS, Bootstrap 5, Highcharts, Particles.js |
| Deployment | Vercel |

---

*Built by Mohamad Haziq Dafren — Data Warehouse Project*

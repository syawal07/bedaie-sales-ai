# 🚀 BeDaie AI Sales Page Generator

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Groq](https://img.shields.io/badge/Groq_AI-F55036?style=for-the-badge&logo=groq&logoColor=white)

Sebuah aplikasi web modern yang dirancang khusus untuk memecahkan masalah *copywriting* yang memakan waktu. Sistem ini mengubah informasi mentah suatu produk atau layanan menjadi halaman penjualan (*Sales Page*) yang terstruktur, persuasif, dan siap konversi dalam hitungan detik menggunakan kecerdasan buatan.

Proyek ini dibangun sebagai penyelesaian **Technical Assessment - Option B** untuk pengembangan produk digital, dengan fokus pada pengalaman pengguna (UI/UX), kecepatan pemrosesan, dan arsitektur kode yang bersih.

---

## 🎯 Objektif & Pemenuhan Tugas

Aplikasi ini secara penuh memenuhi seluruh kriteria wajib (*Required*) dan tambahan (*Bonus*) dari instruksi teknis yang diberikan:

- ✅ **User Authentication:** Menggunakan ekosistem keamanan *session-based* standar industri untuk *Register*, *Login*, dan *Logout*.
- ✅ **Product Input Form:** Antarmuka pengumpulan data yang tervalidasi mencakup nama produk, fitur unggulan, target audiens, dan USP (*Unique Selling Point*).
- ✅ **AI Sales Page Generation:** Terintegrasi dengan model LLM berkecepatan tinggi untuk menghasilkan format JSON yang dikonstruksi secara paksa, memastikan output berupa elemen *copywriting* presisi (Headline, Benefits, Social Proof, CTA) tanpa gangguan teks mentah.
- ✅ **Saved Pages (CRUD):** Sistem manajemen *database* yang memungkinkan pengguna untuk melihat, menghapus, atau menghasilkan ulang (*re-generate*) proyek halaman penjualan mereka.
- ✅ **Live Preview:** Kanvas *rendering* waktu nyata yang mengubah data JSON dari AI menjadi antarmuka pendaratan (*landing page*) visual yang sesungguhnya.

### ✨ Fitur Bonus Terimplementasi
- **Export to HTML:** Kemampuan mengisolasi komponen React yang di-*render* beserta gaya CSS-nya (Tailwind CDN) menjadi file `.html` mandiri yang siap diunduh dan dipublikasikan *offline* maupun di *server* manapun.
- **Multiple Design Templates:** *Theme switcher* dinamis (BeDaie Purple, Corporate Blue, Fresh Emerald) pada *Live Preview* yang memanipulasi *state* React untuk mengubah palet warna secara instan tanpa perlu me-*reload* halaman.

---

## 🏗️ Arsitektur Teknologi & Alur Logika

Proyek ini menggunakan pendekatan **Modern Monolith** (Inertia.js) yang menggabungkan keandalan *backend* tradisional dengan reaktivitas *frontend* SPA (*Single Page Application*).

### 1. Backend Layer (Laravel 11)
Bertindak sebagai otak utama yang mengamankan rute, memvalidasi input dari *client*, dan berkomunikasi dengan pihak ketiga.
- **ORM & Database:** Menggunakan Eloquent untuk relasi data, dengan `JSON Casting` pada tabel `sales_pages` untuk menyimpan struktur kompleks hasil pemrosesan AI secara efisien dalam satu kolom.
- **API Controller:** Mengisolasi logika komunikasi dengan LLM menggunakan HTTP Client Laravel.

### 2. Frontend Layer (React 18 + Inertia.js)
Menyajikan antarmuka yang sangat cepat tanpa perlu memuat ulang halaman (*full page reload*).
- **State Management:** Memanfaatkan *hooks* bawaan React untuk mengelola form *input*, transisi *loading*, dan manipulasi tema secara *real-time*.
- **Styling (Tailwind CSS):** Pendekatan *utility-first* untuk merancang UI yang elegan, responsif, dan sesuai dengan identitas *brand* (*startup-style*).

### 3. Artificial Intelligence Engine (Groq LPU + LLaMA 3.3)
Sistem ini mem- *bypass* latensi tinggi yang biasa ditemukan pada API berbasis GPU tradisional dengan menggunakan teknologi **Groq LPU (Language Processing Unit)**.
- **Prompt Engineering:** Instruksi ketat yang mengkondisikan model Meta LLaMA-3.3-70b untuk murni bertindak sebagai *copywriter* dan mengembalikan struktur data khusus.
- **Output Sanitization:** Implementasi Regex (`preg_match`) di *controller* untuk memastikan anomali teks (sapaan dari AI) dihilangkan sebelum JSON diurai, mencegah *crash* pada *rendering frontend*.

---

## 👨‍💻 Pengembang

Dikembangkan oleh **Syawal Saputra** untuk unjuk kerja teknis.  
Menghadirkan perpaduan antara logika *backend* yang tangguh dan estetika *frontend* yang memanjakan mata.
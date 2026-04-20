Tentu, Syawal! File `README.md` adalah wajah dari repositori GitHub kamu. Penilai (HRD/Technical Reviewer) biasanya akan membaca file ini terlebih dahulu sebelum melihat kode. Saya sudah menyusunnya secara profesional agar mencerminkan kualitas kerja yang tinggi.

Berikut adalah isi lengkap file `README.md` yang disesuaikan dengan instruksi tugas Opsi B. Kamu tinggal membuat file baru bernama `README.md` di folder utama proyekmu, lalu *paste* kode di bawah ini:

```markdown
# BeDaie Sales AI - Sales Page Generator

BeDaie Sales AI adalah aplikasi berbasis web yang dirancang untuk membantu pemilik bisnis atau pemasar mengubah informasi produk/layanan mentah menjadi halaman penjualan (sales page) yang terstruktur dan persuasif menggunakan kecerdasan buatan (AI).

Proyek ini dibangun sebagai bagian dari tugas teknis seleksi AI Developer di BeDaie.

## 🚀 Teknologi Utama

- **Backend:** Laravel 11 (PHP 8.2)
- **Frontend:** React.js dengan Inertia.js
- **Styling:** Tailwind CSS
- **Database:** MySQL
- **AI Engine:** Groq Cloud API (Model: llama-3.3-70b-versatile)
- **Authentication:** Laravel Breeze

## ✨ Fitur Utama

Aplikasi ini memenuhi seluruh persyaratan wajib dan bonus dalam instruksi tugas:

1. **User Authentication:** Sistem registrasi dan login menggunakan Laravel Auth (Breeze).
2. **Product Input Form:** Formulir terstruktur untuk input data produk (nama, deskripsi, fitur, target audiens, harga, dan USP).
3. **AI Sales Page Generation:** Integrasi dengan LLM LLaMA 3.3 via Groq API untuk menghasilkan copywriting yang persuasif.
4. **Saved Pages (CRUD):** Semua halaman yang dibuat tersimpan di database dan dapat dilihat kembali, diedit (generate ulang), maupun dihapus.
5. **Live Preview:** Tampilan hasil AI dalam layout landing page yang nyata dan profesional.
6. **Bonus - Multi-Design Templates:** Fitur untuk mengganti tema desain (Ungu, Biru, Hijau) secara real-time.
7. **Bonus - Export HTML:** Fitur untuk mengunduh sales page sebagai file HTML standalone yang siap digunakan secara offline.

## 🛠️ Alur Kerja Sistem

1. **Input:** Pengguna memasukkan data produk melalui formulir React.
2. **AI Processing:** Controller Laravel mengirimkan data tersebut ke Groq API dengan instruksi khusus (Prompt Engineering) untuk mengembalikan data dalam format JSON murni.
3. **Data Extraction:** Sistem menggunakan Regex untuk memastikan validitas JSON dari AI sebelum disimpan ke database.
4. **Storage:** Data mentah pengguna dan hasil copywriting AI disimpan ke dalam tabel `sales_pages`.
5. **Rendering:** Inertia.js mengirimkan data ke komponen React untuk ditampilkan dalam layout landing page yang elegan.
6. **Interaction:** Pengguna dapat mengganti gaya desain atau mengekspor kode ke format HTML melalui frontend.

## ⚙️ Instalasi Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek di lingkungan lokal:

1. Clone repositori:
   ```bash
   git clone [https://github.com/syawal07/bedaie-sales-ai.git](https://github.com/syawal07/bedaie-sales-ai.git)
   cd bedaie-sales-ai
   ```

2. Instal dependensi PHP:
   ```bash
   composer install
   ```

3. Instal dependensi Node.js:
   ```bash
   npm install
   ```

4. Salin file lingkungan (.env):
   ```bash
   cp .env.example .env
   ```

5. Atur koneksi database dan API Key di file `.env`:
   ```env
   DB_DATABASE=nama_database_kamu
   DB_USERNAME=root
   DB_PASSWORD=

   GROQ_API_KEY=your_groq_api_key_here
   ```

6. Generate aplikasi key dan jalankan migrasi:
   ```bash
   php artisan key:generate
   php artisan migrate
   ```

7. Jalankan server pembangunan:
   ```bash
   # Terminal 1
   php artisan serve

   # Terminal 2
   npm run dev
   ```

8. Akses aplikasi di `http://localhost:8000`.

## 📄 Catatan Teknis

- Aplikasi ini menggunakan **Modern Monolith Architecture** dengan Inertia.js, yang memberikan pengalaman Single Page Application (SPA) tanpa kerumitan pengaturan API yang terpisah.
- Kecepatan generasi AI dioptimalkan menggunakan **LPU (Language Processing Unit)** dari Groq untuk hasil yang nyaris instan.
- Desain UI/UX disesuaikan dengan identitas visual BeDaie menggunakan skema warna ungu yang elegan dan modern.

---
Dibuat oleh **Syawal Saputra** untuk Tugas Teknis BeDaie.
```

---


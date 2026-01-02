# Website Service

Website Service adalah aplikasi berbasis web untuk mengelola layanan jasa/service secara online.
Project ini dibuat sederhana, mudah dipahami, dan cocok untuk pembelajaran maupun pengembangan lanjutan.

---

## 🚀 Fitur
- Landing page layanan
- Booking / pemesanan service
- Manajemen data service
- Dashboard admin
- Responsive design

---

## 🛠️ Teknologi
- PHP Native
- MySQL
- HTML, CSS, JavaScript

---

## 📂 Struktur Folder
project/
├── admin/
├── assets/
├── config/
│ └── database.php
├── index.php
└── README.md

yaml
Copy code

---

## ⚙️ Instalasi & Konfigurasi

### 1. Clone repository
git clone https://github.com/username/website-service.git

markdown
Copy code

### 2. Pindahkan ke server lokal
- XAMPP → `htdocs`
- Laragon → `www`

### 3. Buat database
CREATE DATABASE website_service;

pgsql
Copy code

### 4. Import database (.sql) jika ada

### 5. Konfigurasi database  
File: `config/database.php`

<?php $host = "localhost"; $user = "root"; $pass = ""; $db = "website_service"; ``` ### 6. Jalankan di browser ``` http://localhost/website-service ``` --- ## 👤 Role - Admin - User --- ## 📄 License Free to use for learning and development. --- ## 👨‍💻 Author Nama Kamu ``` 
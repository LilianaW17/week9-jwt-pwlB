# Tugas Week 9 - JWT

Tugas ini mencakup materi dari modul 6 hingga modul 8 dengan tambahan mengimplementasikan autentikasi dengan JSON Web Token (JWT). Tugas ini diimpelementasikan dengan contoh kasus pengelolaan data PKM.

## Database

Tugas ini menggunakan database `pkm_db` yang terdiri dari 2 tabel.

**1. Tabel `proposals`** 

Terdiri dari kolom `id`, `judul`, `kategori`, `ketua`, `univ`, dan `status_lolos`.

**2. Tabel `users`**

Terdiri dari kolom `id`, `username`, `password`, dan `role` yang berfungsi untuk menyimpan data user dan admin ketika pengguna melakukan login.

## Hasil Uji Coba Postman

### 1. Registrasi Akun Admin
![alt text](<screenshots/Screenshot (229).png>)

Gambar di atas adalah hasil uji coba di Poatman untuk mendaftarkan akun admin dengan username dan password pada rute `register-admin` yang memang khusus untuk mendaftarkan akun admin. Nantinya, akun admin bisa melakukan CRUD, yaitu menambahkan data proposal, mengedit atau mengupdate data proposal, serta menghapus data proposal.

### 2. Registrasi Akun User
![alt text](<screenshots/Screenshot (233).png>)

Gambar di atas adalah hasil uji coba di Postman utntuk mendaftarkan akun user pada rute `register` yang khusus untuk mendaftarkan akun user biasa. Nantinya user hanya bisa melihat data-data proposal tanpa bisa mengupdate dan menghapus ataupun menambahkan data.

### 3. Login Akun Admin
![alt text](<screenshots/Screenshot (235).png>)

Proses di atas adalah proses login dengan rute `..auth/login` dengan akun admin. Dengan method POST maka akan mendapatkan token untuk diinput terlebih dahulu di `Authorization` sebelum bisa mengakses data-data proposal.

### 4. Menambahkan Data oleh Admin
![alt text](<screenshots/Screenshot (236).png>)

Proses di atas terlihat berhasil menambahkan data proposal dengan benar karena setelah admin memasukkan kode token tersebut, admin bisa melakukan menmbahkan data, mengupdate data, serta menghapus data.

### 5. Mengupdate Data oleh Admin
![alt text](<screenshots/Screenshot (237).png>)

Proses di atas terlihat berhasil dengan admin yang berhasil melakukan update pada salah satu data proposal dengan method PUT di Postman.

### 6. Menghapus Data oleh Admin
![alt text](<screenshots/Screenshot (238).png>)

Proses di atas terlihat berhasil dihapus dengan method DELETE yang dilakukan admin.

### 7. Menghapus dan Mengupdate Data yang Salah oleh Admin
![alt text](<screenshots/Screenshot (239).png>)
![alt text](<screenshots/Screenshot (240).png>)

Dua proses di atas terlihat bahwa Postman menampilkan pesan error bahwa data proposal yang ingin dihapus atau proposal yang ingin di update tidak ada pada database.

### 8. Login Akun User
![alt text](<screenshots/Screenshot (234).png>)

Gambar di atas terlihat bahwa proses login dengan akun user berhasil dilakukan sehingga user mendapatkan token yang harus diinput pada `Authorization` sebelum bisa mengakses data proposals.

### 9. Melihat Data oleh User
![alt text](<screenshots/Screenshot (284).png>)

Dapat terlihat bahwa user berhasil melihat data-data proposals yang ada pada database setelah berhasil memasukkan token.

### 10. Menambahkan dan Menghapus Data oleh User
![alt text](<screenshots/Screenshot (285).png>)
![alt text](<screenshots/Screenshot (286).png>)

Dua proses di atas tidak bisa dilakukan oleh user karena yang memiliki kewenangan untuk melakukan CRUD pada data proposal hanya admin sehingga Postman akan menampilkan pesan bahwa akses yang hendak dilakukan user ditolak.

### 11. Mengakses Tanpa Token
![alt text](<screenshots/Screenshot (230).png>)

Proses di atas dapat diketahui bahwa user manapun yang tidak melakukan login apalagi memasukkan token tidak bisa mengakses data-data proposal.

### 12. Memasukkan Token yang Salah
![alt text](<screenshots/Screenshot (231).png>)

Proses di atas dapat diketahui bahwa jika user yang mencoba login memasukkan token yang salah akan menampilkan pesan error bahwa token tersebut salah atau kadaluarsa.

### 13. Mengakses Rute yang Salah
![alt text](<screenshots/Screenshot (232).png>)

Proses di atas menunjukkan bahwa jika user hendak mengakses rute yang tidak terdaftar pada kode maka akan menampilkan pesan error bahwa rute tersebut tidak ditemukan.

### 14. Memasukkan Username yang Salah
![alt text](<screenshots/Screenshot (283).png>)

Proses di atas terjadi jika user salah memasukkan username ataupun password, maka Postman akan menampilkan pesan error bahwa username atau password tersebut salah dan menolak akses.

### 15. Proses pada Git Bash
![alt text](<screenshots/Screenshot 2025-11-03 131220.png>)

Gambar di atas adalah proses yang ditangkap oleh terminal selama proses uji coba pada Postman dilakukan.
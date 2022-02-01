# skilvul-into-nodejs

###Intro and Essential Nodejs
####Tugas 1

1. Mohon jelaskan apa itu Node.js? Apa perbedaannya dengan JavaScript?  

Jawab: Node.js adalah runtime environment untuk JavaScript yang bersifat open-surce dan cross-platform. Node.js menjalankan V8 JavaScript engine di luar browser, yang memungkinkan Node.js untuk memiliki performa yang tinggi.Perbedaan JavaScript dengan Node.js adalah, JavaScript merupakan bahasa pemrograman sedangkan Node.js adalah runtime - JavaScript yang browser/client-side oriented akan dapat melakukan berbagai proses di sisi server jika digunakan Node.js sebagai runtime.  

2. Mohon jelaskan arsitektur dari Node.js?  

Jawab: 
- Single thread, JavaScript hanya memiliki satu tumpukan panggilan yang digunakan untuk menjalankan program
- Event loop, akan memeriksa terus-menerus, ketika antrian call stack kosong, kaan ditambah antrian baru dari event queue samapi semua perintah selesai dieksekusi
- Server-side scripting, Node.js memungkinkan penggunaan JavaScript di server-side emnggunakan terminal command line dengan perintah "node"  

3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?  

Jawab: Built-in module adalah modul yang dapat digunakan tanpa melakukan instalasi tambahan; external module merupakan modul yang ditulis sebagai source file yang terpisah yang mengandung setidaknya satu deklarasi import atau export; custom module adalah modul yang dibuat secara custom  

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?
Jawab:
- Built-in Module: fs, http, https, net
- External Module: Sequelize
- Custom Module: exports.divide = function (a, b){return a / b}
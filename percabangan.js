const prompt = require('prompt-sync')({ sigint: true });

const password = prompt('Enter password: ');
const validPassword = 'password'

if (password === validPassword) {
    console.log("Selamat datang bos!") //jika bener
}
else {
    console.log("Password Salah, coba lagi!") //jika salah
}
console.log("Terimakasih sudah menggunakan aplikasi kami")
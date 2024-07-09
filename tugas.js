const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan sebuah bilangan: ', (input) => {
  let x = parseFloat(input);

  if (isNaN(x)) {
    console.log('Input bukan bilangan yang valid');
  } else if (x < 0) {
    console.log('Tidak bisa input bilangan negatif');
  } else if (x % 2 !== 0) {
    console.log('Tidak bisa input bilangan ganjil');
  } else {
    let result = Math.sqrt(x);
    console.log(`Akar pangkat dua dari ${x} adalah ${result}`);
  }

  rl.close();
});
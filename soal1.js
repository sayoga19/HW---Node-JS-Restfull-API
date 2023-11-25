const rumus = require("./rumus");

let sisi = 10;
let persegi = rumus.persegi(sisi);

console.log(`Luas persegi dengan sisi ${sisi} adalah ${persegi.luas}`);
console.log(`Keliling persegi dengan sisi ${sisi} adalah ${persegi.keliling}`);

let panjang = 15;
let lebar = 10;
let persegiPanjang = rumus.persegiPanjang(panjang, lebar);

console.log(`Luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${persegiPanjang.luas}`);
console.log(`Keliling persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${persegiPanjang.keliling}`);
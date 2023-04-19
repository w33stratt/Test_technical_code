var angka = [5, 12, 6, 19, 20, 39, 13, 15, 6, 2, 11];

var genap = [];
var ganjil = [];
var i = 0;

for (i; i < angka.length; i++) {
  if (angka[i] % 2 == 0) {
    genap.push(angka[i]);
  } else {
    ganjil.push(angka[i]);
  }
}
console.log(genap);
console.log(ganjil);

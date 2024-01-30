alert("menu makanan \n1.mie ayam RP.5000\n2.nasi goreng yajuj majuj RP.15000\n3.seblak RP.25000");
var makanan = prompt("selamat datang, silakan memesan");
var pesanan = prompt("mau pesan berapa");
var x = 5000
var y = 15000
var z = 25000
var totalHarga = x * pesanan;
if (makanan == "mie ayam") {
  totalHarga = x * pesanan;
} else if (makanan == "nasi goreng yajuj majuj") {
  totalHarga = y * pesanan;
} else if (makanan == "seblak") {
    totalHarga = z * pesanan;
  }

alert("Pesanan Anda:\nMakanan: " +
 makanan +"\nJumlah porsi: " + pesanan + 
"\nTotal harga: Rp. " + totalHarga );

alert ("Terimakasih sudah mampir");
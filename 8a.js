var nilai = prompt("masukan nilai :");

    if (nilai < 40) {
        alert("coba lagi, nilai kamu Grade = E");
    } else if(nilai < 65) {
        alert("baca soalnya harus teliti ya, nilai kamu Grade = D");
    } else if(nilai < 75) {
        alert("belajar lebih giat ya, nilai kamu Grade = C");
    } else if(nilai < 85) {
        alert("usaha yang bagus, nilai kamu Grade = B");
    } else if(nilai < 100) {
        alert(" wow keren nilai, kamu Grade = A");
    } 
    else { 
        alert("data bukan angka");
    }
    
    if (confirm("masukan angka")) {

    } else {
        alert("maaf yang anda masukan itu bukan angka");
    }
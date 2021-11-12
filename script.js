function proses () {
    var buah = document.getElementById('buah').value;
    var kilo = document.getElementById('kilo').value;
    var diskon = document.getElementById('diskon').value;
    total(buah,kilo,diskon);
}

function total (buah,kilo,diskon) {
    var hargaBuah = getHargaBuah(buah);
    document.getElementById('total').innerHTML = ("jenis buah : " + buah + "<br>");
    document.getElementById('total').innerHTML += ("harga buah/kg : Rp" + hargaBuah + "<br>");
    document.getElementById('total').innerHTML += ("jumlah kg : " + kilo + "kg<br>");
    document.getElementById('total').innerHTML += ("potongan diskon :" + diskon + "%<br>");
    document.getElementById('total').innerHTML += ("besar diskon : Rp" + (diskon/100) * (hargaBuah*kilo) + "<br>");
    document.getElementById('total').innerHTML += ("<br>Sub Total : Rp" + (hargaBuah*kilo) + "<br>");
    document.getElementById('total').innerHTML += ("total : Rp" + ((hargaBuah*kilo) - (diskon/100)*(hargaBuah*kilo)));

}

function getHargaBuah(buah) {
    var hargaBuah;
    if (buah=='Apel') {
        hargaBuah="23000"
    }
    else if (buah=='Pisang') {
        hargaBuah="12000"
    }
    else if (buah=='Anggur') {
        hargaBuah="35000"
    }
    else if (buah=='Mangga') {
        hargaBuah="17000"
    }
}
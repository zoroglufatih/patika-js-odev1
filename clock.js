let userName = document.querySelector("#myName");
let ad = prompt("lütfen adınızı giriniz: ");
userName.innerHTML = ad;



function showTime () {
let tarih = new Date();

let gün = tarih.getDay();
let saat = tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();

if (gün == 1) {
    gün = "Pazartesi";
  } else if (gün == 2) {
    gün = "Salı";
  } else if (gün == 3) {
    gün = "Çarşamba";
  } else if (gün == 4) {
    gün = "Perşembe";
  } else if (gün == 5) {
    gün = "Cuma";
  } else if (gün == 6) {
    gün = "Cumartesi";
  } else if (gün == 7) {
    gün = "Pazar";
  }

  saat = (saat<10)? "0"+saat : saat;
  dakika = (dakika<10)? "0"+dakika : dakika;
  saniye = (saniye<10)? "0"+saniye : saniye;

let time = saat + ":" + dakika + ":" + saniye + " " + gün;
document.querySelector("#myClock").innerHTML = time;
setTimeout(showTime,1000)
}

showTime();
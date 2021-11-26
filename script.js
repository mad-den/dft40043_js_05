function func () {
    let nama = prompt ('Siapa nama?');
    document.getElementById('tajuk').innerText = 'Selamat Datang ' + nama;
   }
   function sah () {
    let sahkan = confirm ('Adakah anda pasti?');
    if (sahkan) {
    return true;
    } else {
    alert ('Arahan simpan dibatalkan');
    return false;
    }
   }
   function fokus () {
    document.getElementById('mesej').innerText = 'Sila klik butang Simpan';
   }
   function bler() {
    document.getElementById('mesej').innerText = 'Sila nyatakan keperluan anda';
   }
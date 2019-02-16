function aranan_ekle() {
    var aranan = document.getElementById("aranan_kelime").value;
    $.ajax({
        url: "/Aranan/AramaEkle",
        data: { "aranan_kelime": aranan },
        success: function (response) {
        },
        error: function (xhr) {
        }
    });
}
function aranan_yukle() {
    var arr = [];
    $.ajax({
        url: "/Aranan/Aranan_Urunleri_Goster",
        data: { "aranan_kelime": "1" },
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:50532/' },
        success: function (response) {
            var i = 1;
            while (i < response.length) {
                arr.push(response[i].kelime);
                i++;
            }
            document.getElementById("aranan_kelimeler").innerHTML =  "Aranan Kelimeler :    " +arr;
        },
        error: function (xhr) {
        }
    });
}
function Islogin() {
    $.ajax({
        async: "false",
        url: "/Home/Islogin",
        data: { "product-name": 1 },
        success: function (response) {
            var deneme = response
            if (deneme === true) {
                var aranan = document.getElementById("aranan_kelime").value
                location.href = '/sonuclar?arama=' + aranan;
                aranan_ekle();
            } else {
                alert("Lütfen Giriş Yapınız");         
            }
        },
        error: function (xhr) {
            alert("Hata Oluştu");  
        }
    });
}




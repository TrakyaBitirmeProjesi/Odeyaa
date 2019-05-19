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

function tum_arananlar() {
    yapay_zeka();
    var arr = [];
    var link_arr = [];
    $.ajax({
        async: "false",
        url: "/Aranan/Son_Aranan_Urunler",
        data: { "aranan_kelime": "1" },
        headers: { 'Access-Control-Allow-Origin': 'http://localhost:50532/' },
        success: function (response) {
            var i = 0;

            var d = response.length - 1;
            for (i = 0; i < 7;i++) {
                arr.push(`<a href = "/sonuclar?arama='${response[d].kelime}'"> ${response[d].kelime}  </a>`);
                i++;
                d--;
            }
            
            document.getElementById("aranan_kelimeler").innerHTML = "<p>Son Aramalar :  " + arr + "</p>";
        },
        error: function (xhr) {
        }
    });
    $.ajax({
        async: "false",
        url: "/Home/Siparis_GetList",
        data: { "product-name": 1 },
        success: function (response) {
            document.getElementById("liste").innerText = response;
            basbana();
        },
        error: function (xhr) {
            console.log("Hata Oluştu siparis_getlist");
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
var urun_liste = ["gofret", "makarna", "yağ", "salam", "süt", "fındık", "balık", "kalem", "soda","deterjan"]
function yapay_zeka() {
    var product = urun_liste[Math.floor(Math.random() * 10)];
    $.ajax({
        url: "http://fiyatkontrol.tk/migros",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            'Access-Control-Allow-Headers': "Origin, Content-Type, X-Auth-Token",
            'Access-Control-Allow-Credentials': "true"
        },
        xhrFields: {
            withCredentials: false
        },
        data: { "product-name": product },
        success: function (response) {
            document.getElementById("img_1").src = response[0].resim;
            document.getElementById("ad_1").innerText = response[0].urun ;
            document.getElementById("fiyat_1").innerText = response[0].fiyat + " TL";
            document.getElementById("a_1").href = response[0].link;

            document.getElementById("img_2").src = response[1].resim;
            document.getElementById("ad_2").innerText = response[1].urun;
            document.getElementById("fiyat_2").innerText = response[1].fiyat + " TL";
            document.getElementById("a_2").href = response[1].link;

            document.getElementById("img_3").src = response[2].resim;
            document.getElementById("ad_3").innerText = response[2].urun;
            document.getElementById("fiyat_3").innerText = response[2].fiyat + " TL";
            document.getElementById("a_3").href = response[2].link;
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });


}



function basbana() {
    var deneme = document.getElementById("liste").innerHTML
    $.ajax({
        async: "false",
        url: "http://fiyatkontrol.tk/yapay_knn",
        data: { "liste": deneme },
        success: function (response) {
            console.log(response);
            kategori_oner(response);
        },
        error: function (xhr) {
            console.log("Hata Oluştu basbana");
        }
    });
}

function liste_al(userId) {
    $.ajax({
        async: "false",
        url: "http://localhost:50532/Home/Siparis_GetList",
        data: { "userId": userId },
        success: function (response) {
            console.log(response);
        },
        error: function (xhr) {
            console.log("Hata Oluştu basbana");
        }
    });
}

function kategori_oner(userId) {
    $.ajax({
        async: "false",
        url: "http://localhost:50532/Home/KategoriOner",
        data: { "uId": userId },
        success: function (response) {
            console.log(response);
        },
        error: function (xhr) {
            console.log("Hata Oluştu listegonder");
        }
    });
}






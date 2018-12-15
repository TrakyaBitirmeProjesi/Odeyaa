function urun_ekle(ad, fiyat, link, resim) {
    $.ajax({
        url: "sepet/Urun_Ekle",
        data: { "resim": resim, "urun_adi": ad, "fiyat": fiyat, "url": link },
        success: function (response) {
            document.getElementById("demo").innerHTML = "Eklendi";
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
};
function fav_urun_ekle(ad, fiyat, link, resim) {
    $.ajax({
        url: "Istek/Urun_Ekle",
        data: { "resim": resim, "urun_adi": ad, "fiyat": fiyat, "url": link },
        success: function (response) {
            document.getElementById("demo").innerHTML = "Eklendi";
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
};

function aranan_urun_ekle(ad, fiyat, link, resim) {
    $.ajax({
        url: "Aranan/Urun_Ekle",
        data: { "resim": resim, "urun_adi": ad, "fiyat": fiyat, "url": link },
        success: function (response) {
            document.getElementById("demo").innerHTML = "Eklendi";
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
};


function post_func() {
    var arr = [];
    var product = document.getElementById("aranan_kelime").value
    $.ajax({
        url: "http://fiyatkontrol.tk/migros",
        xhrFields: {
            withCredentials: false
        },
        data: { "product-name": product },
        success: function (response) {
            document.getElementById("tbl1").style.visibility = "visible";
            var table = document.getElementById("tbl1");
            var row = table.insertRow();
            for (var i in response) {
                arr.push(["<img height='100' width='100' src=" + response[i].resim + " >", response[i].urun, response[i].fiyat + " TL", "<a href=" + response[i].link + ">Git</a>"])
                var row = table.insertRow();
                var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                var cell3 = row.insertCell();
                var cell4 = row.insertCell();
                var cell5 = row.insertCell();
                cell1.innerHTML = "<img height='100' width='100' src=" + response[i].resim + " >";
                cell2.innerHTML = response[i].urun;
                cell3.innerHTML = response[i].fiyat;
                var yazi = `<button onclick = "urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Sepete Ekle</button>`;
                cell4.innerHTML = yazi;
                cell5.innerHTML = `<button onclick = "fav_urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Favorilere Ekle</button>`;

                //"<a href='/Sepet/urun_ekle?url=" + response[i].link + "&fiyat=" + response[i].fiyat + "&resim=" + response[i].resim + "&urun_adi=" + response[i].urun + "'>Git</a>";
                 
            }
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
function post_func2() {
    var arr = [];
    var product = document.getElementById("aranan_kelime").value
    $.ajax({
        url: "http://fiyatkontrol.tk/carrefoursa",
        data: { "product-name": product },
        xhrFields: {
            withCredentials: false
        },
        success: function (response) {
            document.getElementById("tbl2").style.visibility = "visible";
            var table = document.getElementById("tbl2");
            var row = table.insertRow();
            for (var i in response) {
                arr.push(["<img height='100' width='100' src=" + response[i].resim + ">", response[i].urun, response[i].fiyat + " TL", "<a href=" + response[i].link + ">Git</a>"])
                var row = table.insertRow();
                var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                var cell3 = row.insertCell();
                var cell4 = row.insertCell();
                var cell5 = row.insertCell();
                cell1.innerHTML = "<img height='100' width='100' src=" + response[i].resim + " >";
                cell2.innerHTML = response[i].urun;
                cell3.innerHTML = response[i].fiyat;
                var yazi = `<button onclick = "urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Sepete Ekle</button>`;
                cell4.innerHTML = yazi;
                cell5.innerHTML = `<button onclick = "fav_urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Favorilere Ekle</button>`;

            }

        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}

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
                aranan_ekle();
                post_func();
                post_func2();
            } else {
                document.getElementById("demo2").innerHTML = "Lütfen Giriş Yapınız";
            }

        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}




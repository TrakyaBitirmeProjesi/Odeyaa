function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
function migros_sonuclar() {
    var arr = [];
    var product = getQueryVariable("arama")
    $.ajax({
        url: "http://fiyatkontrol.tk/migros",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            'Access-Control-Allow-Headers': "Origin, Content-Type, X-Auth-Token",
            'Access-Control-Allow-Credentials':"true"},
        xhrFields: {
            withCredentials: false
        },
        data: { "product-name": product },
        success: function (response) {
            var limit = 10;
            document.getElementById("tbl1").style.visibility = "visible";
            var table = document.getElementById("tbl1");
            var row = table.insertRow();
            if (response.length < 10) {
                limit = response.length;
            }
            var i;
            for (i = 0; i < limit; i++) {
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
                var yazi = `<button type="button" class="btn btn-success" onclick = "urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Sepete Ekle</button>`;
                cell4.innerHTML = yazi;
                cell5.innerHTML = `<button type="button" class="btn btn-light"  onclick = "fav_urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Favorilere Ekle</button>`;

                //"<a href='/Sepet/urun_ekle?url=" + response[i].link + "&fiyat=" + response[i].fiyat + "&resim=" + response[i].resim + "&urun_adi=" + response[i].urun + "'>Git</a>";

            }
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
function carrefoursa_sonuclar() {
    var arr = [];
    var product = getQueryVariable("arama")
    $.ajax({
        url: "http://fiyatkontrol.tk/carrefoursa",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            'Access-Control-Allow-Headers': "Origin, Content-Type, X-Auth-Token",
            'Access-Control-Allow-Credentials': "true"},
        data: { "product-name": product },
        xhrFields: {
            withCredentials: false
        },
        success: function (response) {
            var limit = 10;
            document.getElementById("tbl2").style.visibility = "visible";
            var table = document.getElementById("tbl2");
            var row = table.insertRow();
            if (response.length < 10) {
                limit = response.length;
            }
            var i;
            for (i = 0; i < limit; i++) {
                arr.push(["<img height='100' width='100' src=" + response[i].resim + ">", response[i].urun, response[i].fiyat + " TL", "<a href=" + response[i].link + ">Git</a>"])
                var row = table.insertRow();
                var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                var cell3 = row.insertCell();
                var cell4 = row.insertCell();
                var cell5 = row.insertCell();
                cell1.innerHTML = "<img height='100' width='100' src=" + response[i].resim + " >";
                cell2.innerHTML = response[i].urun + "  ";
                cell3.innerHTML = response[i].fiyat;
                var yazi = `<button type="button" class="btn btn-success" onclick = "urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Sepete Ekle</button>`;
                cell4.innerHTML = yazi;
                cell5.innerHTML = `<button type="button" class="btn btn-light" onclick = "fav_urun_ekle('${response[i].urun}','${response[i].fiyat}','${response[i].link}','${response[i].resim}')">Favorilere Ekle</button>`;

            }

        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
function urun_ekle(ad, fiyat, link, resim) {
    $.ajax({
        url: "sepet/Urun_Ekle",
        data: { "resim": resim, "urun_adi": ad, "fiyat": fiyat, "url": link },
        success: function (response) {
            alert("Ürün Sepete Eklendi.")
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
            alert("Ürün Favorilere Eklendi.")
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

function sonuc_yukle() {
    migros_sonuclar();
    carrefoursa_sonuclar();
}


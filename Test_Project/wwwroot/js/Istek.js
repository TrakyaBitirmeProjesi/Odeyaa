﻿function urun_sil(id) {
    $.ajax({
        url: "Istek/Urun_Sil",
        data: { "Id": id },
        success: function (response) {
            alert("Ürününüz Silindi");
            $("#tbl2").empty(); //tb12 bize views/istel/index.xshtml deki tabloyu çağırıcak
            post_function();      //
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
};

function urun_sepete(id) {
    $.ajax({
        url: "Istek/Urun_Sil",
        data: { "Id": id },
        success: function (response) {
            $("#tbl2").empty(); //tb12 bize views/istel/index.xshtml deki tabloyu çağırıcak
            post_function();      //
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
};

function urun_ekle(id,ad, fiyat, link, resim) {
    $.ajax({
        url: "sepet/Urun_Ekle",
        data: { "resim": resim, "urun_adi": ad, "fiyat": fiyat, "url": link },
        success: function (response) {
            urun_sepete(id)
            alert("Ürün Sepete Eklendi.")
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
};

function goLink(link) {
    //location.href = link;
    window.open(link)
}


function favorileri_yukle() {
    var arr = [];
    $.ajax({
        url: "/Istek/fav_urun_goster",
        data: { "product-name": "proje" },
        xhrFields: {
            withCredentials: false
        },
        success: function (response) {
            if (response == "") {
                alert("Favori Ürün yok");
                document.getElementById("istekyazi").innerHTML = "Favori Ürününüz Yok";
                document.getElementById("toplam_fiyat").innerHTML = "";
            } else {
                document.getElementById("favori_tbl").style.visibility = "visible";
                var table = document.getElementById("favori_tbl");
                var row = table.insertRow();
                var toplam_fiyat = 0;
                for (var i in response) {
                    arr.push(["<img height='100' width='100' src=" + response[i].resim + ">", response[i].urun, response[i].fiyat + " TL", "<a href=" + response[i].link + ">Git</a>"])
                    var row = table.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    var cell3 = row.insertCell();
                    var cell4 = row.insertCell();
                    var cell5 = row.insertCell();
                    var cell6 = row.insertCell();
                    cell1.innerHTML = "<img height='100' width='100' src=" + response[i].urun_Fotograf + " >";
                    cell2.innerHTML = "&nbsp&nbsp" +response[i].urun_Adi ;
                    cell3.innerHTML = response[i].urun_Fiyati + "TL ";
                    cell4.innerHTML = `<button  type="button" class="btn btn-primary" onclick = "goLink('${response[i].urun_Linki}')">Ürüne Git</button>`;                   
                    cell5.innerHTML = `<button  type="button" class="btn btn-danger" onclick = "urun_sil('${response[i].id}')">Ürünü Sil</button>` ;
                    cell6.innerHTML = `<button  type="button" class="btn btn-success" onclick = "urun_ekle('${response[i].id}','${response[i].urun_Adi}','${response[i].urun_Fiyati}','${response[i].urun_Linki}','${response[i].urun_Fotograf}')">Sepete Ekle</button>`;
                    toplam_fiyat = toplam_fiyat + response[i].urun_Fiyati

                }
                document.getElementById("toplam_fiyat").innerHTML = "<h3>Favori Ürünlerinizin Fiyatı <br><br> " + toplam_fiyat + " TL</h3>";
}
            
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
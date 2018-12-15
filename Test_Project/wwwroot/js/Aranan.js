function urun_sil(id) {
    $.ajax({
        url: "Aranan/Urun_Sil",
        data: { "Id": id },
        success: function (response) {
            document.getElementById("demo").innerHTML = "silme islemi basarili";
            $("#tbl2").empty(); //tb12 bize views/aranan/index.xshtml deki tabloyu çağırıcak
            post_function();      //
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
};

} function aranan_fonksiyon() {
    var arr = [];
    $.ajax({
        url: "/Aranan/Aranan_Urunler",
        data: { "product-name": "proje" },
        xhrFields: {
            withCredentials: false
        },
        success: function (response) {
            document.getElementById("tbl2").style.visibility = "visible";
            var table = document.getElementById("tbl2");
            var row = table.insertRow();
            //var toplam_fiyat = 0;
            for (var i in response) {
                arr.push(["<img height='100' width='100' src=" + response[i].resim + ">", response[i].urun, response[i].fiyat + " TL", "<a href=" + response[i].link + ">Git</a>"])
                var row = table.insertRow();
                var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                var cell3 = row.insertCell();
                var cell4 = row.insertCell();
                var cell5 = row.insertCell();
                cell1.innerHTML = "<img height='100' width='100' src=" + response[i].urun_Fotograf + " >";
                cell2.innerHTML = response[i].urun_Adi;
                cell3.innerHTML = response[i].urun_Fiyati + "&nbsp&nbspTL ";
                cell4.innerHTML = "<a href=" + response[i].urun_Linki + ">Git</a>";
                cell5.innerHTML = `<button onclick = "urun_sil('${response[i].id}')">Ürünü Sil</button>`;

                //toplam_fiyat = toplam_fiyat + response[i].urun_Fiyati

            }
            //document.getElementById("toplam_fiyat").innerHTML = "Istek Listenizdeki Ürünlerin Fiyatı = " + toplam_fiyat + "TL";

        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
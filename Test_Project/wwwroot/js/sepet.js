function urun_sil(id) {
    $.ajax({
        url: "sepet/Urun_Sil",
        data: { "Id": id },
        success: function (response) {
            alert("Ürününüz Silindi");
            $("#tbl2").empty();
            post_func2();
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

function post_func2() {
    var arr = [];
    $.ajax({
        url: "/Sepet/Urunler",
        data: { "product-name": "deneem" },
        xhrFields: {
            withCredentials: false
        },
        success: function (response) {
            if (response == "") {
                alert("Sepetinizde Ürün yok");
                document.getElementById("sepetyazi").innerHTML = "Sepetinizde Ürününüz Yok";
                document.getElementById("toplam_fiyat").innerHTML = "";
                document.getElementById("siparisbtn").style.visibility = "hidden";
            } else {
                document.getElementById("tbl2").style.visibility = "visible";
                var table = document.getElementById("tbl2");
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
                    cell1.innerHTML = "<img height='100' width='100' src=" + response[i].urun_Fotograf + " >" + "&nbsp";
                    cell2.innerHTML = response[i].urun_Adi + "&nbsp";
                    cell3.innerHTML = response[i].urun_Fiyati + "&nbsp&nbspTL " + "&nbsp";
                    cell4.innerHTML = `<button type="button" class="btn btn-primary" onclick = "goLink('${response[i].urun_Linki}')">Git</button>` + "&nbsp";  
                    cell5.innerHTML = `<button type="button" class="btn btn-danger" onclick = "urun_sil('${response[i].id}')">Ürünü Sil</button>`;
                    toplam_fiyat = toplam_fiyat + response[i].urun_Fiyati

                }
                if (response == "") {
                    document.getElementById("toplam_fiyat").innerHTML = "YOK";
                 } else {
                    document.getElementById("toplam_fiyat").innerHTML = "Sepetinizdeki Ürünleri Fiyatı = " + toplam_fiyat + "TL";
}
                
            }

        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
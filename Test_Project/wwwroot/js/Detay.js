function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

function goLink(link) {
    //location.href = link;
    window.open(link)
}


function detay_yukle() {
    var arr = [];
    var toplam_fiyat = 0;
    $.ajax({
        url: "detay_siparis",
        data: { "id": getQueryVariable("id")},
        xhrFields: {
            withCredentials: false
        },
        success: function (response) {
            console.log(response);
            document.getElementById("detay_tablo").style.visibility = "visible";
            var table = document.getElementById("detay_tablo");
                var row = table.insertRow();
                var toplam_fiyat = 0;
                for (var i in response) {
                    arr.push(["<img height='100' width='100' src=" + response[i].resim + ">", response[i].urun, response[i].fiyat + " TL", "<a href=" + response[i].link + ">Git</a>"])
                    var row = table.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    var cell3 = row.insertCell();
                    var cell4 = row.insertCell();
                    cell1.innerHTML = "<img height='100' width='100' src=" + response[i].urun_Fotograf + " >" + "&nbsp";
                    cell2.innerHTML = response[i].urun_Adi + "&nbsp";
                    cell3.innerHTML = response[i].urun_Fiyati + "&nbsp&nbspTL " + "&nbsp";
                    cell4.innerHTML = `<button type="button" class="btn btn-primary" onclick = "goLink('${response[i].urun_Linki}')">Ürüne Git</button>` + "&nbsp";
                    toplam_fiyat = toplam_fiyat + response[i].urun_Fiyati
            }
            document.getElementById("fiyat").innerHTML = "Siparişinizdeki Ürünlerin Fiyatı = " + toplam_fiyat + " TL";


            

        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
function goLink(link) {
    location.href = "Siparisler/Detay?id=" + link;
    //window.open(link)
}


function siparis_yukle() {
    var arr = [];
    $.ajax({
        url: "siparisler/allsiparisler",
        xhrFields: {
            withCredentials: false
        },
        success: function (response) {
            document.getElementById("siparisler_tbl").style.visibility = "visible";
            var table = document.getElementById("siparisler_tbl");
            for (var i in response) {
                var res = response[i].tarih.split("T");
                var row = table.insertRow();
                var cell3 = row.insertCell();
                    var cell0 = row.insertCell();
                    var cell1 = row.insertCell();
                var cell2 = row.insertCell();
                cell3.innerHTML = i;
                    cell0.innerHTML = `<td>${res[0]}</td>`;
                    cell1.innerHTML = `<td>${response[i].toplam_Fiyat} TL</td>`;
                    cell2.innerHTML = `<center><td><button type="button" class="btn btn-primary"onclick = "goLink('${response[i].id}')">Sipariş Detayı</button></td></center>`;
                } 
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
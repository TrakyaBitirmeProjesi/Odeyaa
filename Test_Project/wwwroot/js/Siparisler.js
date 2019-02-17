function goLink(link) {
    location.href = "Siparisler/Detay?id=" + link;
    //window.open(link)
}


function post_func2() {
    var arr = [];
    $.ajax({
        url: "siparisler/allsiparisler",
        data: { "product-name": "d" },
        xhrFields: {
            withCredentials: false
        },
        success: function (response) {
                document.getElementById("tbl2").style.visibility = "visible";
                var table = document.getElementById("tbl2");
                var row = table.insertRow();
                for (var i in response) {
                    var row = table.insertRow();
                    var cell1 = row.insertCell();
                    var cell2 = row.insertCell();
                    var cell3 = row.insertCell();
                    var res = response[i].tarih.split("T");
                    cell1.innerHTML = `<td>${res[0]}</td>`;
                    cell2.innerHTML = `<td>${response[i].toplam_Fiyat} TL</td>`;
                    cell3.innerHTML = `<button type="button" class="btn btn-primary"onclick = "goLink('${response[i].id}')">Sipariş Detayı</button>`;
                }            
        },
        error: function (xhr) {
            document.getElementById("demo").innerHTML = "Error";
        }
    });
}
function dibujar() {
    pintadatos();
}

function pintadatos() {
    importXML();
    //plasmar(36.29115586,-5.27489367,punto,contenido);
}


// fopen importada

function importXML()
{
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      createTable(this);
    }
  };
  xmlhttp.open("GET", "datos/resultado.ltim", true);
  xmlhttp.send();
}



function createTable(xml)
{
    xmlDoc = xml.responseXML;
    
    var lat = xmlDoc.getElementsByTagName('lat');
    var idioma = xmlDoc.getElementsByTagName('idioma');
    var lon = xmlDoc.getElementsByTagName('lon');

    var ctx = document.getElementById('puntosporidioma');
    var width = ctx.width;
    var height = ctx.height;
    var contenido = ctx.getContext('2d');
    var fondo = new Image();
    fondo.src = 'images/utmbalears.png';
    var puntoes = new Image();
    puntoes.src = 'images/bollaes.png';
    var puntoca = new Image();
    puntoca.src = 'images/bollaca.png';
    var puntoen = new Image();
    puntoen.src = 'images/bollaen.png';
    var puntode = new Image();
    puntode.src = 'images/bollade.png';
    var leyenda = new Image();
    leyenda.src = 'images/leyenda-idiomas-por-gps.png';
    fondo.onload = function () {
        //*******************************************
        //*******************************************
        //****** mapa de puntos
        //*******************************************
        //*******************************************
        var px = width / 1153.0;   //porcentaje x
        var py = height / 696.0;   //porcentaje y
        contenido.drawImage(fondo, 0, 0, width, height);
        contenido.drawImage(leyenda, 980 * px, 512 * py, 137 * px, 148 * py);
        var col;
        var nes = 0;
        var nca = 0;
        var nen = 0;
        var nde = 0;
        for (i = 0; i < idioma.length; i++)
        {
            if (idioma[i].childNodes[0].nodeValue == "españa") {
                col = puntoes;
                nes++;
            } else if (idioma[i].childNodes[0].nodeValue == "catalunya") {
                col = puntoca;
                nca++;
            } else if (idioma[i].childNodes[0].nodeValue == "deutschland") {
                col = puntode;
                nde++;
            } else if (idioma[i].childNodes[0].nodeValue == "england") {
                col = puntoen;
                nen++;
            }
            if (idioma[i].childNodes[0].nodeValue != "undefined") {
                plasmar(lat[i].childNodes[0].nodeValue, lon[i].childNodes[0].nodeValue, col, contenido, px, py);
            }
        }
        //*******************************************
        //*******************************************
        //****** torta de porcentajes
        //*******************************************
        //*******************************************
        pintarTorta(nes, nca, nde, nen, contenido, px, py);
    }

    function plasmar(lat, lon, punto, contenido, px, py) {
        var canv = document.getElementById('nuestroCanvas');
        var y = ((40.173550 - lat) / 0.002361) * px;
        var x = ((lon - 1.000099) / 0.003075) * py;
        contenido.drawImage(punto, x, y, 12 * px, 11 * py);
    }

    function pintarTorta(nes, nca, nde, nen, contenido, px, py) {
        var total = nes + nca + nde + nen;
        var pes = (1.0 * nes) / total;  //porcentaje de español entre 0 - 1
        var ang = 0;
        var rad = 50;
        var cx = 880;
        var cy = 588;
        contenido.beginPath();
        contenido.arc(cx * px, cy * py, rad * px, ang, 2 * pes * Math.PI);
        contenido.strokeStyle = "#f54c4c";
        contenido.lineWidth = rad * px;
        contenido.stroke();
        ang = ang + (2 * pes * Math.PI);
        var pca = (1.0 * nca) / total;
        contenido.beginPath();
        contenido.arc(cx * px, cy * py, rad * px, ang, ang + (2 * pca * Math.PI));
        contenido.strokeStyle = "#f3f01f";
        contenido.lineWidth = rad * px;
        contenido.stroke();
        ang = ang + (2 * pca * Math.PI);
        var pen = (1.0 * nen) / total;
        contenido.beginPath();
        contenido.arc(cx * px, cy * py, rad * px, ang, ang + (2 * pen * Math.PI));
        contenido.strokeStyle = "#2f9ef4";
        contenido.lineWidth = rad * px;
        contenido.stroke();
        ang = ang + (2 * pen * Math.PI);
        var ped = (1.0 * nde) / total;
        contenido.beginPath();
        contenido.arc(cx * px, cy * py, rad * px, ang, ang + (2 * ped * Math.PI));
        contenido.strokeStyle = "#2ff434";
        contenido.lineWidth = rad * px;
        contenido.stroke();
    }
}


var nuvol_base_url = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=numpelisdepersona&par=";
var fitxa_base_url = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=unopornombre&par=";

//dos arrays mapejats (array key value no aconseguesc q funcioni)
var nuvol_actors = [];
var nuvol_pelis = [];

var nuvol_fitxa_res;

//pintar el nuvol de paraules
$(document).ready(function () {
    if (!$('#elMeuNuvol').tagcanvas({
        textColour: 'black',
        outlineThickness: 2,
        outlineColour: '#000000',
        maxSpeed: 0.1,
        depth: 0.5
    }, 'tags')) {
        $('#myCanvasContainer').hide();
    }
});

//al detectar un canvi al hash...
$(window).on('hashchange', function (e) {
    //agafam el valor hash i li llevam el hashtag
    actor = window.location.hash;
    actor = actor.substring(1, actor.length);
    nuvol_obten_fitxa(actor);
    if (!jaAfegit()) {
        $('#pie').empty();
        $('#espera_pie').empty();
        $('#espera_pie').append('<img src="espera.gif" height="300" />');
        //$('#fitxa').empty();
        $('#espera_fitxa').empty();
        $('#espera_fitxa').append('<img src="espera.gif" height="100" />');
        //afegim només l'actor pq no sabem el nombre de pelis encara
        nuvol_actors.push(actor);
        nuvol_llegirGrafica(actor);
    } else {
        nuvol_llegirGrafica(actor);
    }

});

//true si ja hem afegit aquell actor al pie
function jaAfegit() {
    for (var i = 0; i < nuvol_actors.length; i++) {
        if (actor === nuvol_actors[i]) {
            return true;
        }
    }
    return false;
}

function nuvol_llegirGrafica(actor, url) {
    //mirar si esta a la sessio
    result = sessionStorage.getItem(actor);
    if (result === null) {
        $.ajax({url: nuvol_base_url + actor,
            success: function (result) {
                //ficar a la sessio
                sessionStorage.setItem(actor, result);
                npelis = parseInt(result.substring(result.indexOf("[") + 1, result.indexOf("]")));
                nuvol_pelis.push(npelis);
                $('#fitxa').append('<p>Nombre de pelis: ' + npelis + '</p>');
                nuvol_pie();
            }});
    } else {
        npelis = parseInt(result.substring(result.indexOf("[") + 1, result.indexOf("]")));
        nuvol_pelis.push(npelis);
        $('#fitxa').append('<p>Nombre de pelis: ' + npelis + '</p>');
        nuvol_pie();
    }

}

function nuvol_pie() {
    $('#espera_pie').empty();
    variables = "[";
    for (i = 0; i < nuvol_actors.length; i++) {
        variables = variables + "{\"name\": \"" + nuvol_actors[i] + "\", \"y\": " + nuvol_pelis[i] + "},";
        //pot haver 2 espais al nom, els llevam
        variables = variables.replace("%20", " ");
        variables = variables.replace("%20", " ");
    }
    //llevar darrera coma
    variables = variables.substring(0, variables.length - 1) + "]";

    Highcharts.chart('pie', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            borderRadius: 10,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
                name: 'Pelis per actor',
                colorByPoint: true,
                data: JSON.parse(variables)
            }]
    });
}

function nuvol_obten_fitxa() {
    result = sessionStorage.getItem("fitxa:" + actor);
    if (result === null) {
        $.ajax({url: fitxa_base_url + actor,
            success: function (result) {
                sessionStorage.setItem("fitxa:" + actor, result);
                nuvol_fitxa_res = result;
                nuvol_pinta_fitxa(actor);
            }});
    } else {
        nuvol_fitxa_res = result;
        nuvol_pinta_fitxa(actor);
    }
}

function nuvol_pinta_fitxa() {
    res = nuvol_fitxa_res.substring(27, nuvol_fitxa_res.indexOf("]"));
    nom = res.substring(0, res.indexOf("'"));
    naix = res.substring(res.indexOf(",") + 1, res.indexOf(",") + 5);
    mor = res.substring(res.indexOf(",") + 6, res.length);
    $('#espera_fitxa').empty();
    $('#fitxa').empty();
    $('#fitxa').append('<p>Nom: ' + nom + '</p><p>Naixement: ' +
            naix + '</p><p>Mort: ' + mor + '</p>');
}
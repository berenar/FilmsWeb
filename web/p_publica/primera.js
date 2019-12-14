var acum;

//resultats de cada formatget
var p = [];

var base_url = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=";
var edats = ["0-30", "31-50", "51-70" ,"71-150"];

$(document).ready(function () {
    acum = 0;
    pintarEspera();
    llegirGrafica("p1_01", base_url + edats[0], 0);
    llegirGrafica("p2_01", base_url + edats[1], 1);
    llegirGrafica("p3_01", base_url + edats[2], 2);
    llegirGrafica("p4_01", base_url + edats[3], 3);
});

function pintarEspera() {
    $('#espera').append('<img src="p_publica/espera.gif"/>');
}

function llegirGrafica(ses_item, url, indx) {
    result = sessionStorage.getItem(ses_item);
    if (result == null) {
        $.ajax({url: url,
            success: function (result) { 
               sessionStorage.setItem(ses_item, result);
                p[indx] = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p[indx] = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function pintarGrafica() {
    //esperar a que acabin totes les funcions
    //tantes funcions com rangs d'edat
    if (acum == edats.length) {
        $('#espera').empty();
        pie();
    }
}

function pie() {
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Edats dels actors per conjunts'
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
                name: 'Edats',
                colorByPoint: true,
                data: [{
                        name: 'Menors de 30',
                        y: p[0],
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Entre 30 i 50',
                        y: p[1]
                    }, {
                        name: 'Entre 50 i 70',
                        y: p[2]
                    }, {
                        name: 'Majors de 70',
                        y: p[3]
                    }]
            }]
    });
}
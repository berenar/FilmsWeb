var pie_acum;

//resultats de cada formatget
var pie_p = [];

var pie_base_url = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=";
var pie_rangs = ["0-30", "31-50", "51-70" ,"71-150"];

$(document).ready(function () {
    pie_acum = 0;
    pintarEspera();
    llegirGrafica("p1_01", pie_base_url + pie_rangs[0], 0);
    llegirGrafica("p2_01", pie_base_url + pie_rangs[1], 1);
    llegirGrafica("p3_01", pie_base_url + pie_rangs[2], 2);
    llegirGrafica("p4_01", pie_base_url + pie_rangs[3], 3);
});

function pintarEspera() {
    $('#espera_pie').append('<img src="p_publica/espera.gif" height="300" />');
}

function llegirGrafica(ses_item, url, indx) {
    result = sessionStorage.getItem(ses_item);
    if (result === null) {
        $.ajax({url: url,
            success: function (result) { 
               sessionStorage.setItem(ses_item, result);
                pie_p[indx] = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                pie_acum++;
                pintarGrafica();
            }});
    } else {
        pie_p[indx] = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        pie_acum++;
        pintarGrafica();
    }
}

function pintarGrafica() {
    //esperar a que acabin totes les funcions
    //tantes funcions com rangs d'edat
    if (pie_acum === pie_rangs.length) {
        $('#espera_pie').empty();
        pie();
    }
}

function pie() {
    Highcharts.chart('pie', {
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
                        y: pie_p[0],
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Entre 30 i 50',
                        y: pie_p[1]
                    }, {
                        name: 'Entre 50 i 70',
                        y: pie_p[2]
                    }, {
                        name: 'Majors de 70',
                        y: pie_p[3]
                    }]
            }]
    });
}
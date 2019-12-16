//resultats de cada formatget
var nuvol_p = [];

var nuvol_base_url = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=";


function nuvol_pintaPersona() {
    nuvol_llegirGrafica("p1_01", nuvol_base_url + nuvol_rangs[0], 0);
}


function nuvol_llegirGrafica(ses_item, url, indx) {
    result = sessionStorage.getItem(ses_item);
    if (result === null) {
        $.ajax({url: url,
            success: function (result) {
                sessionStorage.setItem(ses_item, result);
                nuvol_p[indx] = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                nuvol_pintarGrafica();
            }});
    } else {
        nuvol_p[indx] = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        nuvol_pintarGrafica();
    }

}

function nuvol_pintarGrafica() {
    //esperar a que acabin totes les funcions
    //tantes funcions com rangs d'edat

    nuvol_pie();

}

function nuvol_pie() {
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
            nuvol: {
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
                        y: nuvol_p[0],
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Entre 30 i 50',
                        y: nuvol_p[1]
                    }, {
                        name: 'Entre 50 i 70',
                        y: nuvol_p[2]
                    }, {
                        name: 'Majors de 70',
                        y: nuvol_p[3]
                    }]
            }]
    });
}
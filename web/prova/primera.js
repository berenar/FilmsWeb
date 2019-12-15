var acum;
var p1;
var p2;
var p3;

$(document).ready(function () {
    acum = 0;
    pintarEspera();
    llegirGrafica1();
    llegirGrafica2();
    llegirGrafica3();
});

function pintarEspera() {
    $('#espera').append('<img src="espera.gif"/>');
}

function llegirGrafica1() {
    result = sessionStorage.getItem("p1_01");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=0-29",
            success: function (result) {
                sessionStorage.setItem("p1_01", result);
                p1 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p1 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function llegirGrafica2() {
    result = sessionStorage.getItem("p2_01");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=30-60",
            success: function (result) {
                sessionStorage.setItem("p2_01", result);
                p2 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p2 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function llegirGrafica3() {
    result = sessionStorage.getItem("p3_01");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=61-200",
            success: function (result) {
                sessionStorage.setItem("p3_01", result);
                p3 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p3 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function pintarGrafica() {
    if (acum == 3) {
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
            text: 'Edad de las personas por conjuntos'
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
                name: 'Edades',
                colorByPoint: true,
                data: [{
                        name: '< 30',
                        y: p1,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'entre 30 y 60',
                        y: p2
                    }, {
                        name: '> 60',
                        y: p3
                    }]
            }]
    });
}
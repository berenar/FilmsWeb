var acum;
var p1;
var p2;
var p3;
var p4;
var p5;
var url_1 = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=0-19";
var url_2 = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=20-39";
var url_3 = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=40-59";
var url_4 = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=60-79";
var url_5 = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporfranja&par=80-150";


$(document).ready(function () {
    acum = 0;
    pintarEspera();
//    llegirGrafica1();
//    llegirGrafica2();
//    llegirGrafica3();
    llegirGraficaN("p1_01", url_1, p1);
    llegirGraficaN("p2_01", url_2, p2);
    llegirGraficaN("p3_01", url_3, p3);
//    llegirGraficaN("p4_01", url_4, p4);
//    llegirGraficaN("p5_01", url_5, p5);
});

function pintarEspera() {
    $('#espera').append('<img src="p_publica/espera.gif"/>');
}

function llegirGrafica1() {
    //mirar si les dades estan al session storage
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

function llegirGraficaN(ses_item, url_n, p_n) {
    //mirar si les dades estan al session storage
    result = sessionStorage.getItem(ses_item);
    if (result == null) {
        $.ajax({url: url_n,
            success: function (result) {
                sessionStorage.setItem(ses_item, result);
                p_n = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p_n = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
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
            text: 'Edat de les persones per conjunts.'
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
                        name: 'Menys de 20',
                        y: p1,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Entre 20 i 40',
                        y: p2
                    }, {
                        name: 'Entre 40 i 60',
                        y: p3
                    }, {
                        name: 'Entre 60 i 80',
                        y: p4
                    }, {
                        name: 'Més de 80',
                        y: p5
                    }]
            }]
    });
}
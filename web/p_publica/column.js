var column_acum;

//resultats de cada formatget
var column_p = [];

var column_base_url = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporedad&par=";
var column_rangs = [];

function  column_calcula() {
    column_acum = 0;

    column_rangs[0] = document.getElementById("edat1").value;
    column_rangs[1] = document.getElementById("edat2").value;
    column_rangs[2] = document.getElementById("edat3").value;

    column_pintarEspera();

    column_llegirGrafica(column_base_url + column_rangs[0], 0);
    column_llegirGrafica(column_base_url + column_rangs[1], 1);
    column_llegirGrafica(column_base_url + column_rangs[2], 2);
}

function  column_pintarEspera() {
    $('#column').empty(); //borrar grafic anterior si existeix
    $('#espera_column').empty();
    $('#espera_column').append('<img src="imatges/espera.gif" height="300" />');
}

function  column_llegirGrafica(url, indx) {
    //no emmagatzemam a la sessio pq la probabilitat es massa baixa 
    //i la cridada es rapida
    $.ajax({url: url,
        success: function (result) {
            column_p[indx] = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
            console.log(column_p[indx]);
            column_acum++;
            column_pintarGrafica();
        }});
}

function  column_pintarGrafica() {
    //esperar a que acabin totes les funcions
    //tantes funcions com rangs d'edat
    if (column_acum == column_rangs.length) {
        $('#espera_column').empty();
        column_column();
    }
}

function  column_column() {
    Highcharts.chart('column', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true,
            borderRadius: 10,
            type: 'column'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
        },
        series: [{
                name: 'Edats',
                colorByPoint: true,
                data: [{
                        name: column_rangs[0],
                        y: column_p[0],
                        sliced: true,
                        selected: true
                    }, {
                        name: column_rangs[1],
                        y: column_p[1]
                    }, {
                        name: column_rangs[2],
                        y: column_p[2]
                    }]
            }]
    });
}
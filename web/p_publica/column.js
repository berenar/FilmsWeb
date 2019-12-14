var column_acum;

//resultats de cada formatget
var column_p = [];

var column_base_url = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=cantidadporedad&par=";
var column_rangs = [];

function calcula() {
    column_acum = 0;

    column_rangs[0] = document.getElementById("edat1").value;
    column_rangs[1] = document.getElementById("edat2").value;
    column_rangs[2] = document.getElementById("edat3").value;

    console.log("edat1: " + column_rangs[0]);
    console.log("edat2: " + column_rangs[1]);
    console.log("edat3: " + column_rangs[2]);

    pintarEspera();

    console.log(column_base_url + column_rangs[0]);
    console.log(column_base_url + column_rangs[1]);
    console.log(column_base_url + column_rangs[2]);

    llegirGrafica("p1_02", column_base_url + column_rangs[0], 0);
    llegirGrafica("p2_02", column_base_url + column_rangs[1], 1);
    llegirGrafica("p3_02", column_base_url + column_rangs[2], 2);
}

function pintarEspera() {
    $('#column').empty(); //borrar grafic anterior si existeix
    $('#espera_column').append('<img src="p_publica/espera.gif" height="300" />');
}

function llegirGrafica(ses_item, url, indx) {
    //no emmagatzemam a la sessio pq la probabilitat es massa baixa 
    //i la cridada es rapida
    $.ajax({url: url,
        success: function (result) {
            column_p[indx] = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
            console.log(column_p[indx]);
            column_acum++;
            pintarGrafica();
        }});
}

function pintarGrafica() {
    //esperar a que acabin totes les funcions
    //tantes funcions com rangs d'edat
    if (column_acum == column_rangs.length) {
        $('#espera_column').empty();
        column();
    }
}

function column() {
    Highcharts.chart('column', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true,
            type: 'column'
        },
        title: {
            text: 'Pelis per edat'
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
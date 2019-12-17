
var nuvol_base_url = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=numpelisdepersona&par=";

//dos arrays mapejats (array key value no aconseguesc q funcioni)
var nuvol_actors = [];
var nuvol_pelis = [];

$(window).on('hashchange', function (e) {
    console.log(nuvol_actors);
    //agafam el valor hash i li llevam el hashtag
    actor = window.location.hash;
    actor = actor.substring(1, actor.length);
    console.log(actor);
    if (!jaAfegit()) {
        //afegim només l'actor pq no sabem el nombre de pelis encara
        nuvol_actors.push(actor);
        nuvol_llegirGrafica(actor, nuvol_base_url + actor);
    }
});

function jaAfegit() {
    for (var i = 0; i < nuvol_actors.length; i++) {
        if (actor === nuvol_actors[i]) {
            return true;
        }
    }
    return false;
}

function nuvol_llegirGrafica(actor, url) {
    result = sessionStorage.getItem(actor);
    if (result === null) {
        $.ajax({url: url,
            success: function (result) {
                sessionStorage.setItem(actor, result);
                nuvol_pelis.push(parseInt(result.substring(result.indexOf("[") + 1, result.indexOf("]"))));
                nuvol_pie();
            }});
    } else {
        nuvol_pelis.push(parseInt(result.substring(result.indexOf("[") + 1, result.indexOf("]"))));
        nuvol_pie();
    }

}

function nuvol_pie() {
    $('#espera_pie').empty();
    $('#pie').empty();
    variables = "[";
    for (i = 0; i < nuvol_actors.length; i++) {
        variables = variables + "{\"name\": \"" + nuvol_actors[i] + "\", \"y\": " + nuvol_pelis[i] + "},";
    }
    variables = variables.substring(0, variables.length - 1) + "]";
    variables = variables.replace('%20', ' ');

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
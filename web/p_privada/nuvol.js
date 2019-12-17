
var nuvol_base_url = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=numpelisdepersona&par=";
//clau: nom de l'actor, valor: num de pelis
var nuvol_actors = [];
$(window).on('hashchange', function (e) {
    console.log(nuvol_actors);
    //agafam el valor hash i li llevam el hashtag
    actor = window.location.hash;
    actor = actor.substring(1, actor.length);
    console.log(actor);
    //afegim l'actor pero no sabem el nombre de pelis encara
    nuvol_actors[actor] = "?";
    nuvol_llegirGrafica(actor, nuvol_base_url + actor);
});
function nuvol_llegirGrafica(actor, url) {
    result = sessionStorage.getItem(actor);
    if (result === null) {
        $.ajax({url: url,
            success: function (result) {
                sessionStorage.setItem(actor, result);
                nuvol_actors[actor] = parseInt(result.substring(result.indexOf("[") + 1, result.indexOf("]")));
                nuvol_pie();
            }});
    } else {
        nuvol_actors[actor] = parseInt(result.substring(result.indexOf("[") + 1, result.indexOf("]")));
        nuvol_pie();
    }

}


function nuvol_pie() {
    var obj = new Object();
    obj.chart = {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        borderRadius: 10,
        type: 'pie'
    };
    obj.title = '';
    obj.tooltip = {pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'};
    obj.plotOptions = {
        nuvol: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    };
    obj.series = [];
    for (var i = 0; i < nuvol_actorns.length; i++) {
        obj.series.push({
            name: i,
            y: nuvol_actorns[i],
        })
    }

   var jsonPie = JSON.stringify(obj);
    console.log(jsonPie);
    $('#pie').highcharts(jsonPie);
}
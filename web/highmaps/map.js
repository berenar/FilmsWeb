var map_lat = [0.0, 0.0, 0.0];
var map_lon = [0.0, 0.0, 0.0];
var map_noms = ["", "", ""];
var map_acum = 0;
var map_numpob;
var map_llocs = ["Barcelona", "Madrid", "Huesca", "Villanubla", "Marratxi",
    "Algaida", "Badajoz"];

$(document).ready(function () {
    map_crea();
});

function map_crea() {
    n = 0;
    map_pintarEspera();
    for (var i = 0; i < map_llocs.length; i++) {
        if ($('#check' + i).prop('checked')) {
            map_llegirInfo(map_llocs[i], n++);
        }
    }
    map_numpob = n;
}

function map_pintarEspera() {
    $('#espera_map').append('<img src="p_publica/espera.gif"/>');
}


function map_llegirInfo(lloc, ind) {
    tempo = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=gpspoblacion&par=" + lloc;
    $.ajax({url: tempo,
        success: function (result) {
            map_lat[ind] = parseFloat(result.substring(result.indexOf("lat':") + 5, result.indexOf("},{")));
            map_lon[ind] = parseFloat(result.substring(result.indexOf("lon':") + 5, result.indexOf("}]}")));
            map_noms[ind] = lloc;
            map_acum++;
            map_pintarGrafica();
        }});
}

function map_pintarGrafica() {
    $('#espera_map').empty();
    if (map_acum == map_numpob) {
        variables = "[";
        for (i = 0; i < map_acum; i++) {
            variables = variables + "{\"name\": \"" + map_noms[i] + "\", \"lat\": " + map_lat[i] + ", \"lon\": " + map_lon[i] + "},";
        }
        variables = variables.substring(0, variables.length - 1) + "]";
        map_acum = 0;
        Highcharts.mapChart('map', {
            chart: {
                map: 'countries/es/es-all'
            },
            title: {
                text: 'Highmaps basic lat/lon demo'
            },
            mapNavigation: {
                enabled: true
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}'
            },
            series: [{
                    // Use the gb-all map with no data as a basemap
                    name: 'Basemap',
                    borderColor: '#A0A0A0',
                    nullColor: 'rgba(200, 200, 200, 0.3)',
                    showInLegend: false
                }, {
                    name: 'Separators',
                    type: 'mapline',
                    nullColor: '#707070',
                    showInLegend: false,
                    enableMouseTracking: false
                }, {
                    // Specify points using lat/lon
                    type: 'mappoint',
                    name: 'Cities',
                    color: Highcharts.getOptions().colors[1],
                    data: JSON.parse(variables)
                }]
        });
    }
}
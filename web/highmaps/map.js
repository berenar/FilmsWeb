var lat = [0.0, 0.0, 0.0];
var lon = [0.0, 0.0, 0.0];
var noms = ["", "", ""];
var acum = 0;
var numpob;

$(document).ready(function () {
    n = 0;
    llegirInfo("Estellencs", n++);
    llegirInfo("Fuenteovejuna", n++);
    llegirInfo("Valdemoro", n++);
    llegirInfo("Tordesillas", n++);
    numpob = n;
});

function llegirInfo(lloc, ind) {
    tempo = "http://localhost:8080/PeliculesWeb/bdpeliculas?op=gpspoblacion&par=" + lloc;
    $.ajax({url: tempo,
        success: function (result) {
            lat[ind] = parseFloat(result.substring(result.indexOf("lat':") + 5, result.indexOf("},{")));
            lon[ind] = parseFloat(result.substring(result.indexOf("lon':") + 5, result.indexOf("}]}")));
            noms[ind] = lloc;
            acum++;
            pintarGrafica();
        }});
}

function pintarGrafica() {
    if (acum == numpob) {
        variables = "[";
        for (i = 0; i < acum; i++) {
            variables = variables + "{\"name\": \"" + noms[i] + "\", \"lat\": " + lat[i] + ", \"lon\": " + lon[i] + "},";
        }
        variables = variables.substring(0, variables.length - 1) + "]";
        acum = 0;
        Highcharts.mapChart('spain', {
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
<%-- 
    Document   : prova
    Created on : 15-dic-2019, 16:11:27
    Author     : Bernat
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>FilsWeb públic</title>
        <link rel="shortcut icon" href="<%= request.getContextPath()%>/imatges/favicon.ico"/>

        <!--jquery-->
        <script src="<%= request.getContextPath()%>/highcharts/jquery-3.3.1.min.js" type="text/javascript"></script>

        <!--mapes-->
        <script src="<%= request.getContextPath()%>/highmaps/highmaps.js"></script>
        <script src="<%= request.getContextPath()%>/highmaps/exporting.js"></script>
        <script src="<%= request.getContextPath()%>/highmaps/offline-exporting.js"></script>
        <script src="<%= request.getContextPath()%>/highmaps/es-all.js"></script>
        <script src="<%= request.getContextPath()%>/highmaps/proj4.js"></script>
        <script src="<%= request.getContextPath()%>/highmaps/map.js"></script>

        <!--grafics-->
        <script src="<%= request.getContextPath()%>/p_publica/pie.js" type="text/javascript"></script>
        <script src="<%= request.getContextPath()%>/p_publica/column.js" type="text/javascript"></script>

        <!--estils-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="<%= request.getContextPath()%>/p_comuna/general.css">
    </head>
    <body>
        <%
            String lloc = request.getServletContext().getContextPath();
            int num = lloc.length() - lloc.replaceAll("/", "").length();
            lloc = "";
            for (int i = 0; i < num - 1; i++) {
                lloc = lloc + "/..";
            }
            lloc = lloc + "/p_comuna/capcalera.jsp";
        %>
        <jsp:include page="<%= lloc%>"/>
        <div class="row justify-content-md-center" >
            <div class="col-3" align="center">
                <h1> Part pública</h1>
            </div>
        </div>
        <!--        <H1>
                    &nbsp;&nbsp;&nbsp;&nbsp;<a href="graficocanvas/grafico.jsp">
                        Ejemplo de gràfico en canvas de JavaScript </a>
                    <br>
                </H1>-->
        <div class="row justify-content-md-center">
            <div class="col-5">
                <h4>Edats dels actors per conjunts d'edat</h4>
                <div id="espera_pie"></div>
                <div id="pie">
                </div>
            </div>
            <div class="col-2">
                <div>
                    <h4>Comparar el nombre de pelis de 3 edats diferents</h4>
                    <div style="text-align: center">
                        <br>
                        <input id="edat1" type="text" name="foo" value="25" size="2"/>
                        <br>
                        <input id="edat2" type="text" name="foo" value="45" size="2"/>
                        <br>
                        <input id="edat3" type="text" name="foo" value="65" size="2"/>
                        <br>
                        <br>
                        <button class="button" 
                                onclick="column_calcula()"> Obtenir gràfic
                        </button>
                        <br><br><img src="imatges/right.png" width="50px">
                    </div>
                </div>
            </div>
            <div class="col-5">
                <h4>Pelis per edat</h4>
                <div id="espera_column"></div>
                <div id="column">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <h4>Seleccionador de països</h4>
                <br>
                <div>
                    <div class="form-check">
                        <label class="form-check-label" for="check1">
                            <input type="checkbox" class="form-check-input" id="check0" checked>Barcelona
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="check2">
                            <input type="checkbox" class="form-check-input" id="check1" checked>Madrid
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="check2">
                            <input type="checkbox" class="form-check-input" id="check2" checked >Huesca
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="check2">
                            <input type="checkbox" class="form-check-input" id="check3" checked>Villanubla
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="check2">
                            <input type="checkbox" class="form-check-input" id="check4" checked>Marratxí
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="check2">
                            <input type="checkbox" class="form-check-input" id="check5" checked>Algaida
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="check2">
                            <input type="checkbox" class="form-check-input" id="check6" checked >Badajoz
                        </label>
                    </div>
                    <br>
                    <button class="button" 
                            onclick="map_crea()"> Actualitza mapa
                    </button>
                    <br><br><img src="imatges/right.png" width="50px">
                </div>
            </div>
            <div class="col-8">
                <h4>Mapa interactiu</h4>
                <div id="espera_map"></div>
                <div id="map">
                </div>
            </div>
        </div>
    </div>

</body>
</html>


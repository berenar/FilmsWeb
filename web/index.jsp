<%-- 
    Document   : index
    Created on : 06-nov-2019, 15:18:30
    Author     : dsst
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>FilsWeb públic</title>
        <link rel="shortcut icon" href="favicon.ico"/>
        <script src="highcharts/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="highcharts/highcharts.js"></script>
        <script src="highcharts/exporting.js"></script>
        <script src="highcharts/export-data.js"></script>
        <script src="p_publica/pie.js" type="text/javascript"></script>
        <script src="p_publica/column.js" type="text/javascript"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="p_comuna/general.css">
    </head>
    <body>
        <%
            String lloc = request.getServletContext().getContextPath();
            int num = lloc.length() - lloc.replaceAll("/", "").length();
            lloc = "";
            for (int i = 0; i < num - 1; i++) {
                lloc = lloc + "/..";
            }
            lloc = lloc + "p_comuna/capcalera.jsp";
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
                <div id="pie" style="min-width: 310px; height: 400px; max-width: 
                     600px; margin: 0 auto">
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
                <div id="espera_column"></div>
                <div id="column" style="min-width: 310px; height: 400px; max-width: 
                     600px; margin: 0 auto">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <h4>Seleccionador de països</h4>
            </div>
            <div class="col-8">
                <h4>Mapa mundi</h4>
            </div>
        </div>

    </body>
</html>

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
        <script src="p_publica/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="p_publica/highcharts.js"></script>
        <script src="p_publica/exporting.js"></script>
        <script src="p_publica/export-data.js"></script>
        <script src="p_publica/primera.js" type="text/javascript"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
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
        <div><h1> Part pública</h1> </div>
        <H1>
            &nbsp;&nbsp;&nbsp;&nbsp;<a href="graficocanvas/grafico.jsp">
                Ejemplo de gràfico en canvas de JavaScript </a>
            <br>
        </H1>
        <div class="row">
            <div class="col-6">
                <div id="espera"></div>
                <div id="container" style="min-width: 310px; height: 400px; max-width: 
                     600px; margin: 0 auto">
                </div>
            </div>
            <div class="col-6">
                <h1>grafic de barres</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <h1>seleccionador de paisos</h1>
            </div>
            <div class="col-8">
                <h1>mapa mundi</h1>
            </div>
        </div>

    </body>
</html>

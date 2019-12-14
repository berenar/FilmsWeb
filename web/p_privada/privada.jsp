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
        <title>FilsWeb privat</title>
        <link rel="shortcut icon" href="<%= request.getContextPath()%>/favicon.ico"/>
        <script src="<%= request.getContextPath()%>/highcharts/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="<%= request.getContextPath()%>/highcharts/highcharts.js"></script>
        <script src="<%= request.getContextPath()%>/highcharts/exporting.js"></script>
        <script src="<%= request.getContextPath()%>/highcharts/export-data.js"></script>
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
                <h1> Part privada</h1>
            </div>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-5">
                <h4>Núvol de persones</h4>
            </div>
            <div class="col-5">
                <h4>Fitxa</h4>
            </div>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-8 ">
                <h4>Nombre de pelis de les persones consultades</h4>
            </div>
        </div>

    </body>
</html>

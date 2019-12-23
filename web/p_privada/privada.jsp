<%-- 
    Document   : index
    Created on : 06-nov-2019, 15:18:30
    Author     : dsst
--%>

<%@page import="java.util.Enumeration"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>FilsWeb privat</title>
        <script src="<%= request.getContextPath()%>/highcharts/jquery-3.3.1.min.js" type="text/javascript"></script>
        <script src="<%= request.getContextPath()%>/highcharts/highcharts.js"></script>
        <script src="<%= request.getContextPath()%>/highcharts/exporting.js"></script>
        <script src="<%= request.getContextPath()%>/highcharts/export-data.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="<%= request.getContextPath()%>/p_comuna/general.css">
        <script src="<%= request.getContextPath()%>/nuvol/jquery.tagcanvas.min.js" type="text/javascript"></script>
        <script src="<%= request.getContextPath()%>/p_privada/nuvol.js" type="text/javascript"></script>
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
            <div class="col-5" style="background: url('../imatges/clouds.jpg')">
                <h4>Núvol de persones</h4>

                <div id="myCanvasContainer">
                    <canvas id="elMeuNuvol"></canvas>
                </div>
                <div id="tags">
                    <ul>
                        <li><a href="#Kirk Douglas">Kirk Douglas</a></li>
                        <li><a href="#Anthony Edwards">Anthony Edwards</a></li>
                        <li><a href="#Melanie Griffith">Melanie Griffith</a></li>
                        <li><a href="#Anthoney Cameron Eden">Anthoney Cameron Eden</a></li>
                        <li><a href="#Jerry Goldsmith">Jerry Goldsmith</a></li>
                        <li><a href="#Joan Fontaine">Joan Fontaine</a></li>
                        <li><a href="#Diane Lane">Diane Lane</a></li>
                        <li><a href="#Gary Oldman">Gary Oldman</a></li>
                        <li><a href="#Ryan Phillippe">Ryan Phillippe</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-5">
                <h4>Fitxa</h4>
                <div id="espera_fitxa"></div>
                <div id="fitxa">
                </div>

            </div>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-8 ">
                <h4>Nombre de pelis de les persones consultades</h4>
                <div id="espera_pie"></div>
                <div id="pie"></div>
            </div>


    </body>
</html>

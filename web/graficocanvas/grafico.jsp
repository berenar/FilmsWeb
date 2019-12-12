<%-- 
    Document   : grafico
    Created on : 06-nov-2019, 16:45:15
    Author     : dsst
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Dibujo con Canvas por Untitled.es</title>
        <script type="text/javascript" charset="utf-8" src="puntosporidioma.js">
        </script>
    </head>
    <body onload="dibujar()">
        <%
            String lloc = request.getServletContext().getContextPath();
            int num = lloc.length() - lloc.replaceAll("/", "").length();
            lloc = "";
            for (int i = 0; i < num - 1; i++) {
                lloc = lloc + "/..";
            }
            lloc = lloc + "/capcalera.jsp";
        %>
        <jsp:include page="<%= lloc%>"/>   

        <canvas id="puntosporidioma" style="margin-left:10%" width="870" height="522"></canvas>  
    </body>
</html>

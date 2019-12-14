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
        <title>Portal de películas</title>
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
            lloc = lloc + "capcalera.jsp";
        %>
        <jsp:include page="<%= lloc%>"/>   
        <br>

        <div class="row justify-content-md-center" >
            <div class="col-4" align="center">
                <h1>Informació</h1>
                Pràctica de ADIIU <br>
                    Curs: 2019-2020<br>
                    Autors: Bernat Pericàs Serra, Francisco López Martínez<br>
            </div>
        </div>
    </body>
</html>

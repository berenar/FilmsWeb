<%-- 
    Document   : privada
    Created on : 11-dic-2019, 20:41:25
    Author     : Bernat
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
<%
            String lloc = request.getServletContext().getContextPath();
            int num = lloc.length() - lloc.replaceAll("/", "").length();
            lloc = "";
            for (int i = 0; i < num - 1; i++) {
                lloc = lloc + "/..";
            }
            lloc = lloc + "../p_comuna/capcalera.jsp";
        %>
        <jsp:include page="<%= lloc%>"/>   
        <h1>Part privada</h1>

        <%= session.getAttribute("acces")%>

    </body>
</html>

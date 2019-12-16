<%-- 
    Document   : capcalera
    Created on : 06-nov-2019, 15:29:53
    Author     : dsst
--%>

<%@page import="java.util.Enumeration"%>
<%@page import="java.util.Date"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="<%= request.getContextPath()%>/p_comuna/general.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

    </head>
    <body>
        <div class="header">
            <a href="<%= request.getContextPath()%>" class="logo">
                <img alt="Company Logo" src="<%= request.getContextPath()%>/imatges/logo.jpeg" 
                     width="40%" >
            </a>
            <div class="header-right">
                <a href="<%= request.getContextPath()%>">Principal</a>
                <a href="<%= request.getContextPath()%>/p_comuna/contact.jsp">Contacte</a>
                <a href="<%= request.getContextPath()%>/p_comuna/about.jsp">Informació</a>

                <%
                    boolean ac = false;
                    if (session != null && session.getAttribute("acces") != null) {
                        ac = (Boolean) session.getAttribute("acces");
                        //true si hi ha la sessio iniciada, false si no
                    }

                    if (!ac) {
                %>
                <a class="active" href="<%= request.getContextPath()%>/acces/login.jsp">Login</a>
                <%
                } else {%>
                <a href="<%= request.getContextPath()%>/usuari.jsp"><%= session.getAttribute("user")%></a>
                <a class="active" href="<%= request.getContextPath()%>/acces/tanca.jsp">Tanca sessió</a>
                <% }%>
            </div>
        </div>
    </body>
</html>

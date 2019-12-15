<%-- 
    Document   : porta
    Created on : 11-dic-2019, 18:55:55
    Author     : Bernat
--%>

<%@page import="java.io.InputStreamReader"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.net.URLConnection"%>
<%@page import="java.net.URL"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="acces.entradaUsuari" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            //dades que l'usuari ha entrat al formulari
            String user = request.getParameter("usu");
            String passwd = request.getParameter("pas");
            entradaUsuari eu = new entradaUsuari();
            //password desencriptat de la BD
            String ppp = eu.accesUsuari(user);
            //mirar si son buides
            if ((user == null) || (passwd == null) || (ppp == null)) {
                response.sendRedirect("noacces.html");
            } else if (passwd.contentEquals(ppp)) {
                //posar variable a la sessio
                session.setAttribute("acces", new Boolean(true));
                session.setAttribute("user", user);
                //accedir-hi
                response.sendRedirect("acces.html");
            } else {
                response.sendRedirect("noacces.html");
            }
        %>


    </body>
</html>

<%-- 
    Document   : porta
    Created on : 11-dic-2019, 18:55:55
    Author     : Bernat
--%>

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
            entradaUsuari ppu = new entradaUsuari();
            String user = request.getParameter("usu");
            String passwd = request.getParameter("pas");
            if ((user == null) || (passwd == null)) {
                response.sendRedirect("acces/noacces.html");
            } else if (ppu.accesUsuari(user, passwd) < 12) {
                response.sendRedirect("acces/nonivell.html");
            } else {
                //variable a la sessio
                session.setAttribute("acces", new Boolean(true));
                session.setAttribute("user", user);
                System.out.println(user + passwd);
                response.sendRedirect("acces/acces.html");
            }
        %>
        <div><h1> PLANA PRIVADA </h1> </div>
    </body>
</html>

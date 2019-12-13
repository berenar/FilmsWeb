<%-- 
    Document   : tanca
    Created on : 12-dic-2019, 0:11:10
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
            //session.invalidate();
            session.setAttribute("acces", false);
            response.sendRedirect(request.getContextPath()+"/index.jsp");
            %>
    </body>
</html>

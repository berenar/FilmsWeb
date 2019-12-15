<%-- 
    Document   : login
    Created on : 13-dic-2019, 23:22:56
    Author     : Bernat
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="<%= request.getContextPath()%>/p_comuna/general.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    </head>
    <body>
        <br><br><br><br>
        <div class="row justify-content-md-center" >
            <div class="col-4" align="center">
                <form action="porta.jsp" method="post">
                    <h4>Login per accedir a la part privada
                    </h4>
                    Usuari:<br>
                    <input type="text" name="usu" value="">
                    <br>
                    Contrasenya:<br>
                    <input type="text" name="pas" value="">
                    <br><br>
                    <input class="button" type="submit" value="Submit">
                </form>
            </div>
        </div>

    </body>
</html>
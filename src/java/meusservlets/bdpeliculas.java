/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package meusservlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import perbd.DBActionsNameBasics;
import perbd.DBActionsPeliculas;
import perbd.DBActionsPersonaPeli;
import perbd.DBActionsPoblaciones;
import perbd.DBActionsRatingPelis;
import perbd.DBActionsUsers;

/**
 *
 * @author dsst
 */
@WebServlet(name = "bdpeliculas", urlPatterns = {"/bdpeliculas"})
public class bdpeliculas extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String res = gestionPeticion(request);
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println(res);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    private String gestionPeticion(HttpServletRequest request) {
        String res = "";
        String operacion = request.getParameter("op");
        String par = request.getParameter("par");
        if (operacion.contentEquals("todosporedad")) {
            DBActionsNameBasics dbanb = new DBActionsNameBasics();
            res = dbanb.getTodosPorEdad(par);
        } else if (operacion.contentEquals("unopornombre")) {
            DBActionsNameBasics dbanb = new DBActionsNameBasics();
            res = dbanb.getUnoPorNombre(par);
        } else if (operacion.contentEquals("cantidadporedad")) {
            DBActionsNameBasics dbanb = new DBActionsNameBasics();
            res = dbanb.getCantidadPorEdad(par);
        } else if (operacion.contentEquals("cantidadporfranja")) {
            DBActionsNameBasics dbanb = new DBActionsNameBasics();
            res = dbanb.getCantidadPorFranja(par);
        } else if (operacion.contentEquals("pelisporcadena")) {
            DBActionsPeliculas dbap = new DBActionsPeliculas();
            res = dbap.getPelisPorCadena(par);
        } else if (operacion.contentEquals("cantipelisporcadena")) {
            DBActionsPeliculas dbap = new DBActionsPeliculas();
            res = dbap.getCantidPorCadena(par);
        } else if (operacion.contentEquals("numpelisdepersona")) {
            DBActionsPersonaPeli dbapp = new DBActionsPersonaPeli();
            res = dbapp.getNumPelisDePersona(par);
        } else if (operacion.contentEquals("personasdepeli")) {
            DBActionsPersonaPeli dbapp = new DBActionsPersonaPeli();
            res = dbapp.getPersonasDePeli(par);
        } else if (operacion.contentEquals("pelisderating")) {
            DBActionsRatingPelis dbapp = new DBActionsRatingPelis();
            res = dbapp.getPelisDeRating(par);
        } else if (operacion.contentEquals("gpspoblacion")) {
            DBActionsPoblaciones dbap = new DBActionsPoblaciones();
            res = dbap.getGPSPoblacion(par);
        } else if (operacion.contentEquals("getuseraccess")) {
            DBActionsUsers dbau = new DBActionsUsers();
            res = dbau.getUserAccess(par);
        }
        return res;
    }
}

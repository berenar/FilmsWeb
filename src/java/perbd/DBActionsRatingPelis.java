/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package perbd;

import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author dsst
 */
public class DBActionsRatingPelis {

    public String getPelisDeRating(String par) {
        DBConnection con = new DBConnection();
        String res = "{'pelisderating':[";
        float a = Float.parseFloat(par.substring(0, par.indexOf("-")));
        float A = Float.parseFloat(par.substring(par.indexOf("-") + 1));
        try {
            con.open();
            Statement st1, st2;
            st1 = con.getConection().createStatement();
            st2 = con.getConection().createStatement();
            String sqlq = "select * from ratingpelis where ((ratio >= " + a + ") and (ratio <= " + A + "));";
            ResultSet rs = st1.executeQuery(sqlq);
            String aux;
            String codpeli;
            String nompeli;
            while (rs.next()) {
                codpeli = rs.getString("tconst");
                sqlq = "select * from peliculas where tconst like '" + codpeli + "';";
                ResultSet rs2 = st2.executeQuery(sqlq);
                if (rs2.next()) {
                    nompeli = rs2.getString("originaltitle");
                    aux = "";
                    aux = aux + "{'pelicula':'" + nompeli + "'}";
                    res = res + aux + ",";
                }
            }
            res = res.substring(0, res.length() - 1);   // quito la última coma
            res = res + "]}";
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return res;
    }
}

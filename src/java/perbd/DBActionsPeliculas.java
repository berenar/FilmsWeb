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
public class DBActionsPeliculas {

    public String getPelisPorCadena(String par) {
        DBConnection con = new DBConnection();
        String res = "{'pelisporcadena':[";
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            String sqlq = "select * from peliculas where originaltitle like '%" + par + "%';";
            ResultSet rs = st.executeQuery(sqlq);
            String aux;
            String nom;
            while (rs.next()) {
                nom = rs.getString("originaltitle");
                aux = "";
                aux = aux + "{'nom':'" + nom + "'}";
                res = res + aux + ",";
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

    public String getCantidPorCadena(String par) {
        DBConnection con = new DBConnection();
        String res = "{'cantipelisporcadena':";
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            String sqlq = "select count(originaltitle) from peliculas where originaltitle like '%" + par + "%';";
            ResultSet rs = st.executeQuery(sqlq);
            int canti = 0;
            if (rs.next()) {
               canti = rs.getInt(1);
            }
            res = res + canti + "}";
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return res;
    }
}

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
public class DBActionsPersonaPeli {

    public String getPelisDePersona(String par) {
        DBConnection con = new DBConnection();
        String res = "{'pelisdepersona':[";
        try {
            con.open();
            Statement st1, st2, st3;
            st1 = con.getConection().createStatement();
            st2 = con.getConection().createStatement();
            st3 = con.getConection().createStatement();
            String sqlq = "select * from namebasics where primaryname like '" + par + "';";
            ResultSet rs = st1.executeQuery(sqlq);
            String aux;
            String codnom;
            String codpeli;
            String nompeli;
            if (rs.next()) {
                codnom = rs.getString("nconst");
                sqlq = "select * from personapeli where nconst like '" + codnom + "';";
                ResultSet rs2 = st2.executeQuery(sqlq);
                while (rs2.next()) {
                    codpeli = rs2.getString("tconst");
                    sqlq = "select * from peliculas where tconst like '" + codpeli + "';";
                    ResultSet rs3 = st3.executeQuery(sqlq);
                    if (rs3.next()) {
                        nompeli = rs3.getString("originaltitle");
                        aux = "";
                        aux = aux + "{'pelicula':'" + nompeli + "'}";
                        res = res + aux + ",";
                    }
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

    public String getPersonasDePeli(String par) {
        DBConnection con = new DBConnection();
        String res = "{'personasdepeli':[";
        try {
            con.open();
            Statement st1, st2, st3;
            st1 = con.getConection().createStatement();
            st2 = con.getConection().createStatement();
            st3 = con.getConection().createStatement();
            String sqlq = "select * from peliculas where originaltitle like '" + par + "';";
            ResultSet rs = st1.executeQuery(sqlq);
            String aux;
            String codnom;
            String codpeli;
            String nompeli;
            if (rs.next()) {
                codpeli = rs.getString("tconst");
                sqlq = "select * from personapeli where tconst like '" + codpeli + "';";
                ResultSet rs2 = st2.executeQuery(sqlq);
                while (rs2.next()) {
                    codnom = rs2.getString("nconst");
                    sqlq = "select * from namebasics where nconst like '" + codnom + "';";
                    ResultSet rs3 = st3.executeQuery(sqlq);
                    if (rs3.next()) {
                        nompeli = rs3.getString("primaryname");
                        aux = "";
                        aux = aux + "{'nombre':'" + nompeli + "'}";
                        res = res + aux + ",";
                    }
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

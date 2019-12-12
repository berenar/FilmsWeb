/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package perbd;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Calendar;

/**
 *
 * @author dsst
 */
public class DBActionsNameBasics {

    public String getTodosPorEdad(String par) {
        DBConnection con = new DBConnection();
        String res = "{'todosporedad':[";
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            ResultSet rs = st.executeQuery("select * from namebasics;");
            String aux;
            String nom;
            int nace;
            int muere;
            while (rs.next()) {
                nom = rs.getString("primaryname");
                nace = rs.getInt("birthyear");
                muere = rs.getInt("deathyear");
                if (muere < 0) {   // por si no ha muerto
                    muere = Calendar.getInstance().get(Calendar.YEAR);
                }
                if ((muere - nace) == (Integer.parseInt(par))) {
                    aux = "";
                    aux = aux + "{'vals':['" + nom + "'," + nace + "," + muere + "]}";
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

    public String getCantidadPorEdad(String par) {
        DBConnection con = new DBConnection();
        String res = "{'catidadporedad':";
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            ResultSet rs = st.executeQuery("select * from namebasics;");
            String aux;
            int nace;
            int muere;
            int canti = 0;
            while (rs.next()) {
                nace = rs.getInt("birthyear");
                muere = rs.getInt("deathyear");
                if (muere < 0) {   // por si no ha muerto
                    muere = Calendar.getInstance().get(Calendar.YEAR);
                }
                if ((muere - nace) == (Integer.parseInt(par))) {
                    canti++;
                }
            }

            res = res + canti + "}";
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return res;
    }

    public String getCantidadPorFranja(String par) {
        DBConnection con = new DBConnection();
        String res = "{'catidadporfranja':";
        int a = Integer.parseInt(par.substring(0, par.indexOf("-")));
        int A = Integer.parseInt(par.substring(par.indexOf("-")+1));
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            ResultSet rs = st.executeQuery("select * from namebasics;");
            String aux;
            int nace;
            int muere;
            int canti = 0;
            while (rs.next()) {
                nace = rs.getInt("birthyear");
                muere = rs.getInt("deathyear");
                if (muere < 0) {   // por si no ha muerto
                    muere = Calendar.getInstance().get(Calendar.YEAR);
                }
                if (((muere - nace) >= a) && ((muere - nace) <= A)) { // está en franja
                    canti++;
                }
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

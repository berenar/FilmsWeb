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
public class DBActionsUsers {

    public String getUserAccess(String par) {
        DBConnection con = new DBConnection();
        String res = "{'getuseraccess':";
        String user = par.substring(0, par.indexOf("-"));
        String passwd = par.substring(par.indexOf("-") + 1);
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            String sql = "select * from usuarios where ((user='" + user + "')and(passwd='" + passwd + "'));";
            ResultSet rs = st.executeQuery(sql);
            String aux;
            int nivel = -1;
            if (rs.next()) {
                nivel = rs.getInt("nivel");  
            }
            res = res + "{'nivel':" + nivel + "}}";
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return res;
    }
}

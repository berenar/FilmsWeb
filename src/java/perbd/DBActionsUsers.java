/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package perbd;

import crypto.CryptoUtil;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author dsst
 */
public class DBActionsUsers {

    
    String key = "adiiu";

    public String getUserAccess(String par) {
        DBConnection con = new DBConnection();
        String res = "{'password':'";
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            String sql = "select password from users where (user='" + par + "')";
            ResultSet rs = st.executeQuery(sql);
            while (rs.next()) {
                CryptoUtil cryptoUtil = new CryptoUtil();
                String enc_pass = rs.getString("password");
                res = res + cryptoUtil.decrypt(key, enc_pass);
                res = res + "'}";
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return res;
    }
}

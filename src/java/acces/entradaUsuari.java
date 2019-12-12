/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package acces;

/**
 *
 * @author Bernat
 */
public class entradaUsuari {

    private String user;
    private String passwd;
    private int nivel;

    public entradaUsuari() {
        user = "bernat";
        passwd = "pericas";
        nivel = 32;
    }

    public int accesUsuari(String u, String p) {
        int res = 0;
        if ((u.contentEquals(user)) && (p.contentEquals(passwd))) {
            res = nivel;
        }
        return res;
    }
}

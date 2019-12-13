/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package acces;

import crypto.CryptoUtil;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;

/**
 *
 * @author Bernat
 */
public class entradaUsuari {

    private String user;
    private String passwd;

    public entradaUsuari() {
        user = "";
        passwd = "";
    }

    public String accesUsuari(String u) throws MalformedURLException, IOException {
        //cridar al webservice per obtenir la password de l'usuari
        URL yahoo = new URL("http://localhost:8080/PeliculesWeb/bdpeliculas?op=getuseraccess&par=" + u);
        URLConnection yc = yahoo.openConnection();
        BufferedReader in = new BufferedReader(
                new InputStreamReader(
                        yc.getInputStream()));
        String res = in.readLine();
        in.close();
        if (res.length() > 13) {
            res = res.substring(13, res.length() - 2);
            return res;
        } else {
            return null;
        }
    }
}

package ot10.verkkokauppa;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class Verkkokauppa
{

    private String dbUrl = "jdbc:mysql://localhost:3306/paitakauppa?serverTimezone=UTC";
    private String dbKayttaja = "root";
    private String dbSalasana = "";

    public  Verkkokauppa() throws Exception
    {
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (Exception e) {
            throw e;
        }
    }

    public ArrayList<Tuoterivi> haeKaikki() throws Exception {

        try {

            ArrayList<Tuoterivi> tuoteluettelo = new ArrayList<Tuoterivi>();

            Connection yhteys = DriverManager.getConnection(this.dbUrl, this.dbKayttaja, this.dbSalasana);

            String sqlLause = "SELECT * FROM tuoteluettelo";

            PreparedStatement kysely = yhteys.prepareStatement(sqlLause); 

            ResultSet rs = kysely.executeQuery();

            while (rs.next()) {

                Tuoterivi apu = new Tuoterivi();

                apu.setId(rs.getInt("id"));
                apu.setVari(rs.getString("vari"));
                apu.setKoko(rs.getString("koko"));
                apu.setHinta(rs.getFloat("hinta"));
                apu.setVarastotilanne(rs.getInt("varastotilanne"));
                apu.setKuva(rs.getInt("kuva"));

                tuoteluettelo.add(apu);

            }

            return tuoteluettelo;

        } catch (Exception e) {

            throw e;

        }

    }

}
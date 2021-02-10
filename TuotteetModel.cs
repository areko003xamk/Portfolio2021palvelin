using System;
using System.Collections.Generic;
using System.Text.Json;
using MySql.Data.MySqlClient;


namespace ot8.Models {

    public class Tuoterivi {

        public int id {get; set;}
        public string vari {get; set;}
        public string koko {get; set;}
        public float hinta {get; set;}//Tuli laitettua tyypiksi float tietokantaan, vaikka piti laitta decimal, eikä uskalla enää käydä muuttamassa.
        public int varastotilanne {get; set;}
        public int kuva {get; set;}//Onhan se hassua, että kuvana on int-tyyppinen numero, mutta kuvan laittaminen tänne tuntuu mahdottomalta.

    }

    public class Tuotteet {
        
        private string YhteysAsetukset {get;} = "server=localhost;user=root;password=;database=paitakauppa;SslMode=none";
        public List<Tuoterivi> haeKaikki() {

            try {

                using (MySqlConnection yhteys = new MySqlConnection(this.YhteysAsetukset)) {

                    yhteys.Open();

                    string SqlLause = "SELECT * FROM tuoteluettelo";

                    MySqlDataReader tulokset = new MySqlCommand(SqlLause, yhteys).ExecuteReader();

                    List<Tuoterivi> apulista = new List<Tuoterivi>();

                    while (tulokset.Read()) {

                        Tuoterivi apu = new Tuoterivi();

                        apu.id = tulokset.GetInt32("id");
                        apu.vari = tulokset.GetString("vari");
                        apu.koko = tulokset.GetString("koko");
                        apu.hinta = tulokset.GetFloat("hinta");
                        apu.varastotilanne = tulokset.GetInt32("varastotilanne");
                        apu.kuva = tulokset.GetInt32("kuva");
                        apulista.Add(apu);
                    }

                    return apulista;

                }

            } catch (Exception e) {

                throw new Exception("Tietojen hakemisessa tietokannasta tapahtui virhe", e);

            }

        }
    }
}
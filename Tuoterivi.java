package ot10.verkkokauppa;

public class Tuoterivi {

    private int id;
    private String vari;
    private String koko;
    private float hinta;
    private int varastotilanne;
    private int kuva;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }  
    
    public String getVari() {
        return vari;
    }

    public void setVari(String vari) {
        this.vari = vari;
    }
    
    public String getKoko() {
        return koko;
    }

    public void setKoko(String koko) {
        this.koko = koko;
    }  
    
    public float getHinta() {
        return hinta;
    }

    public void setHinta(float hinta) {
        this.hinta = hinta;
    }

    public int getVarastotilanne() {
        return varastotilanne;
    }

    public void setVarastotilanne(int varastotilanne) {
        this.varastotilanne = varastotilanne;
    }  
    
    public int getKuva() {
        return kuva;
    }

    public void setKuva(int kuva) {
        this.kuva = kuva;
    }

}
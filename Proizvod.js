export class Proizvod {
  constructor(sifra, naziv, cena, kolicina) {
    this.sifra = sifra;
    this.naziv = naziv;
    this.cena = cena;
    this.kolicina = kolicina;
  }
    get ukupna_cena(){

  
   
    return this.cena * this.kolicina;
    

  }

}


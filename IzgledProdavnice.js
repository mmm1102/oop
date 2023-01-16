export class IzgledProdavnice {
  constructor(prodavnica) {
    if (!Array.isArray(prodavnica.nizProizvoda)) {
      throw new Error("Invalid object!!!");
    }
    this.prodavnica = prodavnica;
  }

  ispis() {
    const nazivProdavnice = document.createElement("div");
    nazivProdavnice.innerHTML = this.prodavnica.naziv;
    document.body.appendChild(nazivProdavnice);

    const tabelaProizvoda = document.createElement("table");
    document.body.appendChild(tabelaProizvoda);
    tabelaProizvoda.classList.add("tabela");
    const red_za_naslove = document.createElement("tr");
    tabelaProizvoda.appendChild(red_za_naslove);

    const naslov_za_sifru = document.createElement("td");
    naslov_za_sifru.innerHTML = "sifra proizvoda";
    red_za_naslove.appendChild(naslov_za_sifru);

    const naslov_za_naziv = document.createElement("td");
    naslov_za_naziv.innerHTML = "naziv proizvoda";
    red_za_naslove.appendChild(naslov_za_naziv);

    const naslov_za_cenu = document.createElement("td");
    naslov_za_cenu.innerHTML = "cena proizvoda";
    red_za_naslove.appendChild(naslov_za_cenu);

    const naslov_za_kolicinu = document.createElement("td");
    naslov_za_kolicinu.innerHTML = "kolicina";
    red_za_naslove.appendChild(naslov_za_kolicinu);

    const naslov_za_izmenu_kolicine = document.createElement("td");
    naslov_za_izmenu_kolicine.innerHTML = "izmeni kolicinu";
    red_za_naslove.appendChild(naslov_za_izmenu_kolicine);

    const naslov_cena_puta_kolicina = document.createElement("td");
    naslov_cena_puta_kolicina.innerHTML = "CENA * KOLICINA";
    red_za_naslove.appendChild(naslov_cena_puta_kolicina);

    let self = this;

    this.prodavnica.nizProizvoda.forEach((proizvod) => {
      

      const red = document.createElement("tr");
      tabelaProizvoda.appendChild(red);

      const sifra = document.createElement("td");
      sifra.innerHTML = proizvod.sifra;
      red.appendChild(sifra);

      const naziv = document.createElement("td");
      naziv.innerHTML = proizvod.naziv;
      red.appendChild(naziv);

      const cena = document.createElement("td");
      cena.innerHTML = proizvod.cena;
      red.appendChild(cena);

      const kolicina = document.createElement("td");

      const cena_puta_kolicina = document.createElement("td");
      kolicina.appendChild(cena_puta_kolicina);
      red.appendChild(kolicina);

      cena_puta_kolicina.innerHTML = proizvod.kolicina;

      const dugmici_za_kolicinu = document.createElement("td");
      red.appendChild(dugmici_za_kolicinu);

      const dugme_povecaj = document.createElement("button");
      dugme_povecaj.innerHTML = "+";
      dugmici_za_kolicinu.appendChild(dugme_povecaj);

      const dugme_smanji = document.createElement("button");
      dugme_smanji.innerHTML = "-";
      dugmici_za_kolicinu.appendChild(dugme_smanji);

      dugme_povecaj.addEventListener("click", function () {
        proizvod.kolicina += 1;
        cena_puta_kolicina.innerHTML = proizvod.kolicina;
        zbir.innerHTML="Zbir je " +proizvod.ukupna_cena;
        
      });

      dugme_smanji.addEventListener("click", function () {
        proizvod.kolicina -= 1;
        cena_puta_kolicina.innerHTML = proizvod.kolicina;
        zbir.innerHTML="Zbir je " +proizvod.ukupna_cena;
      });

      const zbir = document.createElement("td");
      zbir.innerHTML="Ukupna cena je " +proizvod.cena;
      red.appendChild(zbir);

      red.classList.add("red_u_tabeli");
      sifra.classList.add("podatak_u_tabeli");
      naziv.classList.add("podatak_u_tabeli");
      cena.classList.add("podatak_u_tabeli");
      kolicina.classList.add("podatak_u_tabeli");
      zbir.classList.add("podatak_u_tabeli");
      dugmici_za_kolicinu.classList.add("dugmici_u_tabeli");

     console.log(proizvod.cena);
      
    });

   
  }
 
}

import { IzgledProdavnice } from "./IzgledProdavnice.js";
import { Prodavnica } from "./Prodavnica.js";
import { Proizvod } from "./Proizvod.js";

const nizProizvoda=[];



nizProizvoda.push(new Proizvod(123,"Mleko",138,1));
nizProizvoda.push(new Proizvod(523,"Hleb", 55, 1));
nizProizvoda.push(new Proizvod(729,"Čokolada", 142, 1));





const radnja=new Prodavnica("Maxi",nizProizvoda);



const izgled=new IzgledProdavnice(radnja);

izgled.ispis();
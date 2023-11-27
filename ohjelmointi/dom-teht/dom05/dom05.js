let summa = 0;
let taulukko;
let tulos;
document.addEventListener('DOMContentLoaded', alusta);

function alusta() {
    taulukko = document.getElementById('taulukko');
    tulos = document.getElementById('summa');
    let nro = 1;
    for (let rivi of taulukko.children) {
        for (let solu of rivi.children) {
            /* textContent on solun sisältö tekstinä, ilman mahdollisia HTML-tägejä */
            solu.textContent = nro++;

            // TODO: LISÄÄ TÄHÄN TAPAHTUMAKÄSITTELIJÄN KOODI
        }
    }
}
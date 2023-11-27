/* maiden ja pakan / käsien määrittely täällä, jotta kaikki funktiot näkevät ne */

/* aloittaa uuden pelin */
function uusiPeli() {
    /* alusta pakka ja kädet tyhjiksi taulukoiksi */

    /* nollaa näytetyt kortit */

    /* poista ohjeteksti (älä poista koko div-elementtiä) */

    /* lisää tapahtumakäsittelijät Ota kortti- sekä Jää-nappeihin */

    /* luo ja sekoita pakka */
    
    /* jaa kaksi ensimmäistä korttia */
}

/* tulostuksen apufunktio (palauttaa maan symbolin) */
function haeMaaSymboli(maa) {
}

/* tulostuksen apufunktio (palauttaa A, J, Q, K tai numero) */
function haeArvoSymboli(arvo) {
}

/* palauttaa parametrina annetun käden (taulukon) korttien yhteisarvon */
function kadenSumma(kasi) {
}

/* tätä funktiota kutsutaan, kun pelaaja painaa Jää-nappia */
function jakajanVuoro() {
    /* pura tapahtumakäsittelijät, jotta pelaaja ei voi enää ottaa korttia tai jäädä */

    /* ota uusi kortti niin kauan kunnes jakaja voittaa tai häviää */
}

/* ota pelaajalle uusi kortti, näytä se ja tarkista pisteet, jos kortteja on vähintään kaksi */
/* muista lisätä näytettäviin kortteihin oikean värin (musta tai punainen) luokka */
function otaPelaajanKortti() {
}

/* ota jakajalle uusi kortti ja näytä se */
function otaJakajanKortti() {
}

/* tarkista pelaajan käden summa ja näytä mahdollinen voittoviesti (pura myös tapahtumakäsittelijät pelin päättyessä) */
/* jos pisteitä yli 21, jakaja voitti; jos tasan 21 tai kädessä 5 korttia, pelaaja voitti */
function tarkistaPelaajanPisteet() {
}

/* tarkista jakajan käden summa, näytä mahdollinen voittoviesti ja palauta true / false, jatkuuko jakajan vuoro */
/* jakajanVuoro-funktio voi paluuarvon perusteella päätellä, otetaanko vielä kortteja */
function tarkistaJakajanPisteet() {
}

/* lisää Uusi peli -napin tapahtumakäsittelijä */

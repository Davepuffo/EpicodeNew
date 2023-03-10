/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
var numero = 5;
var numero1 = 10;

if (numero > numero1) {
  document.getElementById('es1').innerHTML = numero;
} else {
  document.getElementById('es1').innerHTML = numero1;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

var numero = 3;

if (numero != 5) {
  document.getElementById('es2').innerHTML = 'equal';
} else {
  document.getElementById('es2').innerHTML = 'notequal';
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var numero = (11 % 5);

if (numero == 0) {
  document.getElementById('es3').innerHTML = 'divisibile per 5';
} else {
  document.getElementById('es3').innerHTML = 'non divisibile per 5';
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro 
  addizione/sottrazione sia uguale a 8.
*/
var numero = 2;
var numero1 = 7;

if (numero === 8 || numero1 === 8 || numero + numero1 === 8 || numero - numero1 === 8 || numero1 - numero === 8) {
  document.getElementById('es4').innerHTML = 'uguale a 8';
} else {
  document.getElementById('es4').innerHTML = ' non uguale a 8';
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile 
  "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita
   (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 60;

if (totalShoppingCart > 50) {
  document.getElementById('es5').innerHTML = totalShoppingCart;
} else {
  document.getElementById('es5').innerHTML = totalShoppingCart + 10;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

var totalShoppingCart = 20;
var saldo = (totalShoppingCart * 20) / 100;
var prezzofinale = totalShoppingCart - saldo;

if (prezzofinale > 50) {
  document.getElementById('es6').innerHTML = prezzofinale;
} else {
  document.getElementById('es6').innerHTML = prezzofinale + 10;
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var numero = 1;
var numero1 = 2;
var numero2 = 3;

if (numero > numero1 > numero2) {
  document.getElementById('es7').innerHTML = numero;
} else if (numero1 > numero > numero2) {
  document.getElementById('es7').innerHTML = numero1;
} else {
  (numero2 > numero1 > numero)
  document.getElementById('es7').innerHTML = numero2;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no 
  (suggerimento: cerca su un motore di ricerca "typeof").
*/

var numero = 5;

if (typeof (numero) === 'number') {
  document.getElementById('es8').innerHTML = 'è un numero';
} else {
  document.getElementById('es8').innerHTML = 'non è un numero';
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var numero = 7;

if (numero % 2 == 0) {
  document.getElementById('es9').innerHTML = 'pari';
} else {
  document.getElementById('es9').innerHTML = 'dispari';
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */

let val = 7;
if (val < 5) {
  document.getElementById('es10').innerHTML = 'Meno di 5';
} else if (val < 10) {
  document.getElementById('es10').innerHTML = 'Meno di 10';
} else {
  document.getElementById('es10').innerHTML = 'Uguale a 10 o maggiore';
}




/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';

document.getElementById('es11').innerHTML = me.name + ' ' + me.lastName + ' ' + me.skills + ' ' + me.city;

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

me.lastName = ' ';

document.getElementById('es12').innerHTML = me.name + ' ' + me.lastName + ' ' + me.skills + ' ' + me.city;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();

document.getElementById('es13').innerHTML = me.name + ' ' + me.lastName + ' ' + me.skills + ' ' + me.city;

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

var prova14 = [];
prova14.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '10')

document.getElementById('es14').innerHTML = prova14;


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

prova14.splice(9, 1, '100');
document.getElementById('es15').innerHTML = prova14;

/* SCRIVI QUI LA TUA RISPOSTA */

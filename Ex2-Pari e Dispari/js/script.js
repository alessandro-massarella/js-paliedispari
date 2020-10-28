// Ex 2 -Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


var pariDispari = prompt('pari o dispari?');
// num1=numero utente
var num1 = parseInt(prompt('inserisci un numero da 1 a 5'));
// console.log('pariDispari', pariDispari);
console.log('numero utente', num1);

// genero un numero random da 1 a 5
function numeroRandom(numMin, numMax) {
var numRandom = Math.floor(Math.random() * (numMax - numMin +1) ) + numMin;
return numRandom;
}

// stabilisco se la somma è pari o Dispari
function isPari(num1, num2) {
  var pari = false;
  if ((num1 + num2) % 2 === 0) {
  pari = true;
  }
  return pari;
}



// num2=numero casuale
var num2 = numeroRandom(1, 5);
console.log('numRandom', num2);

// sommo i due numeri
var somma = num1 + num2
console.log('numero sommato', somma);

if (isPari(num1, num2)) {
  console.log('il numero è pari');
  var parDisp = ('pari');
} else {
  console.log('il numero è dispari');
  var parDisp = ('dispari');
}

// Dichiariamo chi ha vinto

if (pariDispari === parDisp) {
  console.log('utente ha vinto!');
} else {
  console.log('computer ha vinto!');
}

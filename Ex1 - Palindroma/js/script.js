// Ex 1 -Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindromi(word) {
  // PRIMA "ROVESCIO" LA PAROLA
  var revWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    // console.log(word[i]);
     revWord = revWord + word[i];
  }
  // console.log('revWord', revWord);
  // confronto le parole
  if (revWord === word) {
    console.log('Parola palindroma');
  } else {
    console.log('Parola non palindroma');
  }
  // console.log('word', word);
  // console.log('revWord', revWord);
  return revWord;
}
var word = prompt('inserisci una parola');
palindromi(word);

//Raccolta degli input
var userWord = prompt("Inserisci parola");

//Definizione della Funzione
function palindroma(parola) {
  var flip = parola.split('').reverse().join('');

  if (parola === flip) {
    return true;
  }
  return false;
}

//Utilizzo della funzione --> Stampa Risultato
var isPalindroma = palindroma(userWord);
if (isPalindroma == true){
  document.getElementById('result').innerHTML = "La parola è una PALIDROMA" ;
} else {
  document.getElementById('result').innerHTML = "La parola NON è una PALIDROMA" ;
}

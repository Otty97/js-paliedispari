var userWord = prompt("Inserisci parola");

function stringaInversa (userWord) {
  var wordString = userWord.length;
  var start = userWord.substring(0, Math.floor(wordString/2)).toLowerCase();
  var end = userWord.substring(wordString - Math.floor(wordString/2)).toLowerCase();
  var flip = end.split("").reverse().join("");
  var message = "Non è una PALIDROMA";

  if (start === flip) {
    message = "La parola è una PALIDROMA"
  } else {
    message
  }
}

document.getElementById('result').innerHTML = "ciao" + message;

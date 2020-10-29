var parioDispari = prompt("Scrivi pari o dispari");
var sceltaNumerogiocatore = parseInt(prompt("scrivi un numero da 1 a 5"));
var sceltaNumeroComputer = getRandomIntInclusive(1,5);
var numero = console.log(sceltaNumeroComputer);
var sommaNumeri = sceltaNumerogiocatore + sceltaNumeroComputer;
document.getElementById('userNumber').innerHTML = sceltaNumerogiocatore;
document.getElementById('pcNumber').innerHTML = sceltaNumeroComputer;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

if ((sommaNumeri % 2 === 0 && sceltaNumerogiocatore === "pari") || (sommaNumeri % 2 > 0 && sceltaNumerogiocatore === "dispari")) {
  document.getElementById('result').innerHTML = "Hai vinto";
} else {
  document.getElementById('result').innerHTML = "Hai perso";
};

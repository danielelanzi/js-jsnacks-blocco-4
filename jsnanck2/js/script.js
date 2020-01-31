// <===========================INIZIO========================>
// jsnack 2 blocco 4
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var bici = [{
  'nome': 'coppi',
  'peso': 2
},
{
  'nome': 'trecco',
  'peso': 5
},
{
  'nome': 'abo',
  'peso': 9
}]
console.log(bici);

var pesoMinore = bici[0];

for (var i = 0; i < bici.length; i++) {
  var bicicletta = bici[i];
  pesoMinore = minNum(bicicletta.peso, pesoMinore);
}

console.log(pesoMinore);


function minNum(num1, num2){
  if (num1 < num2) {
    return num1;
  } else if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}
// <===========================FINE========================>

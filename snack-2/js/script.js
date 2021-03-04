var numero;

do{
  numero = parseInt(prompt("Inserisci un numero"));
}while(isNaN(numero))

if(numero % 2 == 0){
  document.getElementById("numero").innerHTML = "Il numero " + numero + " che hai inserito è un numero pari";
}else{
  document.getElementById("numero").innerHTML = "Il numero " + numero + " che hai inserito è un numero dispari, quindi ti abbiamo assegnato questo numero: " + ++numero;
}

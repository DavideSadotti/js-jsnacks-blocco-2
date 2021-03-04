// CICLO FOR
var cicloUno = 0;
var controlloUno = 0;

for(var i = 0; i < 5; i++){
  do{
    cicloUno = parseInt(prompt("Inserisci un numero a tua scelta!"));
    console.log(cicloUno);
  }while(isNaN(cicloUno));
  controlloUno += cicloUno;
}

document.getElementById("for").innerHTML = "La somma di tutti i numeri che hai inserito è di: " + controlloUno;



// CICLO WHILE
var cicloDue = 0;
var controlloDue = 0;
var j = 0;

while(j < 5){
  do{
    cicloDue = parseInt(prompt("Inserisci un numero a tua scelta!"));
    console.log(cicloDue);
  }while(isNaN(cicloDue));
  controlloDue += cicloDue;

  j++;
}

document.getElementById("while").innerHTML = "La somma di tutti i numeri che hai inserito è di: " + controlloDue;

var interi = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var dispari = 0;

for(var i = 0; i < interi.length; i++){
  if(i % 2 == 1){
    dispari += interi[i];
    document.getElementById("lista").innerHTML += "<li>Il numero da sommare è: " + interi[i] + "</li>";
  }
}

document.getElementById("totale").innerHTML = "La somma totale fa: " + dispari;

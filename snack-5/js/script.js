var arrUno = ["Ciccio", "Pluto", "Topolino", "Minnie", "Paperino", "Paperina", "Arturo"];
var arrDue = ["Gialli", "Verdi", "Rossi", "Bruni", "Celesti"];


if(arrDue.length < arrUno.length){
  while(arrDue.length < arrUno.length){
    arrDue.push(prompt("Digita una qualsiasi parola fino a che i due array non siano della stessa grandezza"));
  }
}else{
  while(arrUno.length < arrDue.length){
    arrUno.push(prompt("Digita una qualsiasi parola finche l'arrUno non sia della stessa grandezza di arrDue"));
  }
}

document.getElementById("arrUno").innerHTML = arrUno;
document.getElementById("arrDue").innerHTML = arrDue;

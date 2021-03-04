var nomi = ["Davide", "Samuele", "Andrea", "Francesca", "Gianluigi", "Marco", "Raffaele", "Giovanni"];
var cognomi = ["Sadotti", "Celati", "Menchetti", "Gazzillo", "Bifaro", "Tavanti", "Bianconi", "Orazioli"];
var fakeList = [];

for(var i = 0; i < 3; i++){
  fakeList.push(nomi[Math.floor(Math.random() * 8)] + " " + cognomi[Math.floor(Math.random() * 8)]);
  document.getElementById("lista").innerHTML += "<li>" + fakeList[i] + "</li>";
}

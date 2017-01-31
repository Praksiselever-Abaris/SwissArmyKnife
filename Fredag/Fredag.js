function erdetfredag() {
var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Nei det er søndag";
weekday[1] = "Nei det er mandag ;(";
weekday[2] = "Nei det er tirsdag :(";
weekday[3] = "Nei onsdag seru";
weekday[4] = "Nesten det er torsdag";
weekday[5] = "ja det er fredag :D";
weekday[6] = "Nei det er lørdag";

var n = weekday[d.getDay()];
document.getElementById("resultat").innerHTML = n;
}

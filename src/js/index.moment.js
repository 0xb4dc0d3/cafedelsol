//Created by Diego Collao
// 03/09/2017

thisDom = moment().startOf('week');
thisLun = moment().startOf('week').add(1, 'days');
thisMar = moment().startOf('week').add(2, 'days');
thisMie = moment().startOf('week').add(3, 'days');
thisJue = moment().startOf('week').add(4, 'days');
thisVie = moment().startOf('week').add(5, 'days');
thisSab = moment().startOf('week').add(6, 'days');

dayNumbers = [thisDom.date(), thisLun.date(), thisMar.date(), thisMie.date(), thisJue.date(), thisVie.date(), thisSab.date()];
days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
//          0       1           2           3         4         5         6

thisMonth = moment().month();

if (thisMonth==0) {
  thisMonth = "Enero";
} else if (thisMonth == 1) {
  thisMonth= "Febrero";
} else if (thisMonth == 2) {
  thisMonth= "Marzo";
} else if (thisMonth == 3) {
  thisMonth= "Abril";
} else if (thisMonth == 4) {
  thisMonth= "Mayo";
} else if (thisMonth == 5) {
  thisMonth= "Junio";
}else if (thisMonth == 6) {
  thisMonth= "Julio";
} else if (thisMonth == 7) {
  thisMonth= "Agosto";
} else if (thisMonth == 8) {
  thisMonth= "Septiembre";
} else if (thisMonth == 9) {
  thisMonth= "Octubre";
} else if (thisMonth == 10) {
  thisMonth= "Noviembre";
} else if (thisMonth == 11) {
  thisMonth= "Diciembre";
}

document.getElementById("mon").innerHTML = thisMonth;

for (var i = 0; i < 7; i++) {
  if (i == 0) {
  // Domingo
} else if (i == 1) {
  // Lunes
  document.getElementById("lun").innerHTML = days[i] + " " + dayNumbers[i];
} else if (i == 2) {
  // Martes
  document.getElementById("mar").innerHTML = days[i] + " " + dayNumbers[i];
} else if (i == 3) {
  // Miercoles
  document.getElementById("mie").innerHTML = days[i] + " " + dayNumbers[i];
} else if (i == 4) {
  // Jueves
  document.getElementById("jue").innerHTML = days[i] + " " + dayNumbers[i];
} else if (i == 5) {
  // Viernes
  document.getElementById("vie").innerHTML = days[i] + " " + dayNumbers[i];
} else if (i == 6) {
  // Sabado
  document.getElementById("sab").innerHTML = days[i] + " " + dayNumbers[i];
}
}

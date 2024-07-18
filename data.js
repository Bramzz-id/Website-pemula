//test pertama
var nomor = 0;
if (nomor > 0){
  console.log("Bilangan Positif");
}
else if(nomor < 0){
  console.log("Bilangan negatif")
}
else{
  console.log("Bilangan cacah")
}
//test kedua
var usia = 17;
if (usia > 16){
  console.log("Boleh membuat SIM");
}
else{
  console.log("Belum boleh membuat SIM")
}
//test ketiga
var nilai = 60;
if (nilai > 90){
  console.log("Grade A");
}
else if(nilai > 75){
  console.log("Grade B");
}
else if(nilai > 60){
  console.log("Grade C");
}
else{
  console.log("Grade D");
}
//test keempat 
var sumbuX = 15
var sumbuY = -37
if(sumbuX > 0 && sumbuY > 0){
console.log("player dikanan atas")
}
else if(sumbuX < 0 && sumbuY < 0){
    console.log("player dikiri bawah")
}
else if(sumbuX > 0 && sumbuY < 0){
    console.log("player dikanan bawah")
}
else if(sumbuX < 0 && sumbuY > 0){
    console.log("player dikiri atas")
}
else{
    console.log("player ditengah")
}

var life = 8
time = 1
if(life > 0 && time > 0 ){
    console.log("kamu hidup")
}
else if(life <= 0 || time == 0){
    console.log("game over")
}
    


/** --------------------------Variables-----------------------------*/

var flagSigno=true, flagPunto = true, flagAns=true;
var primerNumero = 0, segundoNumero = 0, respuesta = 0, signo='w';

/** -------------------------Operaciones ---------------------------- */

function calcular(){
  if(signo=='+'){
    sumar(primerNumero, segundoNumero);
  }else if(signo=='-'){
    restar(primerNumero, segundoNumero);
  }else if(signo=='*'){
    multiplicar(primerNumero, segundoNumero);
  }else if(signo=='/') {
    dividir(primerNumero, segundoNumero);
  }
  var numero = respuesta.toString();
  document.getElementById("display").innerHTML =  numero.slice(0, 8);
  primerNumero = respuesta;
  flagSigno=true;
}

function sumar(primerNumero, segundoNumero) {
  respuesta = parseFloat(primerNumero) + parseFloat(segundoNumero);
}

function restar(primerNumero, segundoNumero) {
  respuesta = parseFloat(primerNumero) - parseFloat(segundoNumero);
}

function multiplicar(primerNumero, segundoNumero) {
  respuesta = parseFloat(primerNumero) * parseFloat(segundoNumero);
}

function dividir(primerNumero, segundoNumero) {
  respuesta = parseFloat(primerNumero) / parseFloat(segundoNumero);
}

/**----------------------------Numeros----------------------------------**/

document.getElementById(1).onclick = function(){
  addNumero("1");
}

document.getElementById(2).onclick = function(){
  addNumero("2");
}

document.getElementById(3).onclick = function(){
  addNumero("3");
}

document.getElementById(4).onclick = function(){
  addNumero("4");
}

document.getElementById(5).onclick = function(){
  addNumero("5");
}

document.getElementById(6).onclick = function(){
  addNumero("6");
}

document.getElementById(7).onclick = function(){
  addNumero("7");
}

document.getElementById(8).onclick = function(){
  addNumero("8");
}

document.getElementById(9).onclick = function(){
  addNumero("9");
}

document.getElementById(0).onclick = function(){
  addNumero("0");
}

function addNumero(numero){
  if(flagAns==false){
    document.getElementById("display").innerHTML = 0; 
    flagAns = true;
  }
  var cadena = document.getElementById("display").innerHTML;
  if(cadena==0 && numero!="."){
    cadena= ' ';
  }
  if(cadena.length<=8){
    document.getElementById("display").innerHTML = cadena + numero;
  }
}

/**---------------------------Signos---------------------------------- */

document.getElementById("dividido").onclick = function(){
  addSigno("/");
}

document.getElementById("por").onclick = function(){
  addSigno("*");
}

document.getElementById("menos").onclick = function(){
  addSigno("-");
}

document.getElementById("mas").onclick = function(){
  addSigno("+");
}

document.getElementById("igual").onclick = function(){
  if(flagAns==true){
      segundoNumero =  document.getElementById("display").innerHTML;
      flagAns=false;
  }
  calcular();
}

function addSigno(signo1){
  var cadena = document.getElementById("display").innerHTML;
  if(cadena!=0 && flagSigno==true){
    signo = signo1;
    flagSigno = false;
    flagNumero = true;
    flagPunto = true;
    primerNumero =  document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = " ";
  }
}

/** ----------------------------Funciones---------------------------- */

 document.getElementById("on").onclick = function(){
   document.getElementById("display").innerHTML = 0;
 }

 document.getElementById("sign").onclick = function(){
   var x = document.getElementById("display").innerHTML;
   document.getElementById("display").innerHTML = -x;
 }

 document.getElementById("punto").onclick = function(){
   if(flagPunto==true){
     addNumero(".");
     flagPunto=false;
   }
 }

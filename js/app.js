var calculardora = (function(){
  var resultado=0;
  function actualizarResultado(nuevoResultado){
    resultado = nuevoResultado;
  }
  return {
    sumar: function(numero1, numero2){
      var resultado = numero1 + numero2;
      actualizarResultado(resultado);
    },
    restar: function(numero1, numero2){
      var resultado = numero1 - numero2;
      actualizarResultado(resultado);
    },
    multiplilcar: function(numero1, numero2){
      var resultado =  numero1 * numero2;
      actualizarResultado(resultado);
    },
    dividir: function(numero1, numero2){
      var resultado =  numero1 / numero2;
      actualizarResultado(resultado);
    },
    resultado: function(){
      return resultado;
    }
  }}
)();

function Inicializacion(){
  var flagSigno=true, flagPunto=true, flagAns=true, respuesta = 0, signo=' ';
  var primerNumero = 0, segundoNumero = 0;

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

  document.getElementById("igual").onclick = function(){
    if(flagAns==true){
        segundoNumero =  document.getElementById("display").innerHTML;
        flagAns=false;
    }
    switch(signo) {
      case '+':
          calculardora.sumar(parseFloat(primerNumero), parseFloat(segundoNumero));
          break;
       case '-':
          calculardora.restar(parseFloat(primerNumero), parseFloat(segundoNumero));
          break;
       case '*':
          calculardora.multiplilcar(parseFloat(primerNumero), parseFloat(segundoNumero));
          break;
       case '/':
          calculardora.dividir(parseFloat(primerNumero), parseFloat(segundoNumero));
          break;
    }
    var x = calculardora.resultado();
    primerNumero = x;
    mostrarResultado(x.toString());
  }

  function mostrarResultado(resultado1){
    document.getElementById("display").innerHTML =  resultado1.slice(0, 8);
    flagSigno=true;
  }
}

Inicializacion();

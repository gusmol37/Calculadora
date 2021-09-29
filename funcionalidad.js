//Inicializando variables
var operandoa;
var operandob;
var operacion;
var aux = "";

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  }

  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
    aux = aux + "1"
    
}


dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
    aux = aux + "2"

    
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
    aux = aux + "3"
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
    aux = aux + "4"
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
    aux = aux + "5"
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
    aux = aux + "6"
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
    aux = aux + "7"
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
    aux = aux + "8"
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
    aux = aux + "9"
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
    aux = aux + "0"
}
reset.onclick = function(e){
      
      resetear();
}
suma.onclick = function(e){

      operandoa = Number(aux) 
          aux = ""    
  
      
    resultado.textContent = resultado.textContent + "+"
    operacion = "+";
     
 
       
}
resta.onclick = function(e){
  operandoa = Number(aux) 
  aux = "";
    operacion = "-";
    resultado.textContent = resultado.textContent + "-"
}
multiplicacion.onclick = function(e){
  operandoa = Number(aux) 
  aux = "";
    operacion = "*";
    resultado.textContent = resultado.textContent + "x"
    
}
division.onclick = function(e){
  operandoa = Number(aux) 
  aux = "";
    operacion = "/";
    resultado.textContent = resultado.textContent + "÷"
   
}
igual.onclick = function(e){
    operandob = Number(aux); 
    
    resolver();


}

function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
  aux = ""
}

function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }

 
  console.log(aux)
  resetear();
  aux = res
  resultado.textContent = res;
}
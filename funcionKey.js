//Inicializando variables
var operandoa;
var operandob;
var operacion;
var aux = "";

function initKey(){
    //variables
    document.addEventListener ("keydown", keypress)
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
    console.log("25")
  }

  

  function keypress (e){
      switch (e.key){

        case 1:
            uno(e)
            break;

            case 2:
                dos(e)
                break;
            case 3:
                tres(e)
                break;
            case 4:
                cuatro(e)
                break;
                
            case 5:
                cinco(e)
                break;
                
            case 6:
                seis(e)
                break;
                
            case 7:
                siete(e)
                break;
            case 8:
                ocho(e)
                break;

            case "+":
               suma(e)
                break;

                case "Enter":
                  igual(e)
                break;

      }

  }

function uno (e){
    resultado.textContent = resultado.textContent  + "1";
    aux = aux + "1"
    
}


function dos (e){
    resultado.textContent = resultado.textContent  + "2";
    aux = aux + "2"

    
}
function tres (e){
    resultado.textContent = resultado.textContent  + "3";
    aux = aux + "3"
}
function cuatro (e){
    resultado.textContent = resultado.textContent  + "4";
    aux = aux + "4"
}
function cinco (e){
    resultado.textContent = resultado.textContent  + "5";
    aux = aux + "5"
}
function seis (e){
    resultado.textContent = resultado.textContent  + "6";
    aux = aux + "6"
}
function siete (e){
    resultado.textContent = resultado.textContent  + "7";
    aux = aux + "7"
}
function ocho (e){
    resultado.textContent = resultado.textContent  + "8";
    aux = aux + "8"
}
function nueve(e){
    resultado.textContent = resultado.textContent  + "9";
    aux = aux + "9"
}
function cero (e){
    resultado.textContent = resultado.textContent  + "0";
    aux = aux + "0"
}
function reset (e){
      
      resetear();
}


function sumar (e){

      operandoa = Number(aux) 
          aux = ""    
  
      
    resultado.textContent = resultado.textContent + "+"
    operacion = "+";
     
 
       
}
function restar  (e) {
  operandoa = Number(aux) 
  aux = "";
    operacion = "-";
    resultado.textContent = resultado.textContent + "-"
}
function multiplicar  (e){
  operandoa = Number(aux) 
  aux = "";
    operacion = "*";
    resultado.textContent = resultado.textContent + "x"
    
}
function dividar  (e) {
  operandoa = Number(aux) 
  aux = "";
    operacion = "/";
    resultado.textContent = resultado.textContent + "÷"
   
}
function igual (e){
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
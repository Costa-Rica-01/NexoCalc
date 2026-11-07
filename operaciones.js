function sumar (){
let numeroUno = Number(document.getElementById("numeroUno").value);
let numeroDos = Number(document.getElementById("numeroDos").value);

let resultado = numeroUno + numeroDos ;

document.getElementById("resultado").innerHTML = resultado ; // cambiando

    }
function restar (){
let numeroUno = Number(document.getElementById("numeroUno").value);
let numeroDos = Number(document.getElementById("numeroDos").value);

let resultado = numeroUno - numeroDos ;

document.getElementById("resultado").innerHTML = resultado ; // cambiando

    }
    function multiplicar (){
let numeroUno = Number(document.getElementById("numeroUno").value);
let numeroDos = Number(document.getElementById("numeroDos").value);

let resultado = numeroUno * numeroDos ;

document.getElementById("resultado").innerHTML = resultado ; // cambiando

    }
    function dividir (){
let numeroUno = Number(document.getElementById("numeroUno").value);
let numeroDos = Number(document.getElementById("numeroDos").value);

let resultado = 0; 
    if(numeroDos == 0){
 resultado = "No se puede divir entre 0";

 }
 else {
  resultado = numeroUno / numeroDos;
     }

document.getElementById("resultado").innerHTML = resultado ; // cambiando

    }

    
  
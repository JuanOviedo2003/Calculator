//declaration of variables
var operandoa;
var operandob;
var operacion;

function init() {
    // varibles
    const clean = document.getElementById("clean")
    const answer = document.getElementById("answer");
    const divide = document.getElementById("divide");
    const multiply = document.getElementById("multiply");
    const delet = document.getElementById("delete");

    const siete = document.getElementById("siete");
    const ocho = document.getElementById("ocho");
    const nueve = document.getElementById("nueve");
    const substract = document.getElementById("substract");

    const cuatro = document.getElementById("cuatro");
    const cinco = document.getElementById("cinco");
    const seis = document.getElementById("seis");
    const add = document.getElementById("add");

    const uno = document.getElementById("uno");
    const dos = document.getElementById("dos");
    const tres = document.getElementById("tres");

    const cero = document.getElementById("cero");
    const result = document.getElementById("result");

    // programming click events
    cero.onclick = function(e){
        answer.textContent = answer.textContent  + "0";
    }
    uno.onclick = function(e){
        answer.textContent = answer.textContent  + "1";
    }
    dos.onclick = function(e){
        answer.textContent = answer.textContent  + "2";
    }
    tres.onclick = function(e){
        answer.textContent = answer.textContent  + "3";
    }
    cuatro.onclick = function(e){
        answer.textContent = answer.textContent  + "4";
    }
    cinco.onclick = function(e){
        answer.textContent = answer.textContent  + "5";
    }
    seis.onclick = function(e){
        answer.textContent = answer.textContent  + "6";
    }
    siete.onclick = function(e){
        answer.textContent = answer.textContent  + "7";
    }
    ocho.onclick = function(e){
        answer.textContent = answer.textContent  + "8";
    }
    nueve.onclick = function(e){
        answer.textContent = answer.textContent  + "9";
    }


    clean.onclick = function(e){ 
        // funntion substring why return the string with the indexs specified.
        // in this case substring return all the string expected the last character.
        answer.textContent = answer.textContent.substring(0, answer.textContent.length - 1);
    }

    divide.onclick = function(e){
        operandoa = answer.textContent;
        operacion = "/";
        clear();
    }
    multiply.onclick = function(e){
        operandoa = answer.textContent;
        operacion = "*";
        clear();
    }
    delet.onclick = function(e){
        answer.textContent = "";
    }
    substract.onclick = function(e){
        operandoa = answer.textContent;
        operacion = "-";
        clear();
    }
    add.onclick = function(e){
        operandoa = answer.textContent;
        operacion = "+";
        clear();
    }

    result.onclick = function(e){
        operandob = answer.textContent;
        solution();
    }
}

function clear(){
    answer.textContent = "";
}

function reset(){
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function solution(){
    var res = 0;

    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            if(operandoa == 0){
                answer.textContent = operandob;
            }else{
                answer.textContent = operandoa;
            }
            break;
        case "-":
            if(operandoa == 0){
                answer.textContent = operandob;
            }else{
                answer.textContent = operandoa;
            }
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            if(operandoa == 0){
                answer.textContent = operandob;
            }else{
                answer.textContent = operandoa;
            }
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            if(operandoa == 0){
                answer.textContent = operandob;
            }else{
                answer.textContent = operandoa;
            }
            break;
    }
    reset();

    answer.textContent = res;
}




// some things are property of: DenisseEstrada.
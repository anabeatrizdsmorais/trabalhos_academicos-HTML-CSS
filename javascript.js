
function botao(num){
    
    var salvo = document.calc.visor.value; 
    
    document.calc.visor.value = salvo + num;
   
}

function reset () {
    //limpa visor
    var numero = "";
}

function calcule() {
    // calcular visor
    var exp = document.calc.visor.value;
    
    if(exp){
        document.calc.visor.value = eval(exp);
    }
}
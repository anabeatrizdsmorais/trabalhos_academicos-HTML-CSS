//EXERCICIO 2
	alert('MAIOR NUMERO');
	var n1 = parseInt(prompt('Digite o 1º numero: '));
	var n2 = parseInt(prompt('Digite o 2º numero: '));
	var n3 = parseInt(prompt('Digite o 3º numero: '));
			
	if(n1 > n2 && n1 > n3){
		alert('o maior numero é: ' +n1);
	} else if(n2 > n1 && n2 > n3){
		alert('o maior numero é: ' +n2);
	} else if(n3 > n1 && n3 > n2){
		alert('o maior numero é: ' +n3);
	}
			


let valor = document.querySelector('.item .valor');
let porcetagem = document.querySelector('.item .porcentagem');




function mostrarResultado(r, c) {
	document.querySelector('.resultado .resultado-porcentagem').innerHTML = `O valor da casa é: ${r}`
	document.querySelector('.resultado .resultado-cliente').innerHTML = `O valor do cliente é: ${c}`
	limparCampos();
	document.querySelector('.resultado').style.display = 'block';

}




let calcular = document.querySelector('#calcular');





calcular.addEventListener('click', () => {
	let calcular = (parseInt(valor.value) * parseInt(porcetagem.value) / 100);
	let calc = (parseInt(valor.value) -  parseInt(calcular));

	if(valor.value === '' || porcetagem.value === ''){
		alert('Digite um numero');
	}else
	mostrarResultado(calcular, calc);
});



document.querySelector('.resultado .fechar label').addEventListener('click',()=>{
	document.querySelector('.resultado').style.display = 'none';
});



let limparCampos = () => {
	let valor = document.querySelector('.item .valor').value = '';
    let porcetagem = document.querySelector('.item .porcentagem').value = '';
}
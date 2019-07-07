var miojo = document.querySelector('.miojo');
var tempo1 = document.querySelector('.tempo1');
var tempo2 = document.querySelector('.tempo2');
var resposta = document.querySelector('.resposta');
var form = document.querySelector('form');

form.addEventListener('input', function () {
	var test = miojo.value + tempo1.value + tempo2.value;
	resposta.value = test;
})

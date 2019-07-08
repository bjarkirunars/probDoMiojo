let miojo = (document.querySelector('.miojo'));
let tempo1 = (document.querySelector('.tempo1'));
let tempo2 = (document.querySelector('.tempo2'));
let resposta = document.querySelector('.resposta');
let form = document.querySelector('form');
let test = 0;

form.addEventListener('input', function () {
	m = parseInt(miojo.value);
	t1 = parseInt(tempo1.value);
	t2 = parseInt(tempo2.value);
	
	// Tendo certeza que input faz sentido
	if (isNaN(t1) || isNaN(t2) || isNaN(m)) {
		test = "Por favor insira o número de minutos em todos os campos";
	} else if (t1 < 0 || t2 < 0 || m < 0) {
		test = "Tempo tem que ser positivo";
	} else if (t1 < m || t2 < m) {
		test = "Ambulhadas devem ter mais tempo do que o miojo";
	} else if (t1 == m || t2 == m) {
		test = m + " minutos";
	} else if (t1 == t2){
		test = "Solução inexistente";
	} else {
		test = findMin(m, t1, t2);
	}

	resposta.innerHTML = test;
})

// Achar o tempo mínimo se existe
function findMin(m, t1, t2) {
	let a = 1;
	let b = 1;
	let c = 0; // Se a/b for mais que 50, aumenta
	
	// Iterar até achar solucao ou a/b == 50
	/* 
	Checando o caso de Ambulhada 1 virada 
	a vezes mais tempo do miojo sendo o
	mesmo que Ambulhada 2 virada b vezes.
	*/
	while (t1*a + m != t2*b && a < 51 && b < 51) {
		/* 
		Se Ambulhada 1 virada a vezes menos o 
		tempo do miojo já é maior que a 
		Ambulhada 2 virada b vezes, vire A2 de novo
		Se nao, vire A1 de novo.
		*/
		if (t1*a - m > t2*b) {
			b += 1;
		} else {
			a += 1;
		}
		
		// Salvar a resposta se já bateu
		if (t1*a + m == t2*b) { r1 = t2*b; }
		if (t1*a - m == t2*b) { r1 = t1*a; }
	}
	if (a == 50 || b == 50) c += 1;

	a=1;
	b=1;
	// Iterar até achar solucao ou a/b == 50 
	/* 
	Checando o caso de Ambulhada 1 virada 
	a vezes menos tempo do miojo sendo o 
	mesmo que Ambulhada 2 virada b vezes.
	*/
	while (t1*a - m != t2*b && a < 51 && b < 51) {
		
		/* 
		Se Ambulhada 1 virada a vezes menos o 
		tempo do miojo já é maior que a 
		Ambulhada 2 virada b vezes, vire A2 de novo
		Se nao, vire A1 de novo.
		*/
		if (t1*a - m > t2*b) {
			b += 1;
		} else {
			a += 1;
		}
		
		// Salvar a resposta se já bateu
		if (t1*a + m == t2*b) { r2 = t2*b; }
		if (t1*a - m == t2*b) { r2 = t1*a; }
	}
	if (a == 50 || b == 50) c += 1;
	
	// Devolver a melhor solucao
	if (c == 2) return "Solução inexistente";
	return Math.min(r1,r2)   + " minutos";
}

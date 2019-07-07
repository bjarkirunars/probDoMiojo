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
	
	if (isNaN(t1) || isNaN(t2) || isNaN(m)) {
		test = 0;
	} else {
		test = findMin(m, t1, t2);
	}

	resposta.value = test;
})

function findMin(m, t1, t2) {
	let a = 1;
	let b = 1;
	while (t1*a + m != t2*b) {
		
		if (t1*a - m > t2*b) {
			b += 1;
		} else {
			a += 1;
		}
		
		if (t1*a + m == t2*b) { r1 = t2*b; }
		if (t1*a - m == t2*b) { r1 = t1*a; }	
	}
	a=1;
	b=1;
	
	while (t1*a - m != t2*b) {
		if (t1*a - m > t2*b) {
			b += 1;
		} else {
			a += 1;
		}
		if (t1*a + m == t2*b) {
			r2 = t2*b;
		}
		if (t1*a - m == t2*b) {
			r2 = t1*a;
		}
	}
	
	return Math.min(r1,r2);
}

	
	let S1 = [];
	let	S2 = [];
	let	unR = []; 
	let	peresR = [];

	function Povtor(mass1 = [], mass2 = []){
		let i = 0;

		while(i < mass2.length){
			let j = 0, f = 0;
			while (j < mass1.length) {
				if(mass1[j] == mass2[i]) {
					f++;
					j = mass1.length;
				}
				j++;
			}
			if (!f) 
				mass1.push(mass2[i]);
			i++;
		} ;
	}


	function Union() {		
		Povtor(unR, S1);
		Povtor(unR, S2);
		document.getElementById('t1').innerHTML += "Объединение множеств: ";
		document.getElementById('t1').innerHTML += unR;
		document.getElementById('t1').innerHTML += "<br>";	
	};


	function Peresech() {
	let i = 0;
		while (i < S1.length)
		{
			let f = 0, j = 0;
			while(j < S2.length)
			{
				if(S1[i] == S2[j]){
					f++;
					j = S2.length;
				};
				j++;
			};
			if(f > 0)
			{
				peresR.push(S1[i]);
			};
			i++;
		};

		document.getElementById('t1').innerHTML += 'Пересечение множеств: ';
		document.getElementById('t1').innerHTML += peresR;
		document.getElementById('t1').innerHTML += "<br>";	
	};


	function Add() {
		let addR = [];
		let i = 0;

		while (i < S1.length)
		{
			let j = 0, f = 0;
			while(j < S2.length)
			{
				if(S1[i] == S2[j])
				{
					f++;
					j = S2.length;
				};
				j++;
			};
			if(!f)
				addR.push(S1[i]);
			i++;
		} 
		document.getElementById('t1').innerHTML += "Дополнение/разность множеств из A в В: ";	
		document.getElementById('t1').innerHTML += addR;	
		document.getElementById('t1').innerHTML += "<br>";	
	};


	function SymDif() {
		let diffRes = [];
		let i = 0;

		while(i < unR.length)
		{
			let j = 0, f = 0;
			while(j < peresR.length)
			{
				if(unR[i] == peresR[j])
				{
					f++;
					j = peresR.length;
				}
				j++;
			}
			if(!f)
				diffRes.push(unR[i]);
			i++;
		}
		document.getElementById('t1').innerHTML += 'Симметрическая разность множеств: ';
		document.getElementById('t1').innerHTML += diffRes;
		document.getElementById('t1').innerHTML += "<br>";	
	};


	function test() {
		document.getElementById('t1').innerHTML = '';
		a1 = document.getElementById('a1').value;
		a2 = document.getElementById('a2').value;
		a1 = a1.split(' ');
		a2 = a2.split(' ');
		Povtor(S1, a1);
		Povtor(S2, a2);
		document.getElementById('t1').innerHTML += 'Первое множество:  ';
		document.getElementById('t1').innerHTML += S1;
		document.getElementById('t1').innerHTML += "<br>";	
		document.getElementById('t1').innerHTML += 'Второе множество: ';
		document.getElementById('t1').innerHTML += S2;
		document.getElementById('t1').innerHTML += "<br>";		

		Union();
			console.log(S1.length);
		Peresech();
		Add();
		SymDif();
		S1 =[];
		S2 =[];
		unR = [];
		peresR = [];
		addR = [];
		diffRes = [];	
				
	}

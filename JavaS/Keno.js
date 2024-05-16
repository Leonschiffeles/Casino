const nummere = ['1','2','3','4','5','6','7','8','9','10',
'11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',
'31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50',
'51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70',
'71','72','73','74','75','76','77','78','79','80'];

var coins = 500;
document.querySelector('#coins').textContent = coins;

var wette = 50;
document.querySelector('#wette').textContent = wette;

let whale = [];
let rend = [];

let res = [];

let prufe = 0;

function sup(zhale){
	if (whale.length >= 20){
		zhale = 0;
		alert('HO HO HO');
	}

	console.log(whale + ' ' + 'whaleeeeee ');
	console.log(whale.length + ' ' + 'whaleeeeee length ');

	whale.push(zhale);
	document.getElementById('Z-' + zhale).style.background = 'linear-gradient(90deg, rgba(218,79,84,0.7961309523809523) 0%, rgba(85,118,156,1) 100%)';
}

function pruf(){
	zt = window.setInterval(rendom_bal, 2000);

	function rendom_bal(){
		
		if(rend.length >= 20){
			clearInterval(zt);
			alert('HOHOHO');
	
			for (let i = 0; i < whale.length; i++) 
				for (let j = 0; j < rend.length; j++) {
					if (whale[i] === rend[j]) {
					res.push(whale[i])
					}
				}
			
			const lang = res.length; 	
			switch (lang) {
				case 20:
					coins += 10000; 
					break;
				case 19:
					coins += 18000; 
					break;
				case 18:
					coins += 16000; 
					break;
				case 17:
					coins += 14000; 
					break;
				case 16:
					coins += 12000; 
					break;
				case 15:
					coins += 11000; 
					break;
				case 14:
					coins += 9000; 
					break;
				case 13:
					coins += 8000; 
					break;
				case 12:
					coins += 6000; 
					break;
				case 11:
					coins += 5500; 
					break;
				case 10:
					coins += 5000; 
					break;
				case 9:
					coins += 1500; 
					break;	
				case 8:
					coins += 1000; 
					break;
				case 7:
					coins += 750; 
					break;
				case 5:
					coins += 500; 
					break;
				default:
					coins -= wette;
					break;
			}
	
		res.forEach(element => { 
			document.getElementById('Z-' + element).style.background = 'radial-gradient(circle, rgba(251,63,79,1) 0%, rgba(70,252,106,1) 100%)';
		});

		document.querySelector('#coins').textContent = coins + ' '+'$';
		
		}
	
		const randomZahl = Math.floor(Math.random() * nummere.length);
		const spinResult = nummere[randomZahl];
		
		console.log(spinResult);

		if (rend.includes(spinResult)){
			spinResult = spinResult - 1;
 		}
		  
		rend.push(spinResult);
		console.log(rend + ' ' + 'rend iz sort');
	
		document.getElementById('Z-' + spinResult).style.background = 'linear-gradient(90deg, rgba(171,218,79,1) 0%, rgba(85,118,156,1) 100%)';
		console.log(spinResult + ' ' + 'spinResult');
	
		const b = rend.length;
		console.log(b + ' ' + ' b REnd Length');
		document.getElementById('b' + b).textContent = spinResult;
	}
}

function claer(){
	whale.forEach(element => { 
		document.getElementById('Z-' + element).style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
	});
	rend.forEach(element => { 
		document.getElementById('Z-' + element).style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
	});
	res.forEach(element => { 
		document.getElementById('Z-' + element).style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
	});

	const b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
	b.forEach(element => {	
		document.getElementById('b' +  element).textContent = " ";
	});
	
	whale.splice(0,25);
	rend.splice(0,25);
	res.splice(0,21)
}
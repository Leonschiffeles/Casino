const nummere = ['1','2','3','4','5','6','7','8','9','10',
'11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',
'31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50',
'51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70',
'71','72','73','74','75','76','77','78','79','80'];

var coins = 50;
document.querySelector('#coins').textContent = 'Coins ' + ' ' + coins;
document.querySelector('#Coins_Oben').textContent = coins + '.00';


var wette = 5;
document.querySelector('#wette').textContent = wette + ' ' + 'Wette';
document.querySelector('#wettw_unter').innerHTML = wette;


let whale = [];
let rend = [];

let res = [];

let prufe = 1;

function history(){
	const hist = [1,2,3,4,5,6,7,8,9,10];

	if(prufe >= 11){
		prufe = prufe / prufe;
		hist.forEach(element => { 
			document.getElementById('h-' +  element).textContent = " ";
			document.getElementById('h-' +  element + '-' + element).textContent = " ";
		}); 
	}

	console.log(res.length);

	document.getElementById('h-' +  prufe).textContent = 'Rund' + ' ' +  prufe;
	document.getElementById('h-' +  prufe + '-' + prufe).textContent = res.length;

	prufe ++;
}

function wette_plus(){

	Vo_C_Plus();

    if (wette >= coins){
        alert('Du hast kein mehrer Geld');
    }
    else {
        wette ++ ;
    }
    document.querySelector('#wette').innerHTML = wette + ' ' + 'Wette';
    document.querySelector('#wettw_unter').innerHTML = wette;
    return (wette);
}

function wette_minus(){

	Vo_C_Minus();

    if (wette <= 0){
        alert('Eror');
    }
    else {
        wette -- ;
    }
    document.querySelector('#wette').innerHTML = wette + ' ' + 'Wette';
    document.querySelector('#wettw_unter').innerHTML = wette;
    return (wette);
}

function animat(){
    g1 = window.setInterval(gr, 1000);	
	g2 = window.setInterval(gr_1, 1080);	
	g3 = window.setInterval(gr_2, 1130);	
	g4 = window.setInterval(gr_3, 1200);	
	
	if(rend.length == 20){
		clearInterval(g1);
		clearInterval(g2);
		clearInterval(g3);
		clearInterval(g4);
	 }

	function gr(){
		document.querySelector('#A-41').classList.remove('gr_3');
		document.querySelector('#A-11').classList.add('gr');
		document.querySelector('#A-4').classList.remove('gr_3');
		document.querySelector('#A-1').classList.add('gr');
	}

	function gr_1(){
		document.querySelector('#A-11').classList.remove('gr');
		document.querySelector('#A-21').classList.add('gr_1');
		document.querySelector('#A-1').classList.remove('gr');
		document.querySelector('#A-2').classList.add('gr_1');
	}

	function gr_2(){
		document.querySelector('#A-21').classList.remove('gr_1');
		document.querySelector('#A-31').classList.add('gr_2');
		document.querySelector('#A-2').classList.remove('gr_1');
		document.querySelector('#A-3').classList.add('gr_2');
	}

	function gr_3(){
		document.querySelector('#A-31').classList.remove('gr_2');
		document.querySelector('#A-41').classList.add('gr_3');
		document.querySelector('#A-3').classList.remove('gr_2');
		document.querySelector('#A-4').classList.add('gr_3');
	}
}

function sup(zhale){

	Vo_C_Minus();

	if (whale.length >= 20){
		zhale = 0;
		alert('HO HO HO');
	}

	console.log(whale);

	whale.push(zhale);
	document.getElementById('Z-' + zhale).style.background = 'linear-gradient(90deg, #0d96ec 0%, rgba(85,118,156,1) 100%)';
}

function pruf(){

	zt = window.setInterval(rendom_bal, 100);
	animat();

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
					coins += wette * 20;
					Vo_C_Win(); 
					break;
				case 19:
					coins += wette * 19;
					Vo_C_Win();
					break;
				case 18:
					coins += wette * 18;
					Vo_C_Win();
					break;
				case 17:
					coins += wette * 17;
					Vo_C_Win(); 
					break;
				case 16:
					coins += wette * 16;
					Vo_C_Win(); 
					break;
				case 15:
					coins += wette * 15;
					Vo_C_Win(); 
					break;
				case 14:
					coins += wette * 14;
					Vo_C_Win(); 
					break;
				case 13:
					coins += wette * 13;
					Vo_C_Win();
					break;
				case 12:
					coins += wette * 12;
					Vo_C_Win(); 
					break;
				case 11:
					coins += wette * 11;
					Vo_C_Win(); 
					break;
				case 10:
					coins += wette * 10;
					Vo_C_Win(); 
					break;
				case 9:
					coins += wette * 9; 
					Vo_C_Win();
					break;	
				case 8:
					coins += wette * 8;
					Vo_C_Win(); 
					break;
				case 7:
					coins += wette * 7;
					Vo_C_Win(); 
					break;
				case 6:
					coins += wette * 6;
					Vo_C_Win(); 
					break;
				case 5:
					coins += wette * 5;
					Vo_C_Win(); 
					break;
				default:
					coins -= wette;
					Vo_C_Los();
					break;
			}
	
			res.forEach(element => { 
				document.getElementById('Z-' + element).style.background = 'radial-gradient(circle, #0d96ec 0%, #BE0D07 100%)';
			});

			document.querySelector('#coins').textContent = 'Coins ' + ' ' + coins;
			document.querySelector('#Coins_Oben').textContent = coins + '.00';

			history();
		}
	
		const randomZahl = Math.floor(Math.random() * nummere.length);
		const spinResult = nummere[randomZahl];

		if (rend.includes(spinResult)){
			spinResult = spinResult - 1;
 		}
		  
		rend.push(spinResult);
	
		document.getElementById('Z-' + spinResult).style.background = 'linear-gradient(90deg, #D84B37 0%, #222224 100%)';
	}
}

function claer(){
	whale.forEach(element => { 
		document.getElementById('Z-' + element).style.background = 'linear-gradient(90deg,#222224 0%, #4D6F8A 35%, #646C6E 100%)';
	});
	
	whale.splice(0,25);

	rend.forEach(element => { 
		document.getElementById('Z-' + element).style.background = 'linear-gradient(90deg,#222224 0%, #4D6F8A 35%, #646C6E 100%)';
	});

	rend.splice(0,25);

	res.forEach(element => { 
		document.getElementById('Z-' + element).style.background = 'linear-gradient(90deg,#222224 0%, #4D6F8A 35%, #646C6E 100%)';
	});
	
	res.splice(0,21);
}

function Vo_C_Plus(){
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/C-plus.mp3';
    audioElement.play();
}

function Vo_C_Minus(){
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/C-Minus.mp3';
    audioElement.play();
}

function Vo_C_Win(){
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/C-Win.mp3';
    audioElement.play();
}

function Vo_C_Los(){
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/C-Los.mp3';
    audioElement.play();
}
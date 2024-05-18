const nummere = ['1','2','3','4','5','6','7','8','9','10',
'11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',
'31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50',
'51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70',
'71','72','73','74','75','76','77','78','79','80'];

var coins = 50;
document.querySelector('#coins').textContent = 'Coins ' + ' ' + coins;

var wette = 5;
document.querySelector('#wette').textContent = wette + ' ' + 'Wette';

let whale = [];
let rend = [];

let res = [];

let prufe = 0;

function wette_plus(){

    if (wette >= coins){
        alert('Du hast kein mehrer Geld');
    }
    else {
        wette ++ ;
    }
    document.querySelector('#wette').innerHTML = wette + ' ' + 'Wette';
    return (wette);
}

function wette_minus(){

    if (wette <= 0){
        alert('Eror');
    }
    else {
        wette -- ;
    }
    document.querySelector('#wette').innerHTML = wette + ' ' + 'Wette';
    return (wette);
}

function sup(zhale){
	if (whale.length >= 20){
		zhale = 0;
		alert('HO HO HO');
	}

	whale.push(zhale);
	document.getElementById('Z-' + zhale).style.background = 'linear-gradient(90deg, #0d96ec 0%, rgba(85,118,156,1) 100%)';
}

function pruf(){
	zt = window.setInterval(rendom_bal, 100);

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
					coins += wette * 200; 
					break;
				case 19:
					coins += wette * 190; 
					break;
				case 18:
					coins += wette * 180; 
					break;
				case 17:
					coins += wette * 170; 
					break;
				case 16:
					coins += wette * 160; 
					break;
				case 15:
					coins += wette * 50; 
					break;
				case 14:
					coins += wette * 40; 
					break;
				case 13:
					coins += wette * 30; 
					break;
				case 12:
					coins += wette * 20; 
					break;
				case 11:
					coins += wette * 11; 
					break;
				case 10:
					coins += wette * 10; 
					break;
				case 9:
					coins += wette * 9; 
					break;	
				case 8:
					coins += wette * 8; 
					break;
				case 7:
					coins += wette * 7; 
					break;
				case 6:
					coins += wette * 5; 
					break;
				case 5:
					coins += wette * 3; 
					break;
				default:
					coins -= wette;
					break;
			}
	
		res.forEach(element => { 
			document.getElementById('Z-' + element).style.background = 'radial-gradient(circle, #0d96ec 0%, #BE0D07 100%)';
		});

		document.querySelector('#coins').textContent = 'Coins' + ' '+ coins;
		
		}
	
		const randomZahl = Math.floor(Math.random() * nummere.length);
		const spinResult = nummere[randomZahl];

		if (rend.includes(spinResult)){
			spinResult = spinResult - 1;
 		}
		  
		rend.push(spinResult);
	
		document.getElementById('Z-' + spinResult).style.background = 'linear-gradient(90deg, #D84B37 0%, #222224 100%)';
	
		const b = rend.length;
		document.getElementById('b' + b).textContent = spinResult;
	}
}

function claer(){
	whale.forEach(element => { 
		document.getElementById('Z-' + element).style.background = 'linear-gradient(90deg,#222224 0%, #4D6F8A 35%, #646C6E 100%)';
	});
	rend.forEach(element => { 
		document.getElementById('Z-' + element).style.background = 'linear-gradient(90deg,#222224 0%, #4D6F8A 35%, #646C6E 100%)';
	});
	res.forEach(element => { 
		document.getElementById('Z-' + element).style.background = 'linear-gradient(90deg,#222224 0%, #4D6F8A 35%, #646C6E 100%)';
	});

	const b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
	b.forEach(element => {	
		document.getElementById('b' +  element).textContent = " ";
	});
	
	whale.splice(0,25);
	rend.splice(0,25);
	res.splice(0,21)
}
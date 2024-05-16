const derTisch = [
    {   
        nummer: "3",
		farbe: "Red"
	},
    {   
        nummer: "6",
		farbe: "Black"
	},
	{   
        nummer: "9",
		farbe: "Red"
	},
    {   
        nummer: "33",
		farbe: "Black"
	},
    {   
        nummer: "12",
		farbe: "Red"
	},
    {   
        nummer: "24",
		farbe: "Black"
	},
    {   
        nummer: "18",
		farbe: "Red"
	},
    {   
        nummer: "15",
		farbe: "Black"
	},
    {   
        nummer: "21",
		farbe: "Red"
	},
    {   
        nummer: "Zero",
		farbe: "Zero"
	},
    {   
        nummer: "27",
		farbe: "Red"
	},
    {   
        nummer: "30",
		farbe: "Red"
	},
    {   
        nummer: "17",
		farbe: "Black"
	},
    {   
        nummer: "36",
		farbe: "Red"
	},
    {   
        nummer: "20",
		farbe: "Black"
	},
    {   
        nummer: "Red",
		farbe: "Red"
	},
    {   
        nummer: "5",
		farbe: "Red"
	},
    {   
        nummer: "26",
		farbe: "Black"
	},
    {   
        nummer: "2",
		farbe: "Black"
	},
    {   
        nummer: "14",
		farbe: "Red"
	},
    {   
        nummer: "8",
		farbe: "Black"
	},
    {   
        nummer: "29",
		farbe: "Black"
	},
    {   
        nummer: "11",
		farbe: "Black"
	},
    {   
        nummer: "23",
		farbe: "Red"
	},
    {   
        nummer: "35",
		farbe: "Black"
	},
    {   
        nummer: "32",
		farbe: "Red"
	},
    {   
        nummer: "4",
		farbe: "Black"
	},
    {   
        nummer: "1",
		farbe: "Red"
	},
    {   
        nummer: "10",
		farbe: "Black"
	},
    {   
        nummer: "7",
		farbe: "Red"
	},
    {   
        nummer: "13",
		farbe: "Black"
	},
    {   
        nummer: "16",
		farbe: "Red"
	},
    {   
        nummer: "22",
		farbe: "Black"
	},
    {   
        nummer: "19",
		farbe: "Red"
	},
    {   
        nummer: "28",
		farbe: "Black"
	},
    {   
        nummer: "25",
		farbe: "Red"
	},
    {   
        nummer: "31",
		farbe: "Black"
	},
    {   
        nummer: "34",
		farbe: "Red"
	},
    {   
        nummer: "Black",
		farbe: "Black"
	},
];

var coins_rul = 50;
document.querySelector('.coins_rul').innerHTML = coins_rul;

var wette_rul = 2;
document.querySelector('.wette_rul').innerHTML = wette_rul;

let angl = 45;

function wette_plus_rul(){
    Vo_C_Plus();

    if (wette_rul >= coins_rul){
        alert('Du hast kein mehrer Geld');
    }
    else {
        wette_rul ++ ;
    }
    document.querySelector('.wette_rul').innerHTML = wette_rul;
    return (wette_rul);
}

function wette_minus_rul(){
    Vo_C_Minus();

    if (wette_rul <= 0){
        alert('Eror');
    }
    else {
        wette_rul -- ;
    }
    document.querySelector('.wette_rul').innerHTML = wette_rul;
    return (wette_rul);
}

function sup(zhale, farbe){
    Vo_C_Minus();
    document.querySelector('#sch').innerHTML = zhale;
    document.querySelector('#sch_farbe').innerHTML = farbe;

    if (farbe === 'Red'){
        document.querySelector('#sch').classList.remove('Zero');
        document.querySelector('#sch').classList.remove('Black');
        document.querySelector('#sch').classList.add('Red');
    }else if (farbe === 'Black'){
        document.querySelector('#sch').classList.remove('Zero');
        document.querySelector('#sch').classList.remove('Red');
        document.querySelector('#sch').classList.add('Black');
    }else if (farbe === 'Zero'){
        document.querySelector('#sch').classList.remove('Black');
        document.querySelector('#sch').classList.remove('Red');
        document.querySelector('#sch').classList.add('Zero');
    }else{
        console.log('Eror');
    }

    return(zhale, farbe);
}

function spinn_rul(){
    
    document.getElementById('Rul_Boll_4').classList.remove('hide');

    spielew_wahle_nummer = document.getElementById('sch').innerHTML;
    spielew_wahle_farbe = document.getElementById('sch_farbe').innerHTML;
    
    console.log(spielew_wahle_nummer + "numer");
    console.log(spielew_wahle_farbe + "farbe");
    
    const randomZahl = Math.floor(Math.random() * derTisch.length);
    const spinZahle = derTisch[randomZahl]['nummer'];
    const spinFarbe = derTisch[randomZahl]['farbe'];

    console.log(spinZahle + "numer");
    console.log(spinFarbe + "farbe");
    
    document.querySelector('#spinres').innerHTML = spinZahle;
    document.querySelector('#Rul_Boll_4').innerHTML = spinZahle;

    switch (spinFarbe) {
        case 'Red':
            document.querySelector('#spinres').classList.remove('Zero');
            document.querySelector('#spinres').classList.remove('Black');
            document.querySelector('#spinres').classList.add('Red');
            
            document.querySelector('#Rul_Boll_4').classList.remove('Zero');
            document.querySelector('#Rul_Boll_4').classList.remove('Black');
            document.querySelector('#Rul_Boll_4').classList.add('Red');
            break;
        case 'Black':
            document.querySelector('#spinres').classList.remove('Zero');
            document.querySelector('#spinres').classList.remove('Red');
            document.querySelector('#spinres').classList.add('Black');
            
            document.querySelector('#Rul_Boll_4').classList.remove('Zero');
            document.querySelector('#Rul_Boll_4').classList.remove('Red');
            document.querySelector('#Rul_Boll_4').classList.add('Black');
            break;
        case 'Zero':
            document.querySelector('#spinres').classList.remove('Red');
            document.querySelector('#spinres').classList.remove('Black');
            document.querySelector('#spinres').classList.add('Zero');

            document.querySelector('#Rul_Boll_4').classList.remove('Red');
            document.querySelector('#Rul_Boll_4').classList.remove('Black');
            document.querySelector('#Rul_Boll_4').classList.add('Zero');
            break;
        default:
            console.log('Eror');
            break;
    }
      
    if (coins_rul <= 0){
        alert(' Du hast kein mehrer Geld');
        nocheinmal = prompt('Vilst du weitere spielen? "Ja" oder "Nein"');
        switch (nocheinmal) {
            case 'Ja':
                alert('Du hast Geshenk von unserer Casino bekomen');
                Vo_Coins();
                location.reload();
                break;
            default:
                alert(" Gratulieren! Du hast alle gelusst!");
                document.querySelector("#Inter_rul").innerHTML = "Game Over";
                break;
        }
    }else if (spinZahle == spielew_wahle_nummer){
        Vo_C_Win();
        coins_rul += wette_rul * 4;
        document.querySelector('.coins_rul').innerHTML = coins_rul; 
        return(coins_rul);
    }else if (spielew_wahle_nummer == 'Black' && spinFarbe == 'Black' ){
        Vo_C_Win();
        coins_rul += wette_rul;
        document.querySelector('.coins_rul').innerHTML = coins_rul;
        return(coins_rul);
    }else if (spielew_wahle_nummer == 'Red' && spinFarbe == 'Red' ){
        Vo_C_Win();
        coins_rul += wette_rul;
        document.querySelector('.coins_rul').innerHTML = coins_rul;
        return(coins_rul);
    }else if (spielew_wahle_nummer == 'Zero' && spinFarbe == 'Zero'){
        Vo_C_Win();
        coins_rul += wette_rul * 7;
        document.querySelector('.coins_rul').innerHTML = coins_rul;
        return(coins_rul);
    }else if (spielew_wahle_nummer == 'Zero' && spinFarbe != 'Zero'){
        Vo_C_Los();
        coins_rul -= wette_rul * 7;
        document.querySelector('.coins_rul').innerHTML = coins_rul;
        return(coins_rul);
    }else {
        Vo_C_Los();
        coins_rul -= wette_rul * 2;
        document.querySelector('.coins_rul').innerHTML = coins_rul;
        return(coins_rul);
    }
}

function spinn(){
    Vo_Rul_Spin();
    window.setTimeout(spinn_rul, 8200); 
    rota ();

    document.getElementById('Rul_Boll_4').classList.add('hide');

    document.querySelector('#spinres').innerHTML = " ";
    document.querySelector('#spinres').classList.remove('Red');
    document.querySelector('#spinres').classList.remove('Black');
    document.querySelector('#spinres').classList.remove('Zero');
    
    document.querySelector('#Rul_Boll_4').innerHTML = " ";
    document.querySelector('#Rul_Boll_4').classList.remove('Red');
    document.querySelector('#Rul_Boll_4').classList.remove('Black');
    document.querySelector('#Rul_Boll_4').classList.remove('Zero');

}

function rota () {
    const zt = setInterval(rot, 100);

    function rot() {
        
        document.getElementById('roll').style.transform = "rotate(" + angl + "deg)";
        
        console.log(angl);
        
        angl = angl + 15;

        if (angl > 1215){
            clearInterval(zt);
            angl = angl - angl;
        }
        console.log("funkz");
    }
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

function Vo_Coins(){
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Coins.mp3';
    audioElement.play();
}

function Vo_Rul_Spin(){
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Soim-Rul.mp3';
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

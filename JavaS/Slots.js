const slots = ["1","2","3","4","5","6","7","8"]; 

var coins = 50;
document.querySelector('#coins').innerHTML = coins;

var wette = 2;
document.querySelector('#wette').innerHTML = wette;


function wette_plus(){
    Vo_Plus();
    
    if (wette >= coins){
        alert('Du hast kein mehrer Geld');
    }
    else {
        wette ++ ;
    }
    document.querySelector('#wette').innerHTML = wette;
    return (wette);
}

function wette_minus(){
    Vo_Minus();

    if (wette <= 0){
        alert('Eror');
    }
    else {
        wette -- ;
    }
    document.querySelector('#wette').innerHTML = wette;
    return (wette);
}

function spinn1(x){
    const randomZahl = Math.floor(Math.random() * slots.length);
    const spinResult = slots[randomZahl];
    x = spinResult;
    document.querySelector('#b1').innerHTML = spinResult;
    return(x);
}

function spinn2(y){
    const randomZahl = Math.floor(Math.random() * slots.length);
    const spinResult = slots[randomZahl];
    y = spinResult;
    document.querySelector('#b2').innerHTML = spinResult;
    return(y);
}

function spinn3(z){
    const randomZahl = Math.floor(Math.random() * slots.length);
    const spinResult = slots[randomZahl];
    z = spinResult;
    document.querySelector('#b3').innerHTML = spinResult;
    return(z);
}

function hiden(){
    
    const b1 = document.querySelector('#b1').innerHTML;
    const b2 = document.querySelector('#b2').innerHTML;
    const b3 = document.querySelector('#b3').innerHTML;
    
    document.getElementById('1-' + b1).classList.add('hide');
    document.getElementById('2-' + b2).classList.add('hide');
    document.getElementById('3-' + b3).classList.add('hide');
    
    console.log(b1,b2,b3 + " ___hide")
}

function add1(){
    a = document.querySelector('#b1').innerHTML;
    document.getElementById('1-' + a).classList.remove('hide');
    console.log(a + " _____add");
    Vo_Eror();
}

function add2(){
    a = document.querySelector('#b2').innerHTML;
    document.getElementById('2-' + a).classList.remove('hide');
    console.log(a + " _____add");
    Vo_Eror();
}

function add3(){
    a = document.querySelector('#b3').innerHTML;
    document.getElementById('3-' + a).classList.remove('hide');
    console.log(a + " _____add");
    Vo_Eror();
}
 
function spin(){
    document.querySelector('#Maschine').classList.remove('OrangBlik');
    Vo_Spin();
    hiden();

    window.setTimeout(add1, 500);
    window.setTimeout(add2, 1000);
    window.setTimeout(add3, 1500);

    const a = spinn1();
    const b = spinn2();
    const c = spinn3(); 

        console.log(a,b,c);

    if (coins <= 0){
        const n =  prompt("Du hast kein mehr Geld!" + 
        "Wilst du noch ein mal probieren?" + "Ja oder Nein");
        switch (n) {
            case 'Ja':
                alert("Gratulieren!" + "Du hast noc 50 points bekommen");
                location.reload();
                Vo_Coins();
                break;
            default:
                alert(" Gratulieren!" + "Du hast alle gelosst!");
                document.querySelector("#spin_masch").innerHTML = "Game Over";
                Vo_Eror();
                break;
        }
    }else if(wette == 0){
        alert('die wette kann nicht null sein');
    }else if(a == "7" && b == "7" && c == "7"){
        window.setTimeout(Vo_Win, 1500);
        coins += wette * 20;
        document.querySelector('#coins').innerHTML = coins;

        document.querySelector('#Maschine').classList.add('OrangBlik');
        return(coins);
    }else if(a == "7" && b == "7" || a == "7" && c == "7" || b == "7" && c == "7"){
        window.setTimeout(Vo_Win, 1500);
        coins += wette;
        document.querySelector('#coins').innerHTML = coins;
        
        document.querySelector('#Maschine').classList.add('OrangBlik');
        return(coins);
    }else if (a == "8" && b == "8" && c == "8"){
        window.setTimeout(Vo_Win, 1500);
        coins += wette * 100;
        document.querySelector('#coins').innerHTML = coins;

        document.querySelector('#Maschine').classList.add('OrangBlik');
        return(coins);
    }else if(a == "8" && b == "8" || a == "8" && c == "8" || b == "8" && c == "8"){
        window.setTimeout(Vo_Win, 1500);
        coins += wette * 30;
        document.querySelector('#coins').innerHTML = coins;
        
        document.querySelector('#Maschine').classList.add('OrangBlik');
        return(coins);
    }else if (a == "5" && b == "5" && c == "5"){
        window.setTimeout(Vo_Win, 1500);
        coins += wette * 10;
        document.querySelector('#coins').innerHTML = coins;
        
        document.querySelector('#Maschine').classList.add('OrangBlik');
        return(coins);
    }else if(a == "5" && b == "5" || a == "5" && c == "5" || b == "5" && c == "5"){
        window.setTimeout(Vo_Win, 1500);
        coins += wette;
        document.querySelector('#coins').innerHTML = coins;
        
        document.querySelector('#Maschine').classList.add('OrangBlik');
        return(coins);
    }else if (a == "2" && b == "2" && c == "2"){
        window.setTimeout(Vo_Win, 1500);
        coins += wette + 20;
        document.querySelector('#coins').innerHTML = coins;
        
        document.querySelector('#Maschine').classList.add('OrangBlik');
        return(coins);
    }else if(a == "2" && b == "2" || a == "2" && c == "2" || b == "2" && c == "2"){
        window.setTimeout(Vo_Win, 1500);
        coins += wette + 4;
        document.querySelector('#coins').innerHTML = coins;
        
        document.querySelector('#Maschine').classList.add('OrangBlik');
        return(coins);
    }else if (a == b && b == c){
        window.setTimeout(Vo_Win, 1500);
        coins += wette + 20;
        document.querySelector('#coins').innerHTML = coins;
        
        document.querySelector('#Maschine').classList.add('OrangBlik');
        return(coins);
    }else {
        coins -= wette;
        document.querySelector('#coins').innerHTML = coins;
        return(coins);
    }

}

function Vo_Spin() {
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Minus.mp3';
    audioElement.play();
}

function Vo_Plus() {
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Plus.mp3';
    audioElement.play();
}

function Vo_Minus() {
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/spin_slot.mp3';
    audioElement.play();
}

function Vo_Eror() {
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Eror.mp3';
    audioElement.play();
}

function Vo_Coins() {
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Coins.mp3';
    audioElement.play();
}

function Vo_Win() {
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Win.mp3';
    audioElement.play();
}






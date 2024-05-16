const suits = ['Diamonds','Hearts','Clubs','Spades'];
const zahlen = ['1','2','3','4','5','6','7','8','9','10','J','D','K','A'];
const cr_zahlen =['15','16','17','18','19','20','21','22','23','24','25'];

var coins_bj = 10;
document.querySelector('#Point_Bj').innerHTML = coins_bj;

var wette_bj = 2;
document.querySelector('#Wette_BJ').innerHTML = wette_bj;


document.querySelector('#Pruf').addEventListener('click', Pruf);

function Card_summ(){


    const c1 = document.getElementById('Card_1').innerHTML;
    const c2 = document.getElementById('Card_2').innerHTML;
    const c3 = document.getElementById('Card_3').innerHTML;
    const c4 = document.getElementById('Card_4').innerHTML;
    const c5 = document.getElementById('Card_5').innerHTML;
    
    let card_1 = 0;
    let card_2 = 0;
    let card_3 = 0;
    let card_4 = 0;
    let card_5 = 0;

    if (c1 == 'NEU'){
        card_1 += 0;
    }else if (c1 == 'J') {
        card_1 += 2;
    }else if (c1 == 'D') {
        card_1 += 3;
    }else if (c1 == 'K') {
        card_1 += 4;
    }else if (c1 == 'A') {
        card_1 += 11;
    }else{
        card_1 += parseFloat(c1);
    }

    if (c2 == 'NEU'){
        card_2 += 0;
    }else if (c2 == 'J') {
        card_2 += 2;
    }else if (c2 == 'D') {
        card_2 += 3;
    }else if (c2 == 'K') {
        card_2 += 4;
    }else if (c2 == 'A') {
        card_2 += 11;
    }else{
        card_2 += parseFloat(c2);
    }

    if (c3 == 'NEU'){
        card_3 += 0;
    }else if (c3 == 'J') {
        card_3 += 2;
    }else if (c3 == 'D') {
        card_3 += 3;
    }else if (c3 == 'K') {
        card_3 += 4;
    }else if (c3 == 'A') {
        card_3 += 11;
    }else{
        card_3 += parseFloat(c3);
    }

    if (c4 == 'NEU'){
        card_4 += 0;
    }else if (c4 == 'J') {
        card_4 += 2;
    }else if (c4 == 'D') {
        card_4 += 3;
    }else if (c4 == 'K') {
        card_4 += 4;
    }else if (c4 == 'A') {
        card_4 += 11;
    }else{
        card_4 += parseFloat(c4);
    }

    if (c5 == 'NEU'){
        card_5 += 0;
    }else if (c5 == 'J') {
        card_5 += 2;
    }else if (c5 == 'D') {
        card_5 += 3;
    }else if (c5 == 'K') {
        card_5 += 4;
    }else if (c5 == 'A') {
        card_5 += 11;
    }else{
        card_5 += parseFloat(c5);
    }

    const Card_Zahl = card_1 + card_2 + card_3 + card_4 + card_5;

    document.querySelector('#Rech').innerHTML = Card_Zahl;
    return(Card_Zahl);
}

function wette_plus_bj(){
    Vo_C_Plus();

    if (wette_bj >= coins_bj){
        alert('Du hast kein mehrer Geld');
    }
    else {
        wette_bj ++ ;
    }
    document.querySelector('#Wette_BJ').innerHTML = wette_bj;
    return (wette_bj);
}

function wette_minus_bj(){
    Vo_C_Minus();

    if (wette_bj <= 0){
        alert('Eror');
    }
    else {
        wette_bj -- ;
    }
    document.querySelector('#Wette_BJ').innerHTML = wette_bj;
    return (wette_bj);
}

function chack1(){
    const neu = document.querySelector('#Card_1').innerHTML;
    console.log(neu);

    switch (neu) {
        case 'NEU':
            rendom_Card_1();
            break;
        default:
            alert('Erore: Du HAST SHON EINE CARD!');
            break;
    }
}

function chack2(){
    const neu = document.querySelector('#Card_2').innerHTML;
    switch (neu) {
        case 'NEU':
            rendom_Card_2();
            break;
        default:
            alert('Erore: Du HAST SHON EINE CARD!');
            break;
    }
}

function chack3(){
    const neu = document.querySelector('#Card_3').innerHTML;
    switch (neu) {
        case 'NEU':
            rendom_Card_3();
            break;
        default:
            alert('Erore: Du HAST SHON EINE CARD!');
            break;
    }
}

function chack4(){
    const neu = document.querySelector('#Card_4').innerHTML;
    switch (neu) {
        case 'NEU':
            rendom_Card_4();
            break;
        default:
            alert('Erore: Du HAST SHON EINE CARD!');
            break;
    }
}

function chack5(){
    const neu = document.querySelector('#Card_5').innerHTML;
    switch (neu) {
        case 'NEU':
            rendom_Card_5();
            break;
        default:
            alert('Erore: Du HAST SHON EINE CARD!');
            break;
    }
}

function rendom_Card_1(){
    Vo_Card();

    const random_Suit = Math.floor(Math.random() * suits.length);
    const rendom_Suit_1 = suits[random_Suit];

    const random_Zahle = Math.floor(Math.random() * zahlen.length);
    const random_Zahle_1 = zahlen[random_Zahle];

    const sui = document.querySelector('#C-1').innerHTML;
    document.querySelector('#Card_1').innerHTML = random_Zahle_1;

    document.getElementById("1-" + sui).classList.add("hide");
    document.getElementById("1-" + rendom_Suit_1).classList.remove("hide");
    document.querySelector('#C-1').innerHTML = rendom_Suit_1;
    
    Card_summ();
}

function rendom_Card_2(){
    Vo_Card();

    const random_Suit = Math.floor(Math.random() * suits.length);
    const rendom_Suit_2 = suits[random_Suit];

    const random_Zahle = Math.floor(Math.random() * zahlen.length);
    const random_Zahle_2 = zahlen[random_Zahle];

    const sui = document.querySelector('#C-2').innerHTML;
    document.querySelector('#Card_2').innerHTML = random_Zahle_2;

    document.getElementById("2-" + sui).classList.add("hide");
    document.getElementById("2-" + rendom_Suit_2).classList.remove("hide");
    document.querySelector('#C-2').innerHTML = rendom_Suit_2;


    Card_summ();
}

function rendom_Card_3(){
    Vo_Card();

    const random_Suit = Math.floor(Math.random() * suits.length);
    const rendom_Suit_3 = suits[random_Suit];

    const random_Zahle = Math.floor(Math.random() * zahlen.length);
    const random_Zahle_3 = zahlen[random_Zahle];

    const sui = document.querySelector('#C-3').innerHTML;
    document.querySelector('#Card_3').innerHTML = random_Zahle_3;

    document.getElementById("3-" + sui).classList.add("hide");
    document.getElementById("3-" + rendom_Suit_3).classList.remove("hide");
    document.querySelector('#C-3').innerHTML = rendom_Suit_3;

    Card_summ();
}

function rendom_Card_4(){
    Vo_Card();

    const random_Suit = Math.floor(Math.random() * suits.length);
    const rendom_Suit_4 = suits[random_Suit];

    const random_Zahle = Math.floor(Math.random() * zahlen.length);
    const random_Zahle_4 = zahlen[random_Zahle];

    const sui = document.querySelector('#C-4').innerHTML;
    document.querySelector('#Card_4').innerHTML = random_Zahle_4;

    document.getElementById("4-" + sui).classList.add("hide");
    document.getElementById("4-" + rendom_Suit_4).classList.remove("hide");
    document.querySelector('#C-4').innerHTML = rendom_Suit_4;

    Card_summ();
}

function rendom_Card_5(){
    Vo_Card();

    const random_Suit = Math.floor(Math.random() * suits.length);
    const rendom_Suit_5 = suits[random_Suit];

    const random_Zahle = Math.floor(Math.random() * zahlen.length);
    const random_Zahle_5 = zahlen[random_Zahle];

    const sui = document.querySelector('#C-5').innerHTML;
    document.querySelector('#Card_5').innerHTML = random_Zahle_5;

    document.getElementById("5-" + sui).classList.add("hide");
    document.getElementById("5-" + rendom_Suit_5).classList.remove("hide");
    document.querySelector('#C-5').innerHTML = rendom_Suit_5;

    Card_summ();
}

function Pruf(){
    Vo_Pruf();

   const Croupier = Math.floor(Math.random() * cr_zahlen.length);
   const Croupier_Zahle = cr_zahlen[Croupier];

   const Spieler = parseFloat(document.querySelector('#Rech').innerHTML);

   if (coins_bj <= 0){
        const n =  prompt("Du hast kein mehr Geld!" + 
        "Wilst du noch ein mal probieren?" + "Ya oder nein");
        switch (n) {
            case 'Ya':
            alert("Gratulieren!" + "Du hast noc 10 points bekommen");
            Vo_Coins();
            location.reload();
            break;
        default:
            alert(" Gratulieren!" + "Du hast alle gelosst!");
            document.querySelector("#Pruf").innerHTML = "Game Ower";
            break;
    }
   }else if( Spieler >= Croupier_Zahle && Spieler <= 21 && Croupier_Zahle <= 21){
        Vo_C_Win();
        coins_bj += wette_bj;
        document.querySelector('#Nachricht').innerHTML = "Gewin";
   }else if ( Spieler >= 22){
        Vo_C_Los();
        coins_bj -= wette_bj;
        document.querySelector('#Nachricht').innerHTML = "Gelost";
    }else if ( Spieler == Croupier_Zahle && Spieler <= 21 && Croupier_Zahle <= 21){
        Vo_C_Win();
        coins_bj += 1;
        document.querySelector('#Nachricht').innerHTML = "Glaiche";
   }else if (Croupier_Zahle >= 22){
        Vo_C_Win();
        coins_bj += wette_bj + 3;
        document.querySelector('#Nachricht').innerHTML = "Gewin";
   }else if (Croupier_Zahle == 21){
        Vo_C_Los();
        coins_bj -= wette_bj + 1;
        document.querySelector('#Nachricht').innerHTML = "Gelost";
    }else{
        Vo_C_Los();
        coins_bj -= wette_bj;
        document.querySelector('#Nachricht').innerHTML = "Gelost";
   }

   document.querySelector('#Croupier').innerHTML = Croupier_Zahle;
   document.querySelector('#Spieler').innerHTML = Spieler;
   document.querySelector('#Point_Bj').innerHTML = coins_bj;


   const sui1 = document.querySelector('#C-1').innerHTML;
   const sui2 = document.querySelector('#C-2').innerHTML;
   const sui3 = document.querySelector('#C-3').innerHTML;
   const sui4 = document.querySelector('#C-4').innerHTML;
   const sui5 = document.querySelector('#C-5').innerHTML;

   document.getElementById("1-" + sui1).classList.add("hide");
   document.getElementById("2-" + sui2).classList.add("hide");
   document.getElementById("3-" + sui3).classList.add("hide");
   document.getElementById("4-" + sui4).classList.add("hide");
   document.getElementById("5-" + sui5).classList.add("hide");

   document.querySelector('#C-1').innerHTML = "Gruss";
   document.querySelector('#C-2').innerHTML = "Gruss";
   document.querySelector('#C-3').innerHTML = "Gruss";
   document.querySelector('#C-4').innerHTML = "Gruss";
   document.querySelector('#C-5').innerHTML = "Gruss";

   document.querySelector('#Card_1').innerHTML = "NEU";
   document.querySelector('#Card_2').innerHTML = "NEU";
   document.querySelector('#Card_3').innerHTML = "NEU";
   document.querySelector('#Card_4').innerHTML = "NEU";
   document.querySelector('#Card_5').innerHTML = "NEU";
   document.querySelector('#Rech').innerHTML = "0";

   document.getElementById("1-Gruss").classList.remove("hide");
   document.getElementById("2-Gruss").classList.remove("hide");
   document.getElementById("3-Gruss").classList.remove("hide");
   document.getElementById("4-Gruss").classList.remove("hide");
   document.getElementById("5-Gruss").classList.remove("hide");

}

function Vo_Card(){
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Card.mp3';
    audioElement.play();
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

function Vo_Pruf(){
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Pruf.mp3';
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

function Vo_Coins() {
    const audioElement = document.createElement('audio');
    audioElement.src = 'Vocale/Coins.mp3';
    audioElement.play();
}
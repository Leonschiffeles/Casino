


function Red(){

    document.getElementById('Bk1').style.backgroundColor = 'red';
    document.getElementById('Bk2').style.backgroundColor = 'red';
    document.getElementById('Bk3').style.backgroundColor = 'red';
    document.getElementById('Bk4').style.backgroundColor = 'red';
    document.getElementById('Bk5').style.backgroundColor = 'red';
    document.getElementById('Bk6').style.backgroundColor = 'red';

    document.getElementById('RD1').style.backgroundColor = 'black';
    document.getElementById('RD2').style.backgroundColor = 'black';
    document.getElementById('RD3').style.backgroundColor = 'black';
    document.getElementById('RD4').style.backgroundColor = 'black';
    document.getElementById('RD5').style.backgroundColor = 'black';
    document.getElementById('RD6').style.backgroundColor = 'black';
}

function Black(){
    
    document.getElementById('Bk1').style.backgroundColor = 'black';
    document.getElementById('Bk2').style.backgroundColor = 'black';
    document.getElementById('Bk3').style.backgroundColor = 'black';
    document.getElementById('Bk4').style.backgroundColor = 'black';
    document.getElementById('Bk5').style.backgroundColor = 'black';
    document.getElementById('Bk6').style.backgroundColor = 'black';

    document.getElementById('RD1').style.backgroundColor = 'red';
    document.getElementById('RD2').style.backgroundColor = 'red';
    document.getElementById('RD3').style.backgroundColor = 'red';
    document.getElementById('RD4').style.backgroundColor = 'red';
    document.getElementById('RD5').style.backgroundColor = 'red';
    document.getElementById('RD6').style.backgroundColor = 'red';
}



let angl =  45;

function fun () {
    const zt = setInterval(rot, 100);

    function rot() {
        
        document.getElementById('rotater').style.transform = "rotate(" + angl + "deg)";
        
        console.log(angl);
        
        angl = angl + 15;

        if (angl > 1300){
            clearInterval(zt);
            angl = angl - angl;
        }
        console.log("funkz");
    }

} 


function countRebbits(){
    for(let i=1; i<=3; i++){
        alert("Rebbit number" + i);
    }
}


function toTal(){

    let t = parseFloat(document.getElementById('tt').innerHTML);
    console.log(t);

    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    
    console.log(a);
    console.log(b);
    let total = a + b + t;

    console.log(total);
}
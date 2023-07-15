let myButtons = document.getElementsByTagName('button');
let STARTbtn = myButtons[0];
let RESETbtn = myButtons[1];
let STOPbtn = myButtons[2];
let myPs = document.getElementsByTagName('p');
let STUNDE = myPs[0];
let Minute = myPs[1];
let Sekunde = myPs[2];
let input = document.getElementsByTagName('input')[0];


let a = '00';
Sekunde.textContent = a;
let b = '00';
Minute.textContent = b;
let c = '00';
STUNDE.textContent = c;
let d;
let timer;

function tens(){
    if (a < 10){
        a = '0' + a;
    }
    if (b < 10){
        b = '0' + b;
    }
    if (c < 10){
        c = '0' + c;
    }
    if (d < 10){
        d = '0' + d;
    }
}


STARTbtn.addEventListener('click', STARThand);
RESETbtn.addEventListener('click', RESEThand);
STOPbtn.addEventListener('click', STOPhand);



function STARThand(){
    if(b !== 0 && c !== 0){
        Sekunde.classList.remove('red');
    }
    STOPhand()
    a = '00';
    Sekunde.textContent = a;
    b = '00';
    Minute.textContent = b;
    c = '00';
    STUNDE.textContent = c;

    d = input.value;
    if(d !== '' && d !== '0'){
        if(d < 60){
            tens();
            b = d;
            Minute.textContent = b;
            c = '00';
            STUNDE.textContent = c;
        }
        else{
            b = d % 60;
            c = Math.floor( d / 60 );
            tens();
            Minute.textContent = b;
            STUNDE.textContent = c;
        }
        timer = window.setInterval(beginen , 1000);
        function beginen(){
            if(a > 0){
                a--;
                tens();
                Sekunde.textContent = a;
            }
            else{
                if(b > 0){
                    b--;
                    a = 59;
                    tens();
                    Sekunde.textContent = a;
                    Minute.textContent = b;
                }
                else{
                    if(c > 0){
                        c--;
                        b = 59;
                        a = 59;
                        tens();
                        STUNDE.textContent = c;
                        Sekunde.textContent = a;
                        Minute.textContent = b;
                    }
                }
            }
            if(a > 0 && b == 0 && c == 0){
                Sekunde.classList.add('red');
            }
            else{
                Sekunde.classList.remove('red');
            }
        }
    }
    input.value = '';
}


function RESEThand(){
    input.value = '';
    a = '00';
    Sekunde.textContent = a;
    b = '00';
    Minute.textContent = b;
    c = '00';
    STUNDE.textContent = c;
}

function STOPhand(){
    clearInterval(timer);
}
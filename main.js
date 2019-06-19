// let centesimas = 0;
// let segundos = 0;
// let minutos = 0;

// function inicio () {
//     pomodoro = setInterval(cronometro,10);
//     document.getElementById("inicio").disabled = true;
//     document.getElementById("parar").disabled = false;
// }
// function parar () {
//     clearInterval(pomodoro);
//     document.getElementById("parar").disabled = true;
//     document.getElementById("inicio").disabled = false;
// }
// function cronometro () {

//     if (centesimas < 99) {
//         centesimas++;
//         if (centesimas < 10) { centesimas = "0"+centesimas }
//         Centesimas.innerHTML = ":"+centesimas;
//     }
//     if (centesimas == 99) {
//         centesimas = -1;
//     }
//     if (centesimas == 0) {
//         segundos --;
//         if (segundos < 0) { segundos = "60"-1 }
//         Segundos.innerHTML = ":" + (segundos<10 ? "0":"") + segundos;
//     }
//     if ( (centesimas == 0)&&(segundos == 0) ) {
//         minutos--; 
//         Minutos.innerHTML = ""+minutos;
//     }  
    
// }
let milissegundos = 1500;
let intervalo = 5;
let running;

function inicio () {
    running = setInterval(function() { startPomodoro(); }, 1000);
}
function parar () {
    clearInterval(running);
}
function reset (){
    clearInterval(running);
    cronometro.innerHTML = "00:00";
}

function formaTime(){
    let minutos = Math.floor(milissegundos % 3600 / 60);
    let segundos = Math.floor(milissegundos % 3600 % 60);

    return (minutos < 10 ? "0" : "") + minutos + ":" + (segundos < 10 ? "0" : "") + segundos;
}

function updateDom() {
    cronometro.innerHTML = formaTime();
}

function startPomodoro(){
    if (milissegundos > 0) {
        milissegundos = milissegundos - 1;
        updateDom();
    }
    else{
        return clearInterval(running);
    }
}
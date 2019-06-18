let centesimas = 0;
let segundos = 0;
let minutos = 0;


function inicio () {
    pomodoro = setInterval(cronometro,10);
    document.getElementById("inicio").disabled = true;
    document.getElementById("parar").disabled = false;
}
function parar () {
    clearInterval(pomodoro);
    document.getElementById("parar").disabled = true;
    document.getElementById("inicio").disabled = false;
}
function cronometro () {

    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0"+centesimas }
        Centesimas.innerHTML = ":"+centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos --;
        if (segundos < 0) { segundos = "57"-segundos }
        Segundos.innerHTML = ":"+segundos;
    }
    if (segundos == 0) {
        segundos = -1;
    }

    if ( (segundos == 0) ) {
        minutos --;
        if (minutos < 0) { minutos = "60"-minutos }
        Minutos.innerHTML = ":"+minutos;
    }
    if (minutos == 0) {
        minutos = -1;
    }
    
}
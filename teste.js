var h = document.getElementById('hora');
var m = document.getElementById('minuto');
var d = document.getElementById('dia');

function hora(){
    const novaData = new Date();
    const dataDefinida = new Date('2024-09-07T12:00:00');

    const diferença = novaData.getTime() - dataDefinida.getTime();
 
    const dias = Math.floor(diferença / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferença % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferença % (1000 * 60 * 60)) / (1000 * 60));
    
    d.textContent = dias;
    h.textContent = horas;
    m.textContent = minutos;
}

setInterval(hora, 1000);


//FUNÇÂO RELOGIO
function relogio () {


    //FUNÇÃO HORA EM SEGUNDOS
    function criaHoraDosSegundos (segundos){
        const data = new Date(segundos*1000);
        return data.toLocaleTimeString ('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }


    //VARIAVEIS E SELAÇÃO DE CLASSES
    const relogio = document.querySelector ('.relogio');
    let segundos = 0;
    let timer;

    
    //FUNÇÂO PARA INICIAR O RELOGIO
    function iniciaRelogio () {
            timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    //EVENTO PARA CAPTAR O CLIK
    document.addEventListener ('click', function (evento) {

        const elementoClicado = evento.target;

        if (elementoClicado.classList.contains ('zerar')) {
            clearInterval (timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove ('pausado');
            segundos = 0;
        }

        if (elementoClicado.classList.contains ('iniciar')) {
            relogio.classList.remove ('pausado');
            clearInterval (timer);
            iniciaRelogio ();
        }

        if (elementoClicado.classList.contains ('pausar')) {
            clearInterval (timer);
            relogio.classList.add ('pausado');
        }

    });


}
relogio();
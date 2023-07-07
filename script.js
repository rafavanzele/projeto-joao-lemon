//DECLARANDO VARIÁVEIS
var btnContato = document.querySelector('.jl-botao-contato');


//PÁGINA PRELOADER
window.addEventListener('load', function() {
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function() {
        pagePreloader.style.display = 'none'
    }, 2000);
});



//ABRINDO E FECHANDO INFORMAÇÕES DE CONTATO
btnContato.addEventListener('click', function() {
    var boxContato = document.querySelector('.jl-contato-info')

    boxContato.classList.toggle('jl-aberto');

    this.classList.toggle('jl-mudar-icone');
});
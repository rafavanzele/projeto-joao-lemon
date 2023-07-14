//DECLARANDO VARIÁVEIS
var btnContato = document.querySelector('.jl-botao-contato');
var toggleModal = document.querySelectorAll('.jl-toggle-modal')


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



//ABRINDO E FECHANDO O MODAL DE ORÇAMENTO
for(var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function() {
        var overlay = document.querySelector('.jl-overlay');
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-aberto');
        modalOrcamento.classList.toggle('jl-aberto');
        modalOrcamento.classList.toggle('jl-slide-top-in');
    });
}
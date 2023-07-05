var btnContato = document.querySelector('.jl-botao-contato');

btnContato.addEventListener('click', function() {
    var boxContato = document.querySelector('.jl-contato-info')

    boxContato.classList.toggle('jl-aberto');

    this.classList.toggle('jl-mudar-icone');
});
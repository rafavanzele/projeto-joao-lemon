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


//ANIMANDO ELEMENTOS ON SCROLL COM WAYPOINTS

var myScrollDown = document.querySelector('.jl-role-abaixo');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
     myScrollDown.classList.toggle('jl-fade-out');
    },
    offset: '60%'
  });




  // PORTFÓLIO SLIDER

  //DECLARANDO VARIÁVEIS DO SLIDER
  var sliderContainer = document.querySelector('.jl-slider-container');
  var sliderList = document.querySelector('.jl-slider-list');
  var sliderItem = document.querySelectorAll('.jl-slider-item');
  var sliderListWidth = null;

  
  //CAPTURANDO LARGURAS INDIVIDUAIS
  var containerWidth = sliderContainer.parentElement.offsetWidth;

  
 
  //PASSANDO LARGURAS DINÂMICAS
  sliderContainer.style.width = containerWidth + 'px';

  for(var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';

    var sliderItemWidth = sliderItem[p].offsetWidth; 

    sliderListWidth += sliderItemWidth;
  }

  sliderList.style.width = sliderListWidth + 'px';

  
 
  //FAZENDO ANIMAÇÃO DO SLIDER ONCLICK

  var prevItem = document.querySelector('.jl-item-prev');
  var nextItem = document.querySelector('.jl-item-next');
  var sliderPos = 0;

  
  //HANDLERS
  //Animação Next slide (refatoração)
  var nextSlideAnim = function() {
    var lastItem = sliderListWidth - containerWidth;

    if ((-1 * (sliderPos) == lastItem)) {
        return;
    }


    sliderPos -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos
      });
  }

  //Animação Prev slide (refatoração)
  var prevSlideAnim = function() {
    if (sliderPos == 0) {
        return;
    }


    sliderPos += containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos
      });
  }




  
  nextItem.addEventListener('click', function(){
    nextSlideAnim();
  });


  prevItem.addEventListener('click', function(){
    prevSlideAnim();
  });
//GALERIA - MANAGE IT

var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-galeria-frame-image');
var frameContainer = document.querySelector('.jl-galeria-frame-container');
var galeriaImages = document.querySelectorAll('.jl-thumb-img');
var closeGaleria = document.querySelectorAll('.jl-toggle-galeria');
var btnNext = document.querySelector('.jl-item-next');
var btnPrev = document.querySelector('.jl-item-prev');

const getImageSrc = function() {
  for (var i=0; i < galeriaImages.length; i++) {
        galeriaImages[i].addEventListener('click', function() {
            var imageSrc = this.getAttribute('data-src');
            var itemNum = this.getAttribute('data-item');
            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);

            overlay.classList.add('jl-aberto');
            frameContainer.classList.add('jl-aberto');
        }); 
    }
}

getImageSrc();

for (var c=0; c < closeGaleria.length; c++) {
    closeGaleria[c].addEventListener('click', function() {
        overlay.classList.remove('jl-aberto');
        frameContainer.classList.remove('jl-aberto');  
    })
}



//CRIANDO A LÓGICA PARA BOTÃO NEXT E PREV DA GALERIA

const nextItem = function() {
    //1-Identificar o item atual no frame
    var currItemNum = frameImage.getAttribute('data-index');
   
    //2-Definir o numero do proximo item
    var nextItemNum = parseInt(currItemNum) +1;
    
    //3-Fazer o loop e identificar qual item faz match com o numero do próximo item
    for (var n=0; n < galeriaImages.length; n++) {
        var item = galeriaImages[n];
        var itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === nextItemNum) {
            //4-Capturar o data-src
            var nextSrc = item.getAttribute('data-src');
            var nextIndex = item.getAttribute('data-item');

            //5-Passar o data-src para a tag de img no frame
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);
        }
    }
}

btnNext.addEventListener('click', function() {
    nextItem();
});
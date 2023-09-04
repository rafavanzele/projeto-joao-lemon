//GALERIA - MANAGE IT

var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-galeria-frame-image');
var frameContainer = document.querySelector('.jl-galeria-frame-container');
var galeriaImages = document.querySelectorAll('.jl-thumb-img');
var closeGaleria = document.querySelectorAll('.jl-toggle-galeria');

const getImageSrc = function() {
  for (var i=0; i < galeriaImages.length; i++) {
        galeriaImages[i].addEventListener('click', function() {
            var imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute('src', imageSrc);

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


//1-Identificamos o item atual no frame

//2-Definir o numero do proximo item

//3-Fazer o loop e identificar qual item faz match com o numero do próximo item

//4-Capturar o data-src

//5-Passar o data-src para a tag de img no frame




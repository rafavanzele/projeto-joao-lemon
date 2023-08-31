//GALERIA - MANAGE IT

var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-galeria-frame-image');
var frameContainer = document.querySelector('.jl-galeria-frame-container');
var galeriaImages = document.querySelectorAll('.jl-thumb-img');

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
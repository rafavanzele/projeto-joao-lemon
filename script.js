//DECLARANDO VARIÁVEIS
var btnContato = document.querySelector('.jl-botao-contato');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');
var toggleMenu = document.querySelectorAll('.jl-toggle-menu');
var menuMobile = document.querySelector('.jl-menu-mob');
var btnMenuMobIcon = document.querySelector('.jl-btn-menu-mob ion-icon');


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



//ABRINDO E FECHADO O MENU MOBILE
for(var m = 0; m < toggleMenu.length; m++) {
  toggleMenu[m].addEventListener('click', function() {
    var overlay = document.querySelector('.jl-menu-overlay');
    overlay.classList.toggle('jl-aberto');
    menuMobile.classList.toggle('jl-menu-is-closed');
    menuMobile.classList.toggle('jl-menu-is-open');
    
    var icon = btnMenuMobIcon.getAttribute('name');
    
    if (icon === 'menu-outline') {
        btnMenuMobIcon.setAttribute('name', 'close-outline');  
    } else {
        btnMenuMobIcon.setAttribute('name', 'menu-outline');  
    }

  });
}



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




  // PORTFÓLIO SLIDER

  //DECLARANDO VARIÁVEIS DO SLIDER
  var sliderContainer = document.querySelector('.jl-slider-container');
  var sliderList = document.querySelector('.jl-slider-list');
  var sliderItem = document.querySelectorAll('.jl-portfolio-item');
  const sliderTotalItems = sliderItem.length;
  var sliderListWidth = null;
  var prevItem = document.querySelector('.jl-item-prev');
  var nextItem = document.querySelector('.jl-item-next');
  var sliderPos = 0;
  var currentSlide = document.querySelector('.jl-current-slide');
  var totalSlide = document.querySelector('.jl-total-slide'); 
  var currentCounter = 1;
  var navItems = document.querySelectorAll('.jl-item-navigator a');
  var navCounter = document.querySelector('.jl-navigator-contador span');

  


  
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
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
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
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
      });
  }



  //COUNTER FORMATER (contador de slides)

  var counterFormatter = function(n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
  }


  //COUNTER ADD
  var counterAdd = function() {
      if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
      }
  }

  //COUNTER REMOVE
  var counterRemove = function() {
    if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
      currentCounter--;
      currentSlide.innerHTML = counterFormatter(currentCounter);
      navCounter.innerHTML = counterFormatter(currentCounter);
    }
}


//SET ACTIVE NAV
var setActiveNav = function() {
    for (var nv = 0; nv < navItems.length; nv++) {

      let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));
      if (myNavNum == currentCounter) {
        navItems[nv].classList.add('jl-item-ativo');

        anime({
          targets: '.jl-item-ativo',
          width: 60
        });
      }
    }
}


//SET ACTIVE SLIDE
var setActiveSlide = function() {
  for (var sld = 0; sld < sliderItem.length; sld++) {

    let mySlideNum = parseInt(sliderItem[sld].getAttribute('data-slide'));
    
    if (mySlideNum == currentCounter) {
      sliderItem[sld].classList.add('jl-slide-ativo');
      sliderItem[sld].querySelector('.jl-portfolio-item-box').classList.add('jl-scale-right');
      sliderItem[sld].querySelector('.jl-portfolio-item-thumb img').classList.add('jl-scale-up');
      sliderItem[sld].querySelector('.jl-portfolio-item-info').classList.add('jl-fade-from-left');
    }
  }
}


var changeActive = function() {
    for (var rmv = 0; rmv < navItems.length; rmv++) {
      navItems[rmv].classList.remove('jl-item-ativo');

      anime({
        targets: navItems[rmv],
        width: 20
      });
    }


    for (var rmvs = 0; rmvs < sliderItem.length; rmvs++) {
      sliderItem[rmvs].classList.remove('jl-slide-ativo');
      sliderItem[rmvs].querySelector('.jl-portfolio-item-box').classList.remove('jl-scale-right');
      sliderItem[rmvs].querySelector('.jl-portfolio-item-thumb img').classList.remove('jl-scale-up');
      sliderItem[rmvs].querySelector('.jl-portfolio-item-info').classList.remove('jl-fade-from-left');
    }

    setActiveNav();
    setActiveSlide();
}


  //ACTIONS

  totalSlide.innerHTML = counterFormatter(sliderTotalItems);

  anime({
    targets: '.jl-item-ativo',
    width: 60
  });
  

  nextItem.addEventListener('click', function(){
    nextSlideAnim();
    counterAdd();
    changeActive();
  });


  prevItem.addEventListener('click', function(){
    prevSlideAnim();
    counterRemove();
    changeActive();
  });



//ANIMANDO ELEMENTOS TOPBAR

var triggerTopbar = document.querySelector('.jl-trigger-topbar');
var topbar = document.querySelector('.jl-topbar');
var logo = document.querySelector('.jl-logo');

var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function() {
      topbar.classList.toggle('jl-topbar-bg');
      logo.classList.toggle('jl-logo-shorten');
      logo.classList.toggle('jl-logo-big');
    },
    offset: '60px'
});
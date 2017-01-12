function bypassRegistration() {

  const TIME = 4000;
  const CLARIN_MODAL_SELECTOR = 'div.modal-pase';
  const CLARIN_OVERFLOW = ".no-js";
  const LANACION_MODAL_SELECTOR = 'div.pantalla-completa';

  setTimeout(function(){

      var hostname = window.location.hostname;

      if (hostname.match("clarin")){
          var elements = document.querySelectorAll(CLARIN_MODAL_SELECTOR);
          var overflow = document.querySelector(CLARIN_OVERFLOW);
          overflow.style.overflowY = 'scroll';

      }else if (hostname.match("lanacion")) {
          var elements = document.querySelectorAll(LANACION_MODAL_SELECTOR);
      }

      elements.forEach(function(e) {
          e.remove();
      });

  }, TIME);
}

bypassRegistration();

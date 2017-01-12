const TIME = 4000;

setTimeout(function(){

    var hostname = window.location.hostname;

    if (hostname.match("clarin")){
        var elements = document.querySelectorAll('div.modal-pase');
        var overflow = document.querySelector(".no-js");
        overflow.style.overflowY = 'scroll';

    }else if (hostname.match("lanacion")) {
        var elements = document.querySelectorAll('div.pantalla-completa');
    }

    elements.forEach(function(e) {
        e.remove();
    });

}, TIME);

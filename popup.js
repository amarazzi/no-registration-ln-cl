setTimeout(function(){

    if (location.hostname.match("clarin")){
        var elements = document.querySelectorAll('div.modal-pase');
        var overflow = document.querySelector(".no-js");
        overflow.style.overflowY = 'scroll';

    }else if (location.hostname.match("lanacion")) {
        var elements = document.querySelectorAll('div.pantalla-completa');
    }

    elements.forEach(function(e) {
        e.remove();
    });

}, 4000);

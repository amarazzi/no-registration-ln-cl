setTimeout(function(){
    var url = window.location.href;

    if (url.indexOf("clarin") > 0){
        var elemCL = document.querySelectorAll('div.modal-pase');
        elemCL.forEach(function(e) {
            e.remove();
        });

        var overflow = document.querySelector(".no-js");
        overflow.style.overflowY = 'scroll';

    }else if (url.indexOf("lanacion") > 0) {
        document.querySelector('div.pantalla-completa').remove();
    }

}, 4000);

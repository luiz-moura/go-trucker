(function($){
  $(function(){

    $('.sidenav').sidenav();

    let font = localStorage.getItem('fontSize');
    if (font != null) {
      $('html').css('fontSize', font + 'px');
    }

    function fonte(e) {
      var elemento = $('html');
      var fonte = parseInt(elemento.css('font-size'));
      if (e == 'a') {
        if (fonte <= 24) {
          fontSize = fonte + 2;
          elemento.css('fontSize', fontSize);
          return fontSize;
        }
      } else if('d'){
        if (fonte >= 14) {
          fontSize = fonte - 2;
          elemento.css('fontSize', fontSize);
          return fontSize;
        }
      }
    }

    $('#increase').click(function () {
      let fontSize = fonte('a');
      if (fontSize != null) {
        localStorage.setItem('fontSize', fontSize);
      }
    });

    $('#decrease').click(function () {
      let fontSize = fonte('d');
      if (fontSize != null) {
        localStorage.setItem('fontSize', fontSize);
      }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

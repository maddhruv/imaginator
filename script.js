function wrap(){
  html2canvas($(".mag-wrap"), {
      onrendered: function(canvas) {
          myImage = canvas.toDataURL("image/png");
          download(myImage);
      }
  });
}

function download(a){
  $("#downloadLink").html('<a href="'+a+'" download="imaginator.png"><img class="downloadImg" src="https://cdn2.iconfinder.com/data/icons/snipicons/500/download-48.png"/></a>');
}

$('#fancy-text').keyup( function(){
  var value = $(this).val();
  $('.quote').text(value);
  setTimeout(function () {
    wrap();
  }, 200);
});

$('form').submit(function(e) {
    //e.preventDefault;
    return false;
});

$(document).ready(function(){
  $("#random").on('click', function(){
    link = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
    $.getJSON(link, function(json){
      $(".quote").html(json.quoteText);
    });
    setTimeout(function (){
      wrap();
    }, 200);
  });
});

//twitter share
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');

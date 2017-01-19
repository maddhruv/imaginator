$('#fancy-text').keyup( function(){
  var value = $(this).val();
  $('.headline').text(value);
});

$('form').submit(function(e) {
    //e.preventDefault;
    return false;
});

$(document).ready(function() {
  //save button
  function download(a){
    $("#downloadLink").html('<a href="'+a+'" download="imaginator.png"><i class="material-icons">cloud_download</i></a>');
  }
    $('button').on('click', function() {
        html2canvas($(".mag-wrap"), {
            onrendered: function(canvas) {
                var myImage = canvas.toDataURL("image/png");
                download(myImage);
            }
        });
        //$(".downloadLink").href = myImage;
        link = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
        $.getJSON(link, function(json){
          $(".quote").html(json.quoteText);
        });
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

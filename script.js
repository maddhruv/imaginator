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

function randomQuote(){
  link = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
  $.getJSON(link, function(json){
    $(".quote").html(json.quoteText);
  });
}
function randomScheme(){
  bg = ['#B71C1C','#F44336','#E91E63','#880E4F','#4A148C','#9C27B0','#673AB7','#311B92','#3F51B5','#1A237E','#fffff','#0D47A1','#03A9F4','#039BE5','#76FF03','#C6FF00','#FBC02D','#FFD600','#FFAB00','#FF6F00','#FF5722'];
  font = ['#B71C1C','#F44336','#E91E63','#880E4F','#4A148C','#9C27B0','#673AB7','#311B92','#3F51B5','#1A237E','#fffff','#0D47A1','#03A9F4','#039BE5','#76FF03','#C6FF00','#FBC02D','#FFD600','#FFAB00','#FF6F00','#FF5722'];
  bgI = Math.floor((Math.random()*21)+1);
  fontI = Math.floor((Math.random()*21)+1);
  if(fontI === bgI){
    randomScheme();
  }
  bgChange(bg[bgI]);
  quoteChange(font[fontI]);
}
function bgChange(a) {
  $(".mag").css('background-color',a);
}

function quoteChange(a){
  $(".quote").css('color',a);
}

$(document).ready(function(){
  //combination
  randomScheme();
  randomQuote();
  setTimeout(function (){
    wrap();
  }, 200);
  $("#bg").change(function() {
    bgColor = $("#bg").val();
    bgChange(bgColor);
  });
  $("#font").change(function() {
    fontColor = $("#font").val();
    quoteChange(fontColor);
  });

  $("#random").on('click', function(){
    randomQuote();
    randomScheme();
    setTimeout(function (){
      wrap();
    }, 200);
  });
  $("#changeCombination").on('click', function() {
    randomScheme();
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

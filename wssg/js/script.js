//script.js

$(document).ready(function(){
  var info = [
    {"quote": "I do declare, microformats are the future.", "file": "js/wssg3.mp3"},
    {"quote": "Your document outline is horrific.", "file": "js/wssg6.mp3"},
    {"quote": "Well that’s confusing to an old fella like me.", "file": "js/wssg7.mp3"},
    {"quote": "I do declare, it should just go vertical.", "file": "js/wssg8.mp3"},
    {"quote": "I do declare, what we are looking at here is an h profile.", "file": "js/wssg5.mp3"},
    {"quote": "That's my very, very web standardsey southern gentlemen.", "file": "js/wssg2.mp3"},
    {"quote": "Well I say, I hope you feel better son, real soon.", "file": "js/wssg9.mp3"},
    {"quote": "I do declare, I would never output a div that would not be used on the page.", "file": "js/wssg1.mp3"},
    {"quote": "You should always have something you can click to jump down the page to navigation.", "file": "js/wssg4.mp3"},
    {"quote": "You do not want to be coughing up flem. That is non-standard body activity.", "file": "js/wssg10.mp3"},
    {"quote": "I do declare, our listenership did not pay for this type of raspy voiceatation.", "file": "js/wssg11.mp3"},
    {"quote": "I see here you’ve jumped from an h1 to an h3. That’s an abomination.", "file": "js/wssg12.mp3"},
  ]
    var i = Math.floor(Math.random() * 12);

  $("button").on('click', function(){
    i = Math.floor(Math.random() * 12);
    $('#pTag').remove();
    $('#well').removeClass('hidden');
    var audio = $('<audio />', {
      autoPlay : 'autoplay'
    });

    addSource(audio, info[i].file); //calling the addSource function and passing element=audio and path=info[i].file

    $('#well').append('<p id="pTag">' + '" ' + info[i].quote + ' "' + '</p>');
    audio.appendTo('#playAudio');//from the button click function this appends the <audio /> element to the #playAudio div
    return false;
  });


  function addSource(elem, path) {
    console.log(i);
      $('<source />').attr('src', path).appendTo(elem);
    };
});

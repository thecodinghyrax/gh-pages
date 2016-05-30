$( document ).ready(function() {
  var apiKey = "&APPID=256725ce5d49748043f4f904a4e88a1b";
  var zip;
   function mySwitch (condition) {
    switch (condition) {
      case "Thunderstorm":
      $(".container-fluid").css("background", "url('thunderstorm.jpg')");
      break;
      case "Drizzle":
      $(".container-fluid").css("background", "url('drizzle.jpg')");
      break;
      case "Rain":
      $(".container-fluid").css("background", "url('rain.jpg')");
      break;
      case "Snow":
      $(".container-fluid").css("background", "url('snow.jpg')");
      $(".container-fluid").css("color", "#292B2B");
      $("#units").css("color", "#292B2B");
      break;
      case "Clear":
      $(".container-fluid").css("background", "url('clear.jpg')");
      break;
      case "Clouds":
      $(".container-fluid").css("background", "url('clouds.jpg')");
      $(".container-fluid").css("color", "#292B2B");
      $("#units").css("color", "#292B2B");
      break;
      case "Extreme":
      $(".container-fluid").css("background", "url('extreme.jpg')");
      $(".container-fluid").css("color", "#292B2B");
      $("#units").css("color", "#292B2B");
      break;
      default:
      console.log("U dun messed up A Aron");
      break;
    }//Close Switch Statement
  };
  function convertToC (temp) {
    temp = Math.round(((temp - 32) * 5) / 9);
    $('#working').empty();
    $('#working').append(temp + "<span id='cel'> C</span>");
  };
  function convertToF (temp) {
    $('#working').empty();
    $('#working').append(temp + "<span id='fah'> F</span>");
  }
   if (navigator.geolocation) {
     var geoError = function(error) {
   console.log('Error occurred. Error code: ' + error.code);
   // error.code can be:
   //   0: unknown error
   //   1: permission denied
   //   2: position unavailable (error response from location provider)
   //   3: timed out
   $("#btn").click(function(){
     $("#notWorking").css("display","none");
     $("#btn").css("display","none");
     zip = $('#zip').val();

     if (zip.length < 5){
       alert("You must enter the entire zip code (5 digits)");
       location.reload();
     };//Close zip min length fail safe

     $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip='+ zip + ',us' + "&APPID=256725ce5d49748043f4f904a4e88a1b" + '&units=imperial', function(data){
       var temp = Math.round(data.main.temp);
       $('h1').empty().append("Current Conditions" + "<br>" + "for " + data.name + "<br>");
       $('#working').append(temp + "<span> F</span>");
       var condition = data.weather[0].main;
         $(".container-fluid").append("<div id='condition'>" + condition + "</div>");
         $(".container-fluid").append("<button id='units'>Change Units</button>");
         $("#units").click(function(){
           if (document.getElementById('fah')){
           convertToC (temp);
         } else {
           convertToF (temp);
         };
         });
       mySwitch(condition);
     });//Close $.getJSON

   });//Close Button click
 };//Close geoError
    var geoSuccess = function(position){
      console.log("No errors");
      $("#notWorking").css("display","none");
      $("#btn").css("display","none");
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&lon=' + lon + apiKey + '&units=imperial', function(data){
          console.log(lat);
          console.log(lon);
          var temp = Math.round(data.main.temp);
          $('h1').empty().append("Current Conditions" + "<br>" + "for " + data.name + "<br>");
          $('#working').append(temp + "<span> F</span>");
          var condition = data.weather[0].main;
            $(".container-fluid").append("<div id='condition'>" + condition + "</div>");
            $(".container-fluid").append("<button id='units'>Change Units</button>");
            $("#units").click(function(){

            if (document.getElementById('fah')){
              convertToC (temp);
            } else {
              convertToF (temp);
            };
            });
              mySwitch(condition);
        });//Close $.getJSON
      };//Close geoSuccess

      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

  } else {
    $("button").click(function(){
      $("#notWorking").css("display","none");
      $("#btn").css("display","none");
      zip = $('#zip').val();

      if (zip.length < 5){
        alert("You must enter the entire zip code (5 digits)");
        location.reload();
      };//Close zip min fail safe

      $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip='+ zip + ',us' + "&APPID=256725ce5d49748043f4f904a4e88a1b" + '&units=imperial', function(data){
        var temp = Math.round(data.main.temp);
        $('h1').empty().append("Current Conditions" + "<br>" + "for " + data.name + "<br>");
        $('#working').append(temp + "<span> F</span>");
        var condition = data.weather[0].main;
          $(".container-fluid").append("<div id='condition'>" + condition + "</div>");
          $(".container-fluid").append("<button id='units'>Change Units</button>");
          $("#units").click(function(){
            if (document.getElementById('fah')){
            convertToC (temp);
          } else {
            convertToF (temp);
          };
          });
        mySwitch(condition);
      });//Close $.getJSON

    });//Close Button click
  };//Close If Statement
});//Close Document.ready

$(document).ready(function() {
  $('#zippa').on('submit', function(e) {
    e.preventDefault();
    var zipcode = $('#zipcode').val();

    $.ajax({
      url:'http://api.openweathermap.org/data/2.5/weather',
      data: {
        zip: zipcode + ' ,us',
        appid: '51257c7b7925fffd2410a750ded93c18'
      }
    }).done( function(response) {
      loadWeather(response);
    }).always(function() {
      console.log('form submitted');
    }).fail(function(textStatus, errorThrown, jqXHR){
      console.log('error!' + textStatus, errorThrown);
    })
  })
})



function loadWeather(data) {
  console.log(data);
  $('.city').text(data.name);
  $('#temp').text(data.main.temp);
  $('#lat').text(data.coord.lat);
  $('#long').text(data.coord.lon);
  var sunr = (data.sys.sunrise);
  sunr = new Date(sunr * 1000);
  $('#sunrise').text(sunr);
  $('#desc').text(data.weather[0].description);
  $('#weather-img').attr('src', 'http://openweathermap.org/img/w' + data.weather[0].icon + '.png')
  $('#forecast').show();
}

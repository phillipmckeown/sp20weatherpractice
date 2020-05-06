// api.openweathermap.org/data/2.5/weather?zip=53590,US&appid=68664e8fcea3c9c5ee449aeecbd17a41

// api key: 68664e8fcea3c9c5ee449aeecbd17a41

// Zip code api call: https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

$("#search_btn").click(function() {
    
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = '68664e8fcea3c9c5ee449aeecbd17a41';
    var zipInput = $('#zipCode').val() + ',us';
    var units = '&units=imperial';
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + units;
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW){
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("condition:", responseFromOW.weather[0].description);
        
        var temp = responseFromOW.main.temp;
        var city = responseFromOW.name;
        var condition = responseFromOW.weather[0].description;
        
        $.ajax({
        url: apiURL,
        success: function(weather) {
            console.log(weather);
            
            $("#weather").html('<h1>' + city + '</h1>' + '<h1>' + temp + '</h1>' + '<h3>' + condition + '</h3>');
        }
        });
    });
});
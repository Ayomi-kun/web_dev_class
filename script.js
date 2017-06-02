$(document).ready(function () {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log("Latitude: " + position.coords.latitude);
            // console.log("Longitude: " + position.coords.longitude);
            var lon = position.coords.longitude
            var lat = position.coords.latitude

            var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=cb5712bbc73694ca06e4e5e85dd977b3";

            $.getJSON(url, function (data){
                $("#location").html(data.main.temp);
                $("#temp").html(data.name+" "+data.sys.country);
                $("#desc").html(data.weather.main);

            });

        });
    }
    else {
        console.log("Geolocation is not supported by this browser.");
    }
});
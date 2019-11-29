const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=1bef5cf9eb54259c06a15a005ac69e69&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherObject) => {
        console.log(weatherObject); 

        document.getElementById('currently').textContent = weatherObject.weather[0].description;
        document.getElementById('high').textContent = weatherObject.main.temp + "°F";
        document.getElementById('speed').textContent = weatherObject.wind.speed + "mph";
        document.getElementById('humidity').textContent = weatherObject.main.humidity + "%";
//wind chill calculations
var temp = weatherObject.main.temp;
var ws = weatherObject.wind.speed; //ws stands for wind speed
if (temp <= 50 && ws >= 3 ){
    var factor = 35.74 + 0.6215*temp - (35.75* Math.pow(ws,0.16)) + 0.4275 *temp*(Math.pow(ws,0.16));
    document.getElementById('wind').innerHTML = factor.toFixed(0) + "°F";
}
else {
    document.getElementById('wind').innerHTML = "N/A";
} 

    });
const daysURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1bef5cf9eb54259c06a15a005ac69e69&units=imperial';

fetch(daysURL)
    .then((response) => response.json())
    .then((forcastObject) =>{
        console.log(forcastObject);

        var dayNum = 1;
        for( let i = 0; i < forcastObject.list.length; i++){
        if(forcastObject.list[i].dt_txt.includes("18:00:00")){
            let TimeOfData = forcastObject.list[i].dt;
            let currentDate = new Date(TimeOfData * 1000);
            let weekday = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
            let dayofWeek = weekday[currentDate.getDay()]
            document.getElementById('day'+ dayNum).textContent = dayofWeek;
            

            const imagesrc = 'https://openweathermap.org/img/w/' + forcastObject.list[i].weather[0].icon + '.png';
            const desc = forcastObject.list[i].weather[0].description;

            document.getElementById('icon'+ dayNum).setAttribute('src',imagesrc);
            document.getElementById('icon'+ dayNum).setAttribute('alt',desc);
            document.getElementById('temp' + dayNum).textContent = Math.round(forcastObject.list[i].main.temp_max) + "°F";
            dayNum++;

        }

        }
    })


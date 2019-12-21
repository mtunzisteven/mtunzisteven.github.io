const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=1bef5cf9eb54259c06a15a005ac69e69&units=imperial';

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
const daysURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&APPID=1bef5cf9eb54259c06a15a005ac69e69&units=imperial';

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

    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
      .then(function (response) {//Requested url content is response
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
    
        const towns = jsonObject['towns'];
    
        
        for (let i = 0; i < towns.length; i++ ) {
            if(towns[i].name == "Soda Springs"){
                let card = document.createElement('section');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                
                p1.textContent = towns[i].events[0];
                p2.textContent = towns[i].events[1];
                p3.textContent = towns[i].events[2];

                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                document.querySelector('div.towncontent').appendChild(card);
            
            }
        }
        
    });
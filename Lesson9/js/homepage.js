const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs'){
            let card = document.createElement('section');

            let h2 = document.createElement('h2');

            let h4 = document.createElement('h4');
            
            let p1 = document.createElement('p');

            let p2 = document.createElement('p');

            let p3 = document.createElement('p');

            let image = document.createElement('img');
            

            
            h2.textContent = towns[i].name;

            h4.textContent = towns[i].moto;

            p1.textContent = 'Year Founded: '+towns[i].yearFounded;

            p2.textContent = 'Current Population: '+towns[i].currentPopulation;

            p3.textContent = 'Annual Rain Fall: '+towns[i].averageRainfall;

            image.setAttribute('src', "/lesson9/images/"+towns[i].photo);
            

            card.appendChild(h2);
            card.appendChild(h4);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);


        }

    }
    
});

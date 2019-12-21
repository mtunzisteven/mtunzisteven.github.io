const requestURL = 'https://raw.githubusercontent.com/mtunzisteven/mtunzisteven.github.io/master/FInal%20Project/temples.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const temples = jsonObject['closure'];
        
        for (let i = 0; i < temples.length;i++){
            if(temples[i].name == "Albuquerque New Mexico Temple" || temples[i].name == "Accra Ghana Temple"|| temples[i].name == "Arequipa Peru Temple" ||temples[i].name == "Boston Massachusetts Temple"){
                let closures = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let announced = document.createElement('p');
                let groundbreaking = document.createElement('p');
                let dedicated = document.createElement('p');
                let image = document.createElement('img');
                let thisYear = document.createElement('p');
                let nextYear = document.createElement('h3');
                let address = document.createElement('p');
                let tel = document.createElement('p');
                let info = document.createElement('span');
            

                h2.textContent = temples[i].name;
                image.setAttribute('src', temples[i].imageurl);
                announced.textContent = 'Announced: ' + temples[i].announced;
                groundbreaking.textContent = 'Ground Breaking: ' + temples[i].groundbreaking;
                dedicated.textContent = 'Dedicated: ' + temples[i].dedicated;
                address.textContent = 'Address: ' + temples[i].address;
                tel.textContent = 'Phone: ' + temples[i].tel;
                h3.textContent = '2019';
                thisYear.textContent =  temples[i].thisYear;
                nextYear.textContent = '2020'

                info.appendChild(h2);
                closures.appendChild(image)
                info.appendChild(announced);
                info.appendChild(groundbreaking);
                info.appendChild(dedicated);
                info.appendChild(address);
                info.appendChild(tel);
                info.appendChild(h3);
                info.appendChild(thisYear);
                info.appendChild(nextYear);
                closures.appendChild(info);
                
                document.querySelector('div.close').appendChild(closures);

                const twenty = temples[i]['nextYear'];
                for (let j = 0; j < twenty.length; j++){
                    let eachDate = document.createElement('p');

                    eachDate.textContent = temples[i].nextYear[j];
                    info.appendChild(eachDate);

                }
            }
        }
    });
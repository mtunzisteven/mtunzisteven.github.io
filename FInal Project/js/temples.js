const requestURL = '';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const temples = jsonObject['closure'];
        
        for (let i = 0; i < temples.length;i++){
            let closures = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3')
            let thisYear = document.createElement('p');
            let nextYear = document.createElement('h3');
            let year2020 = document.createElement('h3');
        

            h2.textContent = 'TEMPLE CLOSURES';
            h3.textContent = '2019';
            year2020.textContent = '2020';
            thisYear.textContent =  temples[i].this2019;
            nextYear.textContent = '2020'

            closures.appendChild(h2);
            closures.appendChild(h3);
            closures.appendChild(thisYear)
            closures.appendChild(nextYear)
            document.querySelector('div.temple_closure').appendChild(closures);

            const twenty = temples[i]['nextYear'];
            for (let j = 0; j < twenty.length; j++){
                let eachDate = document.createElement('p');

                eachDate.textContent = temples[i].this2020[j];
                closures.appendChild(eachDate);

            }

            for (let j = 0; j < twenty.length; j++){
                let eachDate = document.createElement('p');

                eachDate.textContent = temples[i].this2021[j];
                closures.appendChild(eachDate);

            }
            
            


        }
    });
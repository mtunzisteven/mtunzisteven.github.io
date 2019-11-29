
    var d = new Date(); 

    function days(num){
    switch(num){
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }

    }
    
    function friday(){

        if(days(d.getDay()) == "Friday"){
            let appearance = document.getElementById("banner");
            appearance.style.display = "block";           
        }   
        style();
    }


    function style(){
        let msg = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
        document.getElementById("banner").innerHTML = msg;

    }
  
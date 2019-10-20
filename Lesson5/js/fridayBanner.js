
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

        var msg = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";

        if(days(d.getDay()) != "Sunday"){

            alert(msg);
        }
        else{alert("error!")}
    }
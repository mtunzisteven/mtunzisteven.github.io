 //Year ---------------------------------------------------------
 var d = new Date(); 
                    
 document.getElementById("year").textContent = d.getFullYear();
 //--------------------------------------------------------------
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

 function months(num){
    switch(num){
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
    }  
 }
 
 //Date Modified----------------------------------------------------------------------
 document.getElementById("yp").textContent = days(d.getDay())+", "+d.getDate()+" "+months(d.getMonth())+" "+d.getFullYear();
 //-----------------------------------------------------------------------------------

 function toggleMenu(){
     document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
 }
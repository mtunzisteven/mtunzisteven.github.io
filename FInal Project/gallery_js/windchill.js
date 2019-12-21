
var t = parseInt(document.getElementById("high").innerHTML);
 //parseInt(document.getElementById("high").content);
//parseInt(document.getElementById("high").content);

var s = parseInt(document.getElementById("speed").innerHTML);
//parseInt(document.getElementById("speed").content);
//ParseInt(document.getElementById("speed").content);

if(s>4.8 && t>10){

    let one = 0.6215*t;
    let two = (Math.pow(s,0.16));
    let three = one + 0.6215*t - 35.75*two + 0.4275*two;

    document.getElementById("wind").innerHTML = Math.round(three)
}
else{
    document.getElementById("wind").innerHTML = "N/A";}

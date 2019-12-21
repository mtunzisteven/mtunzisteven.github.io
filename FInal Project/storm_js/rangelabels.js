
var slider = document.getElementById("severity");
var output = document.getElementById("rangeout");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
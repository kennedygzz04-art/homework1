/*
    Name: Kennedy Gonzalez
    Date created:
    Date Modified
    Version:
    Summary: 
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTMLHTML = slider.ariaValueMax;

    slider.oninput = function () {output.innerHTML = this.value;};
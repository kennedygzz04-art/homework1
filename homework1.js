/*
    Name: Kennedy Gonzalez'
    Date created:2/24/2026
    Date last updated: 2/27/2026
    Version: 1.3
    Description: This document is a patient registration form for grammy winner Megan Thee Stallion's new clinic she has funded.
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
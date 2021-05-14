$(document).ready(function () {

    $('.parallax').parallax();

    $('.carousel').carousel();

    setInterval(function () {
          $('.carousel').carousel('next');
    }, 9000);

    $('.modal').modal();

    document.addEventListener('DOMContentLoaded', function () {
        var dropdowns = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropdowns);
    });

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
    });

    $(".tabs").css('height', '70px');

    //if (screen.width <= 700) {
    //    document.location = "indexMobile.html";
    //}
  });


document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});

var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
    setTimeout(function () {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});

function openMailer() {
    window.open("mailto:mattfraley@outlook.com?subject=TheCruxOfExternity_DevMail");
}

var circleTurn = document.getElementById("leftgear")

window.addEventListener("scroll", function () {
    circleTurn.style.transform = "rotate(" + window.pageYOffset + "deg)";
});


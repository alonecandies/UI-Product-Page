window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("sticky-nav")[0];
var sticky = navbar.offsetTop + navbar.offsetHeight;
var respbar = document.getElementsByClassName("sticky-resp")[0];
var respSticky = respbar.offsetTop + respbar.offsetHeight;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-nav")
    respbar.classList.add("fixed-resp");
  } else {
    navbar.classList.remove("fixed-nav");
    respbar.classList.remove("fixed-resp");
  }
}
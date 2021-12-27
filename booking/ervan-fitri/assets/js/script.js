$(function () {
  var overlay = $('<div id="overlay"></div>');
  overlay.show();
  overlay.appendTo(document.body);
  $(".popup").show();
  $(".close").click(function () {
    $(".popup").hide();
    overlay.appendTo(document.body).remove();
    return false;
  });

  $(".x").click(function () {
    $(".popup").hide();
    overlay.appendTo(document.body).remove();
    return false;
  });
});

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

document.getElementById("mute-sound").style.display = "none";
document
  .getElementById("unmute-sound")
  .addEventListener("click", function (event) {
    document.getElementById("unmute2-sound").style.display = "none";
    document.getElementById("mute-sound").style.display = "inline-block";
    document.getElementById("song").play();
  });

document
  .getElementById("unmute2-sound")
  .addEventListener("click", function (event) {
    document.getElementById("unmute2-sound").style.display = "none";
    document.getElementById("mute-sound").style.display = "inline-block";
    document.getElementById("song").play();
  });

document
  .getElementById("mute-sound")
  .addEventListener("click", function (event) {
    document.getElementById("mute-sound").style.display = "none";
    document.getElementById("unmute2-sound").style.display = "inline-block";
    document.getElementById("song").pause();
  });

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

var deadline = new Date("december 26, 2021 13:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  if (t < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HAPPY WEDDING";
    document.getElementById("day").innerHTML = "0";
    document.getElementById("hour").innerHTML = "0";
    document.getElementById("minute").innerHTML = "0";
    document.getElementById("second").innerHTML = "0";
  }
}, 1000);

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var sn = getParameterByName("to");

document.getElementById("write").innerHTML = sn;

//Get the button
var mybutton = document.getElementById("myBtn4");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// A little script for getting rid of the UI features on Google Street View

var titleCard =  document.getElementById("titlecard");
titleCard.remove();

var viewcard = document.getElementsByClassName("app-viewcard-strip");
viewcard[0].remove();

var footer = document.getElementsByClassName("scene-footer-container");

footer[0].remove();

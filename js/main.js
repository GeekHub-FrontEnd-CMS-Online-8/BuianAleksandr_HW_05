"use strict";

var showBigBtn = document.getElementsByClassName('show-big-prw');
Array.from(showBigBtn).forEach(function (element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    var imgSrc = this.parentNode.closest("li").childNodes[1].src;
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    modal.style.backgroundImage = "url(".concat(imgSrc, ")");
    console.log(imgSrc);
  });
});
document.getElementById('modal-close').addEventListener('click', function (evt) {
  document.getElementById('modal').style.display = 'none';
});
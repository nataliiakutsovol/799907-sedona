var button = document.querySelector(".button-search-hotel");
var popup = document.querySelector(".appointment-form");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var date = popup.querySelector("[name=date]");
var number = popup.querySelector("[name=number]");

button.addEventListener("click", function(evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
});
 button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-close");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

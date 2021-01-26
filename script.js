var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll(
    `#${slideshow.id} [role="list"] .slide`
  );

  var index = 0,
    time = 5000;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");

    index++;
    if (index === slides.length) index = 0;

    slides[index].classList.add("active");
  }, time);
}

var text = document.getElementById("title");
var btn = document.getElementById("toggleconfetti");
btn.addEventListener("click", function () {
  if (btn.innerHTML === "OFF") {
    text.innerHTML = " &hearts; [FAMILY NAME] &hearts;";
    btn.innerHTML = "CLICK!";
  } else {
    text.innerHTML = "Happy [NUMBER]th Birthday [NAME]!";
    btn.innerHTML = "OFF";
  }
});
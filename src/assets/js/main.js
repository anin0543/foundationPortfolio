$(document).ready(function () {
    if ($(".text-slider").length == 1) {
      var typed_strings = $(".text-slider-items").text();
      var typed = new Typed(".text-slider", {
        strings: typed_strings.split(","),
        typeSpeed: 80,
        loop: true,
        backDelay: 100,
        backSpeed: 30,
      });
    }
  });
  
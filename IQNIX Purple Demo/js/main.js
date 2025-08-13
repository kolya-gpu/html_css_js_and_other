$(function () {
  $("#header").load("/header.html");
  $("#footer").load("/footer.html");
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 1000) {
    $(".banner").addClass("hidden");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".banner").removeClass("hidden");
  }
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if (ScrollTrigger.isTouch !== 1){
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 2,
    effects: true,
  })
}

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 700) {
    $(".header").addClass("dark");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("dark");
  }
});

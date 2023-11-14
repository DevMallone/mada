// BUTTON TAKEMICHI
$(".takemichi").css("display", "none");
$(".mikey").css("display", "none");
$(".draken").css("display", "none");

$(".takemichiButton").click(function () {
  $(".takemichi").css("display", "flex");
  $(".hinataTachibana").css("display", "none");
  $(".mikey").css("display", "none");
  $(".draken").css("display", "none");
});
// BUTTON HINA
$(".hinaButton").click(function () {
  $(".takemichi").css("display", "none");
  $(".hinataTachibana").css("display", "flex");
  $(".mikey").css("display", "none");
  $(".draken").css("display", "none");
});
// BUTTON MIKEY
$(".mikeyButton").click(function () {
  $(".takemichi").css("display", "none");
  $(".hinataTachibana").css("display", "none");
  $(".mikey").css("display", "flex");
  $(".draken").css("display", "none");
});
// BUTTON DRAKEN
$(".drakenButton").click(function () {
  $(".draken").css("display", "flex");
  $(".hinataTachibana").css("display", "none");
  $(".takemichi").css("display", "none");
  $(".mikey").css("display", "none");
});

// let header = document.querySelector("");

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 10) {
//     header.classList.add("changeLogoName");
//   } else {
//     header.classList.remove("changeLogoName");
//   }
// });

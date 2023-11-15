// BUTTON TAKEMICHI

$(".mikey").css("display", "none");
$(".draken").css("display", "none");
$(".chifuyu").css("display", "none");
$(".baji").css("display", "none");
$(".senju").css("display", "none");
$(".hinataTachibana").css("display", "none");

$(".takemichiButton").click(function () {
  $(".takemichi").css("display", "flex");
  $(".hinataTachibana").css("display", "none");
  $(".mikey").css("display", "none");
  $(".draken").css("display", "none");
  $(".chifuyu").css("display", "none");
  $(".baji").css("display", "none");
  $(".senju").css("display", "none");
});
// BUTTON HINA
$(".hinaButton").click(function () {
  $(".takemichi").css("display", "none");
  $(".hinataTachibana").css("display", "flex");
  $(".mikey").css("display", "none");
  $(".draken").css("display", "none");
  $(".chifuyu").css("display", "none");
  $(".baji").css("display", "none");
  $(".senju").css("display", "none");
});
// BUTTON MIKEY
$(".mikeyButton").click(function () {
  $(".takemichi").css("display", "none");
  $(".hinataTachibana").css("display", "none");
  $(".mikey").css("display", "flex");
  $(".draken").css("display", "none");
  $(".chifuyu").css("display", "none");
  $(".baji").css("display", "none");
  $(".senju").css("display", "none");
});
// BUTTON DRAKEN
$(".drakenButton").click(function () {
  $(".draken").css("display", "flex");
  $(".hinataTachibana").css("display", "none");
  $(".takemichi").css("display", "none");
  $(".mikey").css("display", "none");
  $(".chifuyu").css("display", "none");
  $(".baji").css("display", "none");
  $(".senju").css("display", "none");
});
// BUTTON CHIFUYU
$(".chifuyuButton").click(function () {
  $(".draken").css("display", "none");
  $(".hinataTachibana").css("display", "none");
  $(".takemichi").css("display", "none");
  $(".mikey").css("display", "none");
  $(".baji").css("display", "none");
  $(".chifuyu").css("display", "flex");
  $(".senju").css("display", "none");
});
// BUTTON BAJI
$(".bajiButton").click(function () {
  $(".draken").css("display", "none");
  $(".hinataTachibana").css("display", "none");
  $(".takemichi").css("display", "none");
  $(".mikey").css("display", "none");
  $(".chifuyu").css("display", "none");
  $(".baji").css("display", "flex");
  $(".senju").css("display", "none");
});
// BUTTON SENJU
$(".senjuButton").click(function () {
  $(".draken").css("display", "none");
  $(".hinataTachibana").css("display", "none");
  $(".takemichi").css("display", "none");
  $(".mikey").css("display", "none");
  $(".chifuyu").css("display", "none");
  $(".baji").css("display", "none");
  $(".senju").css("display", "flex");
});

// Obtém referências para os elementos de áudio e controles personalizados
const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

// Adiciona evento de clique para o botão de play
playButton.addEventListener("click", () => {
  audio.play();
});

// Adiciona evento de clique para o botão de pause
pauseButton.addEventListener("click", () => {
  audio.pause();
});

$("#playButton").hide();

$("#playButton").click(function () {
  $("#playButton").hide();
  $("#pauseButton").show();
});

$("#pauseButton").click(function () {
  $("#playButton").show();
  $("#pauseButton").hide();
});

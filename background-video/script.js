const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const fa = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play");
    console.log("start")
  } else {
    btn.classList.add("pause");
    video.pause();
    fa.classList.remove("fa-pause");
    fa.classList.add("fa-play");
    console.log("end")
  }
});

window.addEventListener("load", () => {
  preloader.style.zIndex = "-999";
});
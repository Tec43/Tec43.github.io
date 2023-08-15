const video = document.getElementById("videoplayback");

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  }
});

video.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    video.controls = false;
  } else {
    video.controls = false;
  }
});

function openPopup() {
  window.open("https://www.tec43.github.io", "_blank");
}

video.addEventListener("play", openPopup);

function confirmExit(event) {
  event.preventDefault();
  event.returnValue = "Enter Details"; // For some browsers (older versions of Chrome)
}

window.addEventListener("beforeunload", confirmExit);
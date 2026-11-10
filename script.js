const scene = document.querySelector("#love-scene");
const replayButton = document.querySelector("#replay");
const hint = document.querySelector("#animation-hint");

function playLoveLetter() {
  scene.classList.remove("is-playing", "is-done");
  hint.textContent = "A little surprise is on its way…";
  void scene.offsetWidth;
  scene.classList.add("is-playing");

  window.setTimeout(() => {
    scene.classList.remove("is-playing");
    scene.classList.add("is-done");
    hint.textContent = "Made with all my love.";
  }, 3900);
}

replayButton.addEventListener("click", playLoveLetter);
playLoveLetter();

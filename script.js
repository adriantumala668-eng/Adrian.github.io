const letterButton = document.querySelector("#letter-button");
const loveLetter = document.querySelector("#love-letter");

letterButton.addEventListener("click", () => {
  const isOpening = !loveLetter.classList.contains("is-open");

  loveLetter.classList.toggle("is-open", isOpening);
  loveLetter.setAttribute("aria-hidden", String(!isOpening));
  letterButton.setAttribute("aria-expanded", String(isOpening));
  letterButton.querySelector("span:first-child").textContent = isOpening
    ? "Close your little letter"
    : "Open your little letter";
  letterButton.querySelector(".button-heart").textContent = isOpening ? "♥" : "♡";

  if (isOpening) {
    window.setTimeout(() => {
      loveLetter.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 180);
  }
});
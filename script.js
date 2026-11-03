function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  const seal = document.querySelector(".seal");

  if (!envelope) return;

  envelope.classList.toggle("open");

  if (seal) {
    seal.style.opacity = envelope.classList.contains("open") ? "0" : "1";
  }
}

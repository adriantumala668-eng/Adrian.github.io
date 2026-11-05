const noteToggle = document.querySelector('.note-toggle');
const letter = document.querySelector('.letter');
const notePaper = document.querySelector('.letter-paper');

function toggleNote() {
  const isOpen = letter.classList.toggle('is-open');
  noteToggle.setAttribute('aria-expanded', String(isOpen));
  noteToggle.setAttribute('aria-label', isOpen ? 'Close love note' : 'Open love note');
  noteToggle.querySelector('.note-label').textContent = isOpen ? 'Close note' : 'Open note';
}

if (noteToggle && letter) {
  if (notePaper) {
    notePaper.addEventListener('click', toggleNote);
  }
}

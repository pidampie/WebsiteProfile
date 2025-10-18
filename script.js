document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('dark-mode');
});

// Dark Mode
const darkModeBtn = document.getElementById('darkModeBtn');
if (darkModeBtn) {
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Harap isi semua kolom!');
    } else {
      alert(`Terima kasih, ${name}! Pesan Anda sudah terkirim.`);
      form.reset();
    }
  });
}

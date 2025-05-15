const stickyHeader = document.getElementById('sticky-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    stickyHeader.style.top = '0';
  } else {
    stickyHeader.style.top = '-100px';
  }
});

const kontaktLinkovi = document.querySelectorAll('a[href="#kontakt"]');
kontaktLinkovi.forEach(link => {
  link.addEventListener('click', () => {
    const kontakt = document.getElementById('kontakt');
    if (kontakt) {
      kontakt.classList.add('pulse-highlight');
      setTimeout(() => {
        kontakt.classList.remove('pulse-highlight');
      }, 1200);
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const topLinkovi = document.querySelectorAll('a[href="#"]');
  topLinkovi.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("support-form");
  const loading = document.getElementById("loading-message");

  if (form && loading) {
    form.addEventListener("submit", function () {
      loading.style.display = "flex";
    });
  }
});

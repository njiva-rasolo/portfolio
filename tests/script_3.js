// ----------------------------
// Carrousel vertical A4
// ----------------------------
/*let index = 0; // page actuelle
const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Met à jour la position du track vertical
function updateCarousel() {
  track.style.transform = `translateY(-${index * 100}%)`;
}

// Bouton "Suivant"
function nextSlide() {
  if (index < totalSlides - 1) {
    index++;
    updateCarousel();
  }
}

// Bouton "Précédent"
function prevSlide() {
  if (index > 0) {
    index--;
    updateCarousel();
  }
}

// Optionnel : navigation clavier (flèches haut/bas)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") nextSlide();
  if (e.key === "ArrowUp") prevSlide();
});
*/

// ----------------------------
// Carrousel Horizontal A4
// ----------------------------
let index = 0;
const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Défilement horizontal
function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`; // clé : translateX pour horizontal
}

function nextSlide() {
  if (index < totalSlides - 1) {
    index++;
    updateCarousel();
  }
}

function prevSlide() {
  if (index > 0) {
    index--;
    updateCarousel();
  }
}

// Optionnel : navigation clavier
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

// js principal
function chargerContenu(divId, fichierHtml) {
  fetch(fichierHtml)
    .then(response => response.text())
    .then(html => {
      document.getElementById(divId).innerHTML = html;
    })
    .catch(err => console.error('Erreur chargement contenu :', err));
}

// Exemple d'utilisation
document.addEventListener('DOMContentLoaded', () => {
  chargerContenu('zone1', 'test_6.html');
});

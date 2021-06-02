// Au chargement de la page on affiche tous les films de l'array movies du fichier data.js

// Selection de la section displayMovies
const displayMovies = document.querySelector('.displayMovies');

// Selection de la section detailsMovies
const detailsMovies = document.querySelector('.detailsMovies');
detailsMovies.classList.add('hidden');

// Selection de la modal
const modalTrailer = document.querySelector('#modal');
modalTrailer.classList.add('hidden');

// On affiche le nombre de films
// console.log(movies.length);
const nbreFilmsElt = document.querySelector('.nbreFilms');
nbreFilmsElt.textContent = movies.length;

// On génére les items des films dans la section displayMovies
for (let i = 0; i < movies.length; i++) {
  displayMovies.innerHTML += `
        <article class="card" data-index="${i}">
            <div class="card-img">
                <img src="${movies[i].image}" alt="${movies[i].title}">
            </div>
            <div class="card-content">
                <h3>${movies[i].title}</h3>
                <h4>${movies[i].director}</h4>
            </div>
        </article>
    `;
}

// Affichage des détails du films au click
/**
 * fonction showDetails
 * role: afficher le detail des films
 */
function showDetails() {
  let index = this.getAttribute('data-index');
  console.log(index);

  // on cache la liste de film
  document.querySelector('main').classList.add('hidden');

  // On affiche les details
  detailsMovies.classList.remove('hidden');

  // on affiche les données du film cliqué
  // Image
  const imageElt = document.querySelector('.detailsImg img');
  imageElt.src = movies[index].image;
  imageElt.alt = movies[index].title;

  // Titre
  const titleElt = document.querySelector('.detailsContent .title');
  titleElt.textContent = movies[index].title;

  // Director
  const directorElt = document.querySelector('.director');
  directorElt.textContent = movies[index].director;

  // Actors
  const actorsElt = document.querySelector('.actors');
  for (let i = 0; i < movies[index].actors.length; i++) {
    actorsElt.textContent = movies[index].actors.join(', ');
  }

  // Genre
  const genreElt = document.querySelector('.genre');
  for (let i = 0; i < movies[index].genre.length; i++) {
    genreElt.textContent = movies[index].genre.join(' - ');
  }

  // Duration
  const durationElt = document.querySelector('.duration');
  durationElt.textContent = movies[index].duration;

  // Date
  const dateElt = document.querySelector('.date');
  dateElt.textContent = movies[index].date;

  // Resume
  const resumeElt = document.querySelector('.resume');
  resumeElt.textContent = movies[index].resume;

  //Video;
  const video = document.querySelector('iframe');
  video.setAttribute(
    'src',
    'https://www.youtube.com/embed/' +
      movies[index].traileryt +
      '?enablejsapi=1&version=3&playerapiid=ytplayer',
  );
}

// Ecouteur d'evenement sur les card
const cardMovies = document.querySelectorAll('.card');
// console.log(cardMovie);
for (let cardSingle of cardMovies) {
  cardSingle.addEventListener('click', showDetails);
}

// Ecouteur d'evenement pour revenir sur la liste des films
const btnBack = document.querySelector('.back button');
btnBack.addEventListener('click', () => {
  // on affiche la liste des movies
  document.querySelector('main').classList.remove('hidden');
  // on cache les details
  detailsMovies.classList.add('hidden');
});

// Ecouteur d'evenement pour afficher la modal
const btnTrailer = document.querySelector('.btn');
btnTrailer.addEventListener('click', () => {
  modalTrailer.classList.remove('hidden');
});

// Ecouteur d'evt pour cacher la modal
modalTrailer.addEventListener('click', function (e) {
  // arreter la video au clic à la fermeture de la modal -> API youtube
  document
    .querySelector('iframe')
    .contentWindow.postMessage(
      '{"event":"command","func":"' + 'stopVideo' + '","args":""}',
      '*',
    );
  // on cache la modal
  modalTrailer.classList.add('hidden');
});

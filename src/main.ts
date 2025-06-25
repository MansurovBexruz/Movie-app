import { movies } from "./type";

const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;
const results = document.getElementById("results") as HTMLDivElement;

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();

  const matchedMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query)
  );

  if (matchedMovies.length > 0) {
    results.innerHTML = matchedMovies.map(movie => `
      <div style="margin-bottom: 10px;">
        <strong>${movie.title}</strong><br>
        Janr: ${movie.genre.name}<br>
        Zaxirada: ${movie.numberInStock} dona<br>
        Narxi: ${movie.dailyRentalRate} so'm / kun
      </div>
    `).join("");
  } else {
    results.innerHTML = `<p>Bunday kino mavjud emas</p>`;
  }
});
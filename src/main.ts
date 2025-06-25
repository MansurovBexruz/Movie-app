import { movies } from "./type";

const searchInput = document.getElementById("search") as HTMLInputElement;
const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;
const results = document.getElementById("results") as HTMLDivElement;

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();

  const matchedMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query)
  );

  results.innerHTML = "";

  if (matchedMovies.length > 0) {
    matchedMovies.forEach(movie => {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>${movie.title}</strong><br>
        Janr: ${movie.genre.name}<br>
        Zaxirada: ${movie.numberInStock} dona<br>
        Narxi: ${movie.dailyRentalRate} so'm/kun
        <hr>
      `;
      results.appendChild(div);
    });
  } else {
    results.innerHTML = `<p>Bunday kino mavjud emas</p>`;
  }
});
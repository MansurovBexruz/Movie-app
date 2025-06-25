import { movies } from "./type";

const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;
const results = document.getElementById("results") as HTMLDivElement;

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();

  // qidiruvga mos kinolarni olish
  const matchedMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query)
  );

  // Ekrandagi barcha kino natijalarini tozalash
  results.innerHTML = "";

  // Agar topilsa — faqat mos kelgan kinoni chiqaring
  if (matchedMovies.length > 0) {
    matchedMovies.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.innerHTML = `
        <strong>${movie.title}</strong><br/>
        Janr: ${movie.genre.name}<br/>
        Zaxirada: ${movie.numberInStock}<br/>
        Narxi: ${movie.dailyRentalRate} so'm/kun
      `;
      results.appendChild(movieDiv);
    });
  } else {
    // Topilmasa — "bunday kino mavjud emas"
    results.innerHTML = "<p>Bunday kino mavjud emas</p>";
  }
});
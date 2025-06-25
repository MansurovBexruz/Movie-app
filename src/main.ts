import { movies } from "./type";

// Elementlarni olish
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;
const results = document.getElementById("results") as HTMLDivElement;

// Qidirish funksiyasi
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();

  // Faqat nomi mos keladigan kinolarni olish
  const matchedMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query)
  );

  // Ekranni tozalash
  results.innerHTML = "";

  if (matchedMovies.length > 0) {
    // Faqat topilganlarni chiqarish
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
    // Topilmasa
    results.innerHTML = `<p>Bunday kino mavjud emas</p>`;
  }
});
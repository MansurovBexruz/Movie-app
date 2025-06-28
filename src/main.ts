interface Movie {
  title: string;
  genre: string;
  stock: number;
  rate: number;
}

// Movie data array
const movies: Movie[] = [
  { title: "Airplane", genre: "Comedy", stock: 5, rate: 2 },
  { title: "The Hangover", genre: "Comedy", stock: 10, rate: 2 },
  { title: "Wedding Crashers", genre: "Comedy", stock: 15, rate: 2 },
  { title: "Die Hard", genre: "Action", stock: 5, rate: 2 },
  { title: "Terminator", genre: "Action", stock: 10, rate: 2 },
  { title: "The Avengers", genre: "Action", stock: 15, rate: 2 },
  { title: "The Notebook", genre: "Romance", stock: 5, rate: 2 },
  { title: "When Harry Met Sally", genre: "Romance", stock: 10, rate: 2 },
  { title: "Pretty Woman", genre: "Romance", stock: 15, rate: 2 },
  { title: "Pretty Woman", genre: "Thriller", stock: 5, rate: 2 },
  { title: "The Sixth Sense", genre: "Thriller", stock: 10, rate: 2 },
  { title: "Gone Girl", genre: "Thriller", stock: 15, rate: 2 },
  { title: "The Others", genre: "Thriller", stock: 100, rate: 20 },
  { title: "Spider Man 1", genre: "Thriller", stock: 100, rate: 20 },
  { title: "Spider Man 2", genre: "Thriller", stock: 100, rate: 20 },
  { title: "Spider Man 3", genre: "Thriller", stock: 100, rate: 20 },
];

let currentPage = 1;
const itemsPerPage = 3;
let currentFilter: "all" | "search" | "genre" = "all";
let filteredMovies: Movie[] = [];
let selectedGenre: string = "";

function searchMovies(query: string): Movie[] {
  const searchTerm = query.toLowerCase().trim();

  if (searchTerm === "") {
    return [];
  }

  return movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.genre.toLowerCase().includes(searchTerm)
  );
}

function filterMoviesByGenre(genre: string): Movie[] {
  return movies.filter((movie) => movie.genre === genre);
}

function getCurrentMoviesToShow(): Movie[] {
  switch (currentFilter) {
    case "search":
    case "genre":
      return filteredMovies;
    default:
      return movies;
  }
}

function showMoviesForPage(page: number): void {
  const listDiv = document.querySelector(".list") as HTMLDivElement;
  const titleLinks = listDiv.querySelectorAll(".title a");
  const genrePs = listDiv.querySelectorAll(".genre p");
  const stockPs = listDiv.querySelectorAll(".stock p");
  const ratePs = listDiv.querySelectorAll(".rate p");

  // Barcha elementlarni yashirish
  titleLinks.forEach((link, index) => {
    const row = [
      titleLinks[index],
      genrePs[index],
      stockPs[index],
      ratePs[index],
    ];
    row.forEach((element) => {
      if (element) {
        (element as HTMLElement).style.display = "none";
      }
    });
  });

  // Hozirgi filtr bo'yicha filmlarni olish
  const moviesToShow = getCurrentMoviesToShow();

  // Sahifa uchun kerakli filmlarni ko'rsatish
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const moviesForPage = moviesToShow.slice(startIndex, endIndex);

  moviesForPage.forEach((movie) => {
    const movieIndex = movies.findIndex(
      (m) =>
        m.title === movie.title &&
        m.genre === movie.genre &&
        m.stock === movie.stock
    );
    if (movieIndex !== -1) {
      const row = [
        titleLinks[movieIndex],
        genrePs[movieIndex],
        stockPs[movieIndex],
        ratePs[movieIndex],
      ];
      row.forEach((element) => {
        if (element) {
          (element as HTMLElement).style.display = "block";
        }
      });
    }
  });
}

function displaySearchResults(results: Movie[]): void {
  filteredMovies = results;
  currentFilter = "search";
  currentPage = 1;
  showMoviesForPage(1);

  const resultsDiv = document.getElementById("results") as HTMLDivElement;
  resultsDiv.innerHTML = "";
}

function displayGenreResults(genre: string): void {
  selectedGenre = genre;
  filteredMovies = filterMoviesByGenre(genre);
  currentFilter = "genre";
  currentPage = 1;
  showMoviesForPage(1);
}

function resetToAllMovies(): void {
  currentFilter = "all";
  filteredMovies = [];
  currentPage = 1;
  showMoviesForPage(1);
}

// Pagination function
function changePage(page: number): void {
  currentPage = page;
  showMoviesForPage(page);
}

// Global function uchun window obyektiga qo'shish
(window as any).changePage = changePage;

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById(
    "searchInput"
  ) as HTMLInputElement;
  const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;

  // Dastlab birinchi sahifani ko'rsatish
  showMoviesForPage(1);

  // Search functionality
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value;
    const results = searchMovies(query);
    displaySearchResults(results);
  });

  searchInput.addEventListener("keypress", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const query = searchInput.value;
      const results = searchMovies(query);
      displaySearchResults(results);
    }
  });

  // Real-time search
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    if (query.trim().length > 0) {
      const results = searchMovies(query);
      displaySearchResults(results);
    } else {
      // Input bo'sh bo'lganda oddiy ko'rinishga qaytarish
      resetToAllMovies();
    }
  });

  // Genre filtering
  const genreButtons =
    document.querySelectorAll<HTMLAnchorElement>(".list-group-item");

  genreButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Har bir tugmadan active klassini olib tashlash va yangisini qo'shish
      genreButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedGenre = button.textContent?.trim();

      if (selectedGenre) {
        // Search inputni tozalash
        searchInput.value = "";
        displayGenreResults(selectedGenre);
      }
    });
  });

  // Navigation links
  const loginLink = document.querySelector(
    "#login-app-link"
  ) as HTMLAnchorElement;

  loginLink.onclick = () => {
    const movieApp = document.querySelector(".movie-app") as HTMLElement;
    const registerSection = document.querySelector(
      ".register-page"
    ) as HTMLElement;
    const loginSection = document.querySelector(".login-page") as HTMLElement;

    movieApp.style.display = "none";
    registerSection.style.display = "none";
    loginSection.style.display = "block";
  };

  const registerLink = document.querySelector(
    "#register-app-link"
  ) as HTMLAnchorElement;

  registerLink.onclick = () => {
    const movieApp = document.querySelector(".movie-app") as HTMLElement;
    const registerSection = document.querySelector(
      ".register-page"
    ) as HTMLElement;
    const loginSection = document.querySelector(".login-page") as HTMLElement;

    movieApp.style.display = "none";
    loginSection.style.display = "none";
    registerSection.style.display = "block";
  };
});

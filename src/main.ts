// Movie data structure
interface Movie {
  title: string;
  genre: string;
  stock: number;
  rate: number;
}

// Movie data array - HTML tartibiga mos
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

// Search function
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

// Show all movies
function showAllMovies(): void {
  const listDiv = document.querySelector(".list") as HTMLDivElement;
  const titleLinks = listDiv.querySelectorAll(".title a");
  const genrePs = listDiv.querySelectorAll(".genre p");
  const stockPs = listDiv.querySelectorAll(".stock p");
  const ratePs = listDiv.querySelectorAll(".rate p");

  // Show all movies
  titleLinks.forEach((link, index) => {
    const row = [
      titleLinks[index],
      genrePs[index],
      stockPs[index],
      ratePs[index],
    ];
    row.forEach((element) => {
      if (element) {
        (element as HTMLElement).style.display = "block";
      }
    });
  });
}

// Display search results by filtering existing list
function displayResults(results: Movie[]): void {
  const listDiv = document.querySelector(".list") as HTMLDivElement;
  const titleLinks = listDiv.querySelectorAll(".title a");
  const genrePs = listDiv.querySelectorAll(".genre p");
  const stockPs = listDiv.querySelectorAll(".stock p");
  const ratePs = listDiv.querySelectorAll(".rate p");

  // Hide all movies first
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

  // Show only matching movies
  if (results.length > 0) {
    results.forEach((movie) => {
      const movieIndex = movies.findIndex((m) => m.title === movie.title);
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

  // Clear results div
  const resultsDiv = document.getElementById("results") as HTMLDivElement;
  resultsDiv.innerHTML = "";
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById(
    "searchInput"
  ) as HTMLInputElement;
  const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;

  // Search button click event
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value;
    const results = searchMovies(query);
    displayResults(results);
  });

  // Enter key press event
  searchInput.addEventListener("keypress", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const query = searchInput.value;
      const results = searchMovies(query);
      displayResults(results);
    }
  });

  // Real-time search (optional)
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    if (query.trim().length > 0) {
      const results = searchMovies(query);
      displayResults(results);
    } else {
      // Show all movies when search is empty
      showAllMovies();
    }
  });
});

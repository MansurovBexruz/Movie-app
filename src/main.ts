// Elementlarni to'g'ri tiplar bilan tanlash
const genreButtons = document.querySelectorAll<HTMLAnchorElement>('.list-group-item');
const titleElements = document.querySelectorAll<HTMLAnchorElement>('.list .title a');
const genreElements = document.querySelectorAll<HTMLParagraphElement>('.list .genre p');
const stockElements = document.querySelectorAll<HTMLParagraphElement>('.list .stock p');
const rateElements = document.querySelectorAll<HTMLParagraphElement>('.list .rate p');

// Qatorlarni yig'ib olish
const movieRows = Array.from(titleElements).map((_, index) => ({
  title: titleElements[index],
  genre: genreElements[index],
  stock: stockElements[index],
  rate: rateElements[index],
}));

// Tugmalarni bosganda filtr qilish
genreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Har bir tugmadan active klassini olib tashlash va yangisini qo'shish
    genreButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedGenre = button.textContent?.trim();

    // Har bir kinoni tekshirish
    movieRows.forEach((row) => {
      const match = row.genre.textContent?.trim() === selectedGenre;

      row.title.style.display = match ? 'block' : 'none';
      row.genre.style.display = match ? 'block' : 'none';
      row.stock.style.display = match ? 'block' : 'none';
      row.rate.style.display = match ? 'block' : 'none';
    });
  });
});

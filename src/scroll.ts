const itemsPerPage: number = 3;
const sections: string[] = ['title', 'genre', 'stock', 'rate'];

function changePage(page: number) {
  sections.forEach(section => {
    const elements = document.querySelectorAll<HTMLElement>(`.${section} a, .${section} p`);
    elements.forEach((el, index) => {
      el.classList.remove('active');
      if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
        el.classList.add('active');
      }
    });
  });
}

// Boshlang‘ich sahifa
changePage(1);

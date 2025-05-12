const buttons = document.querySelectorAll('.filters button');
const images = document.querySelectorAll('.gallery .item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    images.forEach(img => {
      if (filter === 'all' || img.classList.contains(filter)) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});

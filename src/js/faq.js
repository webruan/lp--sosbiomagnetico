document.addEventListener("DOMContentLoaded", function() {
  let item = document.querySelectorAll('.faq-item');
  let icon = document.querySelectorAll('.faq-icon');

  item.forEach((thisButton, index) => {
      thisButton.addEventListener('click', () => {
          item.forEach(a => a.classList.remove('active'));
          item[index].classList !== 'active'
          ? item[index].classList.add('active')
          : item[index].classList.remove('active');
      });
  });

  item.forEach((thisButton, index) => {
      thisButton.addEventListener('click', () => {
          icon.forEach(a => a.innerText = '+');
          icon[index].innerText == '+'
          ? icon[index].innerText = '-'
          : icon[index].innerText = '+';
      });
  });
});
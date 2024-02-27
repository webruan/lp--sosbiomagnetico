document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById('menu');
  const body = document.querySelector('body');
  const linkButton = document.querySelectorAll('.nav-item-button');

  const icon = document.querySelector('.bi-list');
  const modal = document.getElementById('menu-modal');
  const close = document.getElementById('close');

  button.addEventListener('click', () => {
    if (icon.classList.contains('bi-list')) {
      icon.style.opacity = '0';
      
      modal.style.display = 'block';
      body.style.overflowY = 'hidden'; // prevent scrolling

    } else {
      icon.style.opacity = '1';

      modal.style.display = 'none';
      body.style.overflow = 'auto'; // enable scrolling
    }
  });

  close.addEventListener('click', () => {
    icon.style.opacity = '1';

    modal.style.display = 'none';
    body.style.overflow = 'auto'; // enable scrolling
  }); 


  linkButton.forEach(title => {
    title.addEventListener('click', () => {
      icon.style.opacity = '1';


      modal.style.display = 'none';
      body.style.overflowY = 'auto'; // enable scrolling
    });
  });
});
(() => {
    const refs = {
      openMenuBtn: document.querySelector('.menu_open-btn'),
      closeMenuBtn: document.querySelector('.menu_close-btn'),
      menu: document.querySelector('.mobile-menu'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();
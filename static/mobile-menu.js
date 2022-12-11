const hide = ((elem) => {
    elem.style.display = 'none';
  });
  const show = ((elem) => {
    elem.style.display = 'block';
  });
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  toggle.addEventListener('click', ((e) => {
    if (menu.style.display !== 'block') {
      e.preventDefault();
      e.stopPropagation();  
      show(menu);
    }
  }));
  document.body.addEventListener('click', ((e) => {
    if (menu.style.display === 'block') {
      e.preventDefault();
      e.stopPropagation();  
      hide(menu);
    }
  }));
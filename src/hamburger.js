const burgerBtn = document.getElementsByClassName('hamburger')

/* When the user clicks on the button toggle the menu */
burgerBtn.onclick = toggleMenu();

function toggleMenu() {
  const menu = document.getElementsByClassName('menu')
  menu.style.display = (menu.style.display = 'none' ? 'block' : 'none' );
}

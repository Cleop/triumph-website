// Sets visibility once burger menu has been clicked
document.getElementById('nav__hamburger').addEventListener('click', function(){
  document.getElementById('nav__menu').style.display = 'block';
  document.getElementById('nav__cross').style.display = 'block';
  document.getElementById('nav__hamburger').style.display = 'none';
});
// Sets visibility once cross to close burger menu has been clicked
document.getElementById('nav__cross').addEventListener('click', function(){
  document.getElementById('nav__menu').style.display = 'none';
  document.getElementById('nav__hamburger').style.display = 'block';
  document.getElementById('nav__cross').style.display = 'none';
});

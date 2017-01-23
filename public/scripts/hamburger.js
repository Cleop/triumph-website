document.getElementById('hamburger').addEventListener('click', function(){
  document.getElementById('menu').style.display = 'block';
  document.getElementById('cross').style.display = 'block';
  document.getElementById('hamburger').style.display = 'none';
});

document.getElementById('cross').addEventListener('click', function(){
  document.getElementById('menu').style.display = 'none';
  document.getElementById('hamburger').style.display = 'block';
  document.getElementById('cross').style.display = 'none';
});

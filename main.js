const show = document.querySelector('#show');
show.addEventListener('click', () => {
   show.style.display = 'none';
   document.querySelector('#hidden').style.display = 'inline';
});

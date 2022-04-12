const show = document.querySelector('#show');
const comment = document.querySelectorAll('.item__main');

// Ver mais
show.addEventListener('click', () => {
   show.style.display = 'none';
   document.querySelector('#hidden').style.display = 'inline';
});

// Mostrar comentários dos tópicos
comment.forEach(elem => {
   elem.addEventListener('click', () => {
      elem.nextElementSibling.classList.toggle('display');
   });
});

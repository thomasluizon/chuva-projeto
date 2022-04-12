const show = document.querySelector('.show');
const summary = document.querySelector('.main__summary');
const comment = document.querySelectorAll('.item__main');
const createTopicBtn = document.querySelector('#create-topic');
const topicForm = document.querySelector('#topic-form');
const createNewTopicBtn = document.querySelector('#create-new-topic');
const state1 = document.querySelector('.state1');
const state2 = document.querySelector('.state2');
const state3 = document.querySelector('.state3');

// Ver mais
summary.addEventListener('click', () => {
   show.classList.toggle('display');
   document.querySelector('.hidden').classList.toggle('display');
});

// Mostrar comentários dos tópicos
comment.forEach(elem => {
   elem.addEventListener('click', () => {
      elem.nextElementSibling.classList.toggle('display');
      if (elem.nextElementSibling.classList.contains('display')) {
         elem.children[2].children[0].style.display = 'inline';
         elem.children[2].children[1].style.display = 'none';
      } else {
         elem.children[2].children[1].style.display = 'inline';
         elem.children[2].children[0].style.display = 'none';
      }
   });
});

// Troca de estado

createTopicBtn.addEventListener('click', () => {
   state1.classList.add('display');
   state2.classList.remove('display');
});

topicForm.addEventListener('submit', e => {
   e.preventDefault();
   state2.classList.add('display');
   state3.classList.remove('display');
});

createNewTopicBtn.addEventListener('click', () => {
   state3.classList.add('display');
   state2.classList.remove('display');
});

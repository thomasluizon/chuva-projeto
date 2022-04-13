const show = document.querySelector('.show');
const summary = document.querySelector('.main__summary');
const comment = document.querySelectorAll('.item__main');
const createTopicBtn = document.querySelector('#create-topic');
const topicForm = document.querySelector('#topic-form');
const createNewTopicBtn = document.querySelector('#create-new-topic');
const state1 = document.querySelector('.state1');
const state2 = document.querySelector('.state2');
const state3 = document.querySelector('.state3');
const formInput = document.querySelector('#topic');
const textInput = document.querySelector('#content');
const openDrawerBtn = document.querySelector('.burguer');
const closeDrawerBtn = document.querySelector('.close');
const drawer = document.querySelector('.sidebar');
const sidebarItem = document.querySelectorAll('.sidebar__item');

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
   createItem(formInput.value, textInput.value);
   formInput.value = '';
   textInput.value = '';
});

createNewTopicBtn.addEventListener('click', () => {
   state3.classList.add('display');
   state2.classList.remove('display');
});

// Adicionar comentário

function createItem(topic, text) {
   const item = document.createElement('li');
   item.classList.add('topics__item');
   item.classList.add('over');
   item.innerHTML = `
   <div class="item__main blur">
      <h3>${topic}</h3>
      <h4>Thomas Luizon</h4>
      <p class="item__comment">${text}</p>
      <div class="topic__socials">
         <button>
            <img
               src="assets/imgs/more-info.png"
               alt=""
            />
         </button>
         <button class="topic__socials-heart">
            <img src="assets/imgs/heart.png" alt="" />
         </button>
         <p>0 likes</p>
         <p>0 respostas</p>
      </div>
   </div>
   <div class="overlay">
      <img src="assets/imgs/blur-logo.png" alt="" />
      <p>Aguardando feedback dos autores</p>
      <a href="#">Editar tópico</a>
   </div>
   `;
   document.querySelector('.topics__items').appendChild(item);
}

// Ativar drawer

openDrawerBtn.addEventListener('click', () => {
   drawer.classList.add('show');
   document.body.classList.add('scroll');
});

closeDrawerBtn.addEventListener('click', () => {
   drawer.classList.remove('show');
   document.body.classList.remove('scroll');
});

sidebarItem.forEach(e => {
   e.addEventListener('click', () => {
      drawer.classList.remove('show');
      document.body.classList.remove('scroll');
   });
});

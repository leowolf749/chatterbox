

function init(){
  let submit = document.querySelector('#submit');
  submit.addEventListener('click', comment)
}

function comment(){
  let lets_chat = document.querySelector('input')
  let item = document.createElement('p');
  let parent = document.querySelector('.chatbox');

  item.textContent = lets_chat.value;
  parent.appendChild(item);

  lets_chat.value = '';

}




window.addEventListener('load', init);



function init(){
  let submit = document.querySelector('#submit');
  submit.addEventListener('click', comment)
}

function comment(){
  let lets_chat = document.querySelector('.lets_chat')
  let item = document.querySelector('.item');
  let parent = document.querySelector('.chatbox');

  item.textContent = lets_chat.textContent;
  parent.appendChild(item);

}




window.addEventListener('load', init);

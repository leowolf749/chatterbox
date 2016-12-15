

function init(){
  let submit = document.querySelector('#submit');
  submit.addEventListener('click', comment)
}

function comment(){
  let lets_chat = document.querySelector('#chat')
  let item = document.querySelector('.item');
  let parent = document.querySelector('.chatbox');

  item.textContent = lets_chat.textContent;
  parent.appendChild(item);

  lets_chat.textContent = " ";

}




window.addEventListener('load', init);

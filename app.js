
function init(){
  let submit = document.querySelector('#submit');
  submit.addEventListener('click', getMessage);
}


function comment(x, y){
  let lets_chat = document.querySelector('input');
  let sender = document.createElement('h3');
  let item = document.createElement('p');
  let parent = document.querySelector('.chatbox');
  

  item.textContent = lets_chat.value;
  parent.appendChild(item)
  
  parent.appendChild(sender);
  parent.appendChild(item);
  sender.textContent = x;
  item.textContent = y;
  
  



  lets_chat.value = '';
}



function getMessage() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://api.queencityiron.com/chats');
  request.addEventListener('load', function() {
    let response = JSON.parse(request.responseText);
    console.log(response);

    console.log(response.chats[0].from);
    console.log(response.chats[0].message);

    let user = response.chats[0].from;
    let message = response.chats[0].message;

    comment(user, message);

  });
  request.send();
  console.log("request sent");
}



window.addEventListener('load', init);

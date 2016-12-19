let user = "";
let message = "";


function init(){
  let submit = document.querySelector('#submit');
  submit.addEventListener('click', sendMessage);
}


function comment(user, message){
  let lets_chat = document.querySelector('#message');
  let sender = document.createElement('h3');
  let item = document.createElement('p');
  let parent = document.querySelector('.chatbox');
  let section = document.querySelector('section');


  item.textContent = "Me: " + lets_chat.value;
  parent.appendChild(section);

  section.appendChild(sender);
  section.appendChild(item);
  sender.textContent = user;
  item.textContent = message;


  lets_chat.value = '';
}



function getMessage() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://api.queencityiron.com/chats');
  request.addEventListener('load', function() {
    let response = JSON.parse(request.responseText);
    console.log(response);

////trying for loop here

  for (let i = 0; i < response.chats.length; i++) {
    console.log(response.chats[i].from);
    console.log(response.chats[i].message);

    user = response.chats[i].from;
    message = response.chats[i].message;
    }
  });

  comment(user, message);
  request.send();
  console.log("request sent");

}


function sendMessage(){
  let request = new XMLHttpRequest();
  request.open('POST', 'http://api.queencityiron.com/chats');

  let body = JSON.stringify({
    from: document.querySelector("#username").value,
    message: document.querySelector("#message").value,
  })

  let user = document.querySelector("#username").value;
  let message = document.querySelector("#message").value;

  comment(user, message);

  console.log(body);
  request.send(body);
}



window.addEventListener('load', init);

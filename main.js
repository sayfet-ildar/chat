const elements = {
  input: document.querySelector('.input_message'),
  buttonEnterMessage: document.querySelector('.enter_message'),
  lastMessageBlock: document.querySelector('.text_message'),
  message: document.querySelector('#message'),
  blockMessages: document.querySelector('.block_messages'),
  lastMessage: document.querySelector('#last_message')
};


function sendMessage() {
  const inputText = elements.input.value;
  if (!inputText){
    return
  }
  const templateContent = elements.message.content.cloneNode(true);
  const messageFromMe = templateContent.querySelector('#not_delivered_message');
  const textSpan = messageFromMe.querySelector('.text');
  textSpan.textContent = inputText;
  elements.blockMessages.append(messageFromMe);
}

function buttonClickEnter(event) {
  event.preventDefault();
  sendMessage();
}

elements.buttonEnterMessage.addEventListener('click', buttonClickEnter);

let btnChatWidget = document.querySelector('.chat-widget');
let chatInput = document.querySelector('input.chat-widget__input');
let newMessage 
btnChatWidget.addEventListener('click', function(){
  this.classList.add('chat-widget_active');
});

const time = function(){
  let timeNow = new Date();
  const doTwoNumber = (x) => {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  };

  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let hh = doTwoNumber(hours);
  let mm = doTwoNumber(minutes);
  return `${hh}:${mm}`;
}

chatInput.addEventListener('keydown', function(evt){
  if (evt.code === 'Enter') {
    let messageTextClient = chatInput.value;
    let client = `message_client`;

    const addMessage = (text, addClass = '') => {
      let messages = document.querySelector( '.chat-widget__messages' );
      messages.innerHTML += `
        <div class="message ${addClass}">
          <div class="message__time">${time()}</div>
          <div class="message__text">
            ${text}
          </div>
        </div>
      `;
      chatInput.value = ''
    };

    const getPhrase = () => {
      const words = [
        'Где ваша совесть?',
        'Кто тут?',
        'Добрый день! До Свидания!',
        'Мы ничего не будем вам продавать!',
        'Я уже отвечал на ваш вопрос!',
        'К сожалению все операторы заняты. Не пишите нам больше.',
        ];
      let index = Math.floor(Math.random() * words.length);
      
      return words[index];
    }

    addMessage( messageTextClient, client,);
    setTimeout(()=>{addMessage(getPhrase())}, 800);
 
  }
})
export default class AddMessage {
  constructor() {
    this.valueMessage = null;
    this.date = new Date().toLocaleDateString('ru-RU');
  }

  addMessageInContainer(value) {
    this.valueMessage = value;

    const listItemUserMessage = document.createElement('li');
    listItemUserMessage.classList.add('list-messages-item');

    const messageTime = document.createElement('div');
    messageTime.classList.add('message-time');

    messageTime.textContent = `${this.date} ${new Date().toLocaleTimeString('ru-RU').slice(0, -3)}`;

    const messageText = document.createElement('div');
    messageText.classList.add('message-text');
    messageText.textContent = this.valueMessage;

    const dataGeoPosition = document.createElement('div');
    dataGeoPosition.classList.add('data-geo-position');

    listItemUserMessage.appendChild(messageTime);
    listItemUserMessage.appendChild(messageText);
    listItemUserMessage.appendChild(dataGeoPosition);

    const messageList = document.querySelector('.list-messages');

    messageList.append(listItemUserMessage);
  }
}

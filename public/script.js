// filepath: /c:/Users/manda/OneDrive/Desktop/real-time-chat/public/script.js
const socket = io();

// Elements
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

// Event listener for form submission
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    if (message) {
        socket.emit('send-message', message);
        messageInput.value = '';
        appendMessage(`You: ${message}`);
    }
});

// Append message to the container
function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageContainer.append(messageElement);
}

// Listen for incoming messages
socket.on('receive-message', (message) => {
    appendMessage(message);
});
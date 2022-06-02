 const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const message = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add('position');
    messageContainer.append(messageElement);
}

const name = prompt("Enter your name to Join:");
socket.emit('new-user-joined', name);

socket.on('user-joined', data =>{
    append(`${name} joind the chat `, 'right');

})





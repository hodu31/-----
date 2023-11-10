document.getElementById('messageForm').addEventListener('submit', function(event){
    event.preventDefault();

    var message = document.getElementById('messageInput').value.trim();
    if(message) {
        var messagesContainer = document.getElementById('messages');
        var newMessage = document.createElement('p');
        newMessage.textContent = message;
        messagesContainer.appendChild(newMessage);

        document.getElementById('messageInput').value = ''; // 입력 필드 초기화
    }
});

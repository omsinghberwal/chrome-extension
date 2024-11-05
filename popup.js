document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value;

    if (message.trim() === "") return; // Ignore empty messages

    // Display user's message
    displayMessage("You: " + message);

    // Simulate a response from the bot (simple echo)
    const botResponse = "Bot: " + message; // You can modify this to implement more complex logic
    displayMessage(botResponse);

    // Clear the input
    userInput.value = '';
});

// Function to display messages in the chat box
function displayMessage(message) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
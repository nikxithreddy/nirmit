const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

   
}
function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating jarvis");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is jarvis";
        speech.text = finalText;
    }

    else if(message.includes('nirmit')) {
        window.open("index1.html", "_blank");
        const finalText = "Opening";
        speech.text = finalText;
      
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
function sendCommand() {
    var userInput = document.getElementById('user-input').value;
    var chatOutput = document.getElementById('chat-output');

    // Display user's command in the chat
    chatOutput.innerHTML += '<div>User: ' + userInput + '</div>';

    // You can add AI functionality here to process the command
    // For simplicity, let's just echo a response for now
    var aiResponse = 'AI: Command received - ' + userInput;

    // Display AI's response in the chat
    chatOutput.innerHTML += '<div>' + aiResponse + '</div>';

    // Clear the user input field
    document.getElementById('user-input').value = '';

    // Scroll to the bottom of the chat to show the latest messages
    chatOutput.scrollTop = chatOutput.scrollHeight;
}
// Store user IDs and their corresponding chat output elements
var users = {};

function sendCommand() {
    var userInput = document.getElementById('user-input').value;
    var chatOutput = document.getElementById('chat-output');

    // Get or create the user's chat output element
    var userId = 'user';  // Replace this with the actual user identifier
    if (!users[userId]) {
        users[userId] = document.createElement('div');
        chatOutput.appendChild(users[userId]);
    }

    // Display user's command in the chat
    users[userId].innerHTML += '<div>User: ' + userInput + '</div>';

    // You can add AI functionality here to process the command
    // For simplicity, let's just echo a response for now
    var aiResponse = 'AI: Command received - ' + userInput;

    // Display AI's response in the chat
    users[userId].innerHTML += '<div>' + aiResponse + '</div>';

    // Clear the user input field
    document.getElementById('user-input').value = '';

    // Scroll to the bottom of the chat to show the latest messages
    chatOutput.scrollTop = chatOutput.scrollHeight;
}
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatOutput = document.getElementById('chat-output');

    // Display user's message in the chat
    chatOutput.innerHTML += '<div class="user-message">You: ' + userInput + '</div>';

    // Process the user's message (replace this with actual AI logic)
    var aiResponse = processUserInput(userInput);

    // Display AI's response in the chat
    chatOutput.innerHTML += '<div class="ai-message">AI: ' + aiResponse + '</div>';

    // Clear the user input field
    document.getElementById('user-input').value = '';

    // Scroll to the bottom of the chat to show the latest messages
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

// Replace this function with actual AI logic
function processUserInput(input) {
    // Simple example: Echo the user's input
    return 'You said: ' + input;
}


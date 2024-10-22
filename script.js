const API_KEY = 'Substitua pela sua chave da API OpenAI';

document.getElementById('send-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput === '') return;
    
    // Exibe a mensagem do usuário na tela
    displayMessage(userInput, 'user-message');
    
    // Limpa o input
    document.getElementById('user-input').value = '';

    // chamando a API
    const botResponse = await getChatbotResponse(userInput);
    
    // Exibe a resposta do bot simulando a digitação
    typeWriterEffect(botResponse, 'bot-message');
});

function displayMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getChatbotResponse(userInput) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "Você é um assistente especializado em saúde que faz pré-diagnósticos. Defina o pré-diagnóstico e a prioridade em uma lista de atendimentos. Mencione somente a área a ser direcionado, não mencione 'procure um especialista', pois já estamos em um hospital." }, 
                { role: "user", content: userInput }
            ]
        })
    });

    const data = await response.json();
    let botText = data.choices[0].message.content;
    
    botText = botText.replace(/(Prioridade|Direcionamento|Direcionar|Direcionado|Redirecionar|Deverá)/g, '\n$1');
    
    botText = botText.replace(/\n\n/g, '\n');
    
    return botText;
}

// Função para exibir texto gradualmente
function typeWriterEffect(text, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${className}`;
    chatBox.appendChild(messageElement);
    
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            if (text.charAt(i) === '\n') {
                messageElement.innerHTML += '<br>';
            } else {
                messageElement.innerHTML += text.charAt(i);
            }
            i++;
            chatBox.scrollTop = chatBox.scrollHeight;// Rolagem automática
            setTimeout(typeWriter, 25); // Velocidade de digitação (25ms por caractere)
        }
    }
    
    typeWriter();
}

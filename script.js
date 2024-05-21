const assistantId = 'asst_k5jPeI8cHSw35EXd4LSl1T1N';  // Your Assistant ID

fetch('https://api.openai.com/v1/messages', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sk-proj-YfT6zDf9fZ1GureqZbxBT3BlbkFJFkImYzKBazDdnjOZ4ZpT}`  // Ensure your API key is securely handled
    },
    body: JSON.stringify({
        model: "gpt-4-turbo",  // Or whichever model your assistant is configured to use
        assistant: assistantId,
        messages: [
            {role: "system", content: "Your system message here if any"},
            {role: "user", content: "Hello, how can I help?"}
        ]
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

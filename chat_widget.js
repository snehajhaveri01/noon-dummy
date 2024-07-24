(function() {
    // Create and style chat icon
    var chatIcon = document.createElement('div');
    chatIcon.id = 'chat-icon';
    chatIcon.style.position = 'fixed';
    chatIcon.style.bottom = '20px';
    chatIcon.style.right = '20px';
    chatIcon.style.width = '20vw'; // Responsive width
    chatIcon.style.height = '20vw'; // Responsive height
    chatIcon.style.maxWidth = '60px'; // Max width for larger screens
    chatIcon.style.maxHeight = '60px'; // Max height for larger screens
    chatIcon.style.backgroundColor = "black";
    chatIcon.style.borderRadius = '50%';
    chatIcon.style.display = 'flex';
    chatIcon.style.justifyContent = 'center';
    chatIcon.style.alignItems = 'center';
    chatIcon.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    chatIcon.style.cursor = 'pointer';
    chatIcon.style.zIndex = '1000';
    chatIcon.style.fontSize = '4vw'; // Adjust icon size based on viewport width
  
    // Animation on hover
    chatIcon.style.transition = 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out';
    chatIcon.addEventListener('mouseenter', function() {
      chatIcon.style.transform = 'scale(1.1)';
      chatIcon.style.backgroundColor = '#F3E008'; // Darker shade of blue
    });
    chatIcon.addEventListener('mouseleave', function() {
      chatIcon.style.transform = 'scale(1.0)';
      chatIcon.style.backgroundColor = 'black'; // Original blue color
    });
  
    chatIcon.innerHTML = `
  <img src="assets/logo.png" alt="Chat Logo" style="width: 60%; height: 60%; max-width: 40px; max-height: 40px; border-radius: 50%; object-fit: cover;">
    `;

  
    document.body.appendChild(chatIcon);
  
    // Create and style chat widget
    var chatWidget = document.createElement('div');
    chatWidget.id = 'aichatbot';
    chatWidget.style.display = 'none';
    chatWidget.style.position = 'fixed';
    chatWidget.style.bottom = '10vh'; // Responsive bottom position
    chatWidget.style.right = '5vw'; // Responsive right position
    chatWidget.style.width = '80vw'; // Responsive width
    chatWidget.style.maxWidth = '400px'; // Max width for larger screens
    chatWidget.style.height = '500vh'; // Responsive height
    chatWidget.style.maxHeight = '500px'; // Max height for larger screens
    chatWidget.style.border = '1px solid #2d3748';
    chatWidget.style.borderRadius = '10px';
    chatWidget.style.overflow = 'hidden';
    chatWidget.style.fontFamily = 'sans-serif';
    chatWidget.style.backgroundColor = 'black';
    chatWidget.style.color = '#fff';
    chatWidget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    chatWidget.style.zIndex = '1000';
    chatWidget.style.fontSize = '14px'; // Responsive font size
  
    chatWidget.innerHTML = `
     <div id="chat-header" style="background-color: #F3E008; color: black; padding: 10px; text-align: center; font-size: 1.5em;">
      Noon Seller Support
    </div>
      <div id="chat-messages" style="height: 70%; overflow-y: auto; padding: 10px;"></div>
      <div style="padding: 10px; display: flex; align-items: center; background-color: #00000;">
        <input type="text" id="chat-input" style="flex: 1; padding: 15px; border: none; border-radius: 20px; background-color: #0B031E; color: #fff; outline: none; font-size: 0.8em;" placeholder="Let the magic begin, Ask a question." />
        <button id="chat-send" style="margin-left: 10px; background-color: #0B031E; color: #ffffff; border: none; border-radius: 50%; width: 10vw; height: 10vw; max-width: 40px; max-height: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer; font-size: 1em;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" width="30" height="30">
            <path d="M2 21l21-9L2 3v7l15 2-15 2z"></path>
          </svg>
        </button>
        <br><br/>
        
      </div>
    `;
  
    document.body.appendChild(chatWidget);
  
    // Toggle chat widget display
    chatIcon.addEventListener('click', () => {
      chatWidget.style.display = chatWidget.style.display === 'block' ? 'none' : 'block';
      if (chatWidget.style.display === 'block') {
        appendMessage("Hello, I am BotWot! What is on your mind?", false); 
      }
    });
  
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
  
    const appendMessage = (text, isUser) => {
      const messageDiv = document.createElement('div');
      messageDiv.style.display = 'flex';
      messageDiv.style.alignItems = 'flex-start';
      messageDiv.style.justifyContent = isUser ? 'flex-end' : 'flex-start';
      messageDiv.style.margin = '10px 0';
  
      const avatar = document.createElement('img');
      avatar.style.width = '5vw'; // Responsive avatar size
      avatar.style.height = 'vw'; // Responsive avatar size
      avatar.style.maxWidth = '32px'; // Max width for larger screens
      avatar.style.maxHeight = '32px'; // Max height for larger screens
      avatar.style.borderRadius = '50%';
      avatar.style.margin = isUser ? '0 0 0 10px' : '0 10px 0 0';
  
      const messageSpan = document.createElement('div');
      messageSpan.style.maxWidth = '70%';
      messageSpan.style.padding = '10px';
      messageSpan.style.borderRadius = isUser ? '12px 12px 0 12px' : '12px 12px 12px 0';
      messageSpan.style.backgroundColor = isUser ? '#4299e1' : '#2d3748';
      messageSpan.style.color = '#fff';
  
      const textSpan = document.createElement('div');
      textSpan.textContent = text;
      textSpan.style.marginBottom = '5px';
  
      const timeSpan = document.createElement('div');
      timeSpan.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      timeSpan.style.fontSize = '0.75rem';
      timeSpan.style.opacity = '0.7';
      timeSpan.style.textAlign = isUser ? 'right' : 'left';
  
      messageSpan.appendChild(textSpan);
      messageSpan.appendChild(timeSpan);
  
      avatar.src = isUser ? "https://cdn1.vectorstock.com/i/1000x1000/91/60/user-profile-3d-icon-avatar-or-person-button-vector-46429160.jpg" : 'assets/logo.png';
  
      if (isUser) {
        messageDiv.appendChild(messageSpan);
        messageDiv.appendChild(avatar);
      } else {
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageSpan);
      }
  
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };
  
    const appendTypingIndicator = () => {
      const typingDiv = document.createElement('div');
      typingDiv.style.display = 'flex';
      typingDiv.style.alignItems = 'center';
      typingDiv.style.margin = '10px 0';
  
      const avatar = document.createElement('img');
      // avatar.src = 'https://penguinui.s3.amazonaws.com/component-assets/bot-icon.png'; 
      avatar.src = 'assets/logo.png'; 
      avatar.style.height = '32px';
      avatar.style.width = '4vw'; // Responsive avatar size
      avatar.style.maxWidth = '32px'; // Max width for larger screens
      avatar.style.maxHeight = '32px'; // Max height for larger screens
      avatar.style.borderRadius = '50%';
      avatar.style.marginRight = '10px';
  
      const dotsContainer = document.createElement('div');
      dotsContainer.style.display = 'flex';
      dotsContainer.style.gap = '4px';
  
      const typingText = document.createElement('div');
      typingText.textContent = 'Typing...';
      typingText.style.color = '#ccc';
      typingText.style.fontSize = '0.8em';
  
      for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.style.width = '6px';
        dot.style.height = '6px';
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = '#4a5568';
        dot.style.animation = `bounce 1.5s ease-in-out ${i * 0.5}s infinite, typingAnimation 0.5s step-end ${i * 0.5}s 2 alternate`; 
        dotsContainer.appendChild(dot);
      }
  
      typingDiv.appendChild(avatar);
      typingDiv.appendChild(typingText);
      typingDiv.appendChild(dotsContainer);
      chatMessages.appendChild(typingDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
  
      return typingDiv;
    };
  
    chatSend.addEventListener('click', async () => {
      const message = chatInput.value.trim();
      if (!message) return;
  
      appendMessage(message, true);
      chatInput.value = '';
  
      const typingIndicator = appendTypingIndicator();
  
      try {
        const response = await fetch('http://13.71.119.166:8000/user/sessionChat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "userId": "6693fc7f10f2a1cd47863bce",
            "sessionId": localStorage.getItem('sessionId') || "",
            "question": message,
            "subscriptionPlanId": "subscriptionPlanId1",
            "botId": "66a15ce4ae91c5d6e81f9b6f"
          })
        });
  
        const data = await response.json();
        if (data && data.chats && data.chats.length > 0) {
          appendMessage(data.chats[data.chats.length - 1].answer, false);
        } else {
          appendMessage('Error: Could not send message', false);
        }
  
        typingIndicator.remove();
      } catch (error) {
        console.error('Error sending message:', error);
        appendMessage('Error: Could not send message', false);
        typingIndicator.remove();
      }
    });
  
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        chatSend.click();
      }
    });
  
    // Add keyframe animation for typing effect
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
  
      @keyframes typingAnimation {
        0% { content: "Typing."; }
        33% { content: "Typing.."; }
        66% { content: "Typing..."; }
        100% { content: "Typing."; }
      }
    `;
    document.head.appendChild(style);
  })();
  



import React, { useState } from 'react';
import { fetchChatResponse, fetchAvatar } from './services/chatService';
import Avatar from './components/Avatar';
import ChatBox from './components/ChatBox';

const App: React.FC = () => {
  const [avatar, setAvatar] = useState<any>(null);
  const [chat, setChat] = useState<string>('');

  const getAvatar = async () => {
    const avatarData = await fetchAvatar();
    setAvatar(avatarData);
  };

  const handleChat = async (prompt: string) => {
    const chatResponse = await fetchChatResponse(prompt);
    setChat(chatResponse);
  };

  return (
    <div className="App">
      <div className="container mx-auto">
        <Avatar avatar={avatar} />
        <ChatBox chat={chat} onChat={handleChat} />
      </div>
    </div>
  );
};

export default App;

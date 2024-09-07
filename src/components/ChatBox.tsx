import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface ChatBoxProps {
  chat: string;
  onChat: (prompt: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ chat, onChat }) => {
  const [prompt, setPrompt] = useState('');
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setPrompt(transcript);
    onChat(transcript);
    resetTranscript();
  };

  return (
    <div className="chat-box">
      <button onClick={startListening}>Start Speaking</button>
      <button onClick={stopListening}>Stop</button>
      <p>{transcript}</p>
      <div className="response">
        <p>{chat}</p>
      </div>
    </div>
  );
};

export default ChatBox;
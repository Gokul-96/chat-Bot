import axios from 'axios';



export const fetchChatResponse = async (prompt: string) => {
  const response = await axios.post('http://localhost:5000/api/chat/response', { prompt });
  return response.data;
};

export const fetchAvatar = async () => {
  const response = await axios.get('http://localhost:5000/api/chat/avatar');
  return response.data;
};
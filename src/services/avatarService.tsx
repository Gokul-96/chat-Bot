import axios from 'axios';


export const fetchAvatar = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/chat/avatar');
    return response.data;
  } catch (error) {
    console.error("Error fetching avatar:", error);
    return null;
  }
};
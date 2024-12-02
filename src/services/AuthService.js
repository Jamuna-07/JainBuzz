import axios from 'axios';

const API_URL = 'http://localhost:5000';

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data.token;
  } catch (error) {
    return false;
  }
};

export default { login };

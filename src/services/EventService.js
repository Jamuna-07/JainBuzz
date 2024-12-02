import axios from 'axios';

const API_URL = 'http://localhost:5000/events';

const getEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const createEvent = async (event) => {
  await axios.post(API_URL, event);
};

export default { getEvents, createEvent };

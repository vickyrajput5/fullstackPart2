// services.js

import axios from 'axios';

const baseUrl = 'http://localhost:3001/profile'; // Replace with your server's URL

const getAll = () => {
  return axios.get(baseUrl)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be handled in the component
    });
};

console.log(getAll())
const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};

export default { getAll, create };

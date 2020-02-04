import axios from 'axios';



export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://lambda-mud-ty.herokuapp.com/api',
    headers: {
      Authorization: `Token ${token}`
    }
  });
};


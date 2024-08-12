import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const login = async (username: string, password: string) => {
  return axios.post(`${API_BASE_URL}/auth/login`, { username, password });
};

export const register = async (username: string, emailaddress: string, password: string) => {
  return axios.post(`${API_BASE_URL}/auth/register`, { username, emailaddress, password });
};

import axios, { AxiosResponse } from "axios";

export const API_BASE_URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const getAllCities = async () => {
  const response: AxiosResponse = await axiosInstance.get('/api/v1/posts');
  return response;
};
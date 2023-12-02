import axios, { AxiosResponse } from "axios";
import { City } from "../types/CityTypes";

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


export const getCityById = async (id: string) => {
  const response: AxiosResponse = await axios.get(`${API_BASE_URL}/api/v1/posts/${id}`)
  return response;
};

export const createCity = async (body: City) => {
  const config = {
    data: body
  }
  const response: AxiosResponse = await axios.post(`${API_BASE_URL}/api/v1/posts`, config);
  return response;
};

export const updateCity = async (id: string, body: City) => {
  const config = {
    data: body
  }
  const response: AxiosResponse = await axios.put(`${API_BASE_URL}/api/v1/posts/${id}`, config);
  return response;
};

export const removeCity = async (id: string) => {
  const response: AxiosResponse = await axios.delete(`${API_BASE_URL}/api/v1/posts/${id}`);
  return response;
};
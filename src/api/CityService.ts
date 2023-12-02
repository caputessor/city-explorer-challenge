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
  const response: AxiosResponse = await  axiosInstance.get(`/api/v1/posts/${id}`)
  return response;
};

export const createCity = async (body: City) => {
  const response: AxiosResponse = await axiosInstance.post('/api/v1/posts', body);
  return response;
};

export const updateCity = async (id: number, body: City) => {
  const response: AxiosResponse = await axiosInstance.put(`/api/v1/posts/${id}`, body);
  return response;
};

export const removeCity = async (id: number) => {
  const response: AxiosResponse = await axiosInstance.delete(`/api/v1/posts/${id}`);
  return response;
};
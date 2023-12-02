import axios, { AxiosResponse } from "axios";
export const API_BASE_URL = process.env.REACT_APP_API_URL;

export const getAllCities = async () => {
  const response: AxiosResponse = await axios.get(`${API_BASE_URL}/api/v1/posts`)
  return response;
};
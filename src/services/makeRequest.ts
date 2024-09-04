// src/api/apiRequests.ts
import Axios from "../utils/axios";
import { AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
export const getRequest = async <T>(url: string): Promise<any> => {
  try {
    const response = await Axios.get<ApiResponse<T>>(url);
    return response;
  } catch (error: any) {
    // throw new Error(error.response?.data?.message || 'Error fetching data');
    return error.response
  }
};

export const postRequest = async <T, D>(url: string, data: D): Promise<any> => {
  try {
    const response = await Axios.post<ApiResponse<T>>(url, data);
    return response;
  } catch (error: any) {
    // throw new Error(error.response?.data?.message || 'Error posting data');
    return error.response
  }
};

export const putRequest = async <T, D>(url: string, data: D): Promise<any> => {
  try {
    const response = await Axios.put<ApiResponse<T>>(url, data);
    return response;
  } catch (error : any) {
    // throw new Error(error.response?.data?.message || 'Error updating data');
    return error.response
  }
};

import axios, { AxiosError, type AxiosRequestConfig } from 'axios';

/** axios instance for BE */
const baseAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  // withCredentials: true,
});

/** 공용 api호출 메소드 */
export const ApiCaller = async <T>(path: string, options: AxiosRequestConfig): Promise<T> => {
  try {
    const res = await baseAxios({
      ...options,
      url: path,
    });
    return res.data;
  } catch (error) {
    const { response } = error as AxiosError<any>;
    return response?.data;
  }
};

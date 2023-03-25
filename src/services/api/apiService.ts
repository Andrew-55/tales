import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';
import {getTokenStore} from '@app/lib';

export type ErrorApi = AxiosError;

export type ErrorApiData = {
  statusCode: number;
  message: string;
  error: string;
};

export class ApiService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
    this.instance.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const token = await getTokenStore();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
    );
  }

  get<T>(url: string, config: any) {
    return this.instance.get<T>(url, config);
  }

  put<T>(url: string, config: any) {
    return this.instance.put<T>(url, config);
  }
}

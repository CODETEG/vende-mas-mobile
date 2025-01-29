/* eslint-disable no-console */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import { IApiResponse } from './api-response'
import { tokenStorage } from '@/shared/utils/token-storage'

class ApiClient {
  private static instance: AxiosInstance

  private constructor() {}

  public static async getInstance(): Promise<AxiosInstance> {
    if (!ApiClient.instance) {
      ApiClient.instance = axios.create({
        baseURL: process.env.EXPO_PUBLIC_API_URL,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // Interceptor de request
      ApiClient.instance.interceptors.request.use(
        async (config) => {
          const token = await tokenStorage.getToken()
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
          }
          return config
        },
        (error) => Promise.reject(error),
      )

      // ApiClient.instance.interceptors.request.use((config) => {
      //   eslint-disable-next-line no-console
      //   console.log('📡 Axios Request:', {
      //     url: process.env.EXPO_PUBLIC_API_URL + config.url!,
      //     method: config.method,
      //     headers: config.headers,
      //     data: config.data,
      //   })
      //   return config
      // })

      // Interceptor de response
      ApiClient.instance.interceptors.response.use(
        (response: AxiosResponse<IApiResponse<unknown>>) => {
          console.log('📡 Axios Response:', response)

          return response
        },
        (error: AxiosError<IApiResponse<unknown>>) => {
          console.log('📡 Axios Error:', error.response?.data)

          return Promise.reject(error)
        },
      )
    }
    return ApiClient.instance
  }
}

// Helper para tipos con genéricos
export const apiClient = {
  get: async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T>> => {
    const client = await ApiClient.getInstance()
    const response = await client.get<IApiResponse<T>>(url, config)
    return response.data
  },

  post: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T>> => {
    const client = await ApiClient.getInstance()
    const response = await client.post<IApiResponse<T>>(url, data, config)
    return response.data
  },

  put: async <T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T>> => {
    const client = await ApiClient.getInstance()
    const response = await client.put<IApiResponse<T>>(url, data, config)
    return response.data
  },

  delete: async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T>> => {
    const client = await ApiClient.getInstance()
    const response = await client.delete<IApiResponse<T>>(url, config)
    return response.data
  },
}

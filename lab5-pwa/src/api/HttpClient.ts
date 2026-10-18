import axios, { type AxiosInstance } from 'axios'
import { HTTP_TIMEOUT } from './config'

class HttpClient {
  private client: AxiosInstance

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: HTTP_TIMEOUT,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  async get<T>(url: string, params: Record<string, unknown> = {}): Promise<T> {
    try {
      const response = await this.client.get<T>(url, { params })
      return response.data
    } catch (error) {
      console.error('HTTP Error:', error)
      throw error
    }
  }
}

export default HttpClient
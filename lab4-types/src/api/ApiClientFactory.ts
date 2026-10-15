import HttpClient from './HttpClient'
import { NOBEL_API_BASE_URL } from './config'


class ApiClientFactory {
  private static nobelClient: HttpClient | null = null

  static getNobelClient(): HttpClient {
    if (!this.nobelClient) {
      this.nobelClient = new HttpClient(NOBEL_API_BASE_URL)
    }
    return this.nobelClient
  }
}

export default ApiClientFactory
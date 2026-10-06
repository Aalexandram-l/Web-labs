import axios from 'axios'

class HttpClient {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async get(url, params = {}) {
    try {
      const response = await this.client.get(url, { params })
      return response.data
    } catch (error) {
      console.error('HTTP Error:', error.message)
      throw error
    }
  }
}

export default HttpClient
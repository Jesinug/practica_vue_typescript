import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.escuelajs.co'
})

export default {
  async getProducts() {
    try {
      const response = await api.get('/api/v1/products')
      return response.data
    } catch (error) {
      throw new Error(error)
    }
  }
}


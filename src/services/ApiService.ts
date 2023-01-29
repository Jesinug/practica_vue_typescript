import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api'
})

/* eslint-disable */
class ApiService {
  getAll(): Promise<any> {
    return api.get("/v1/products");
  }

  findById(id: number): Promise<any> {
    return api.get(`//v1/products/${id}`);
  }
}

export default new ApiService();


import axios from 'axios'

const localhost = 'http://localhost:3000'
const serverhost = 'https://code-and-coffee-api.herokuapp.com/'

const api = axios.create({
  baseURL: serverhost
})

export default api
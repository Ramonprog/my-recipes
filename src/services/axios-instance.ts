import { envs } from '@/configs'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: envs.THE_MEAL_DB_API_URL
})

export default axiosInstance;
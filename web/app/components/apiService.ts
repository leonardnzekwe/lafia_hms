// @/app/components/apiService.ts
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const apiService = axios.create({
  baseURL,
});

export default apiService;

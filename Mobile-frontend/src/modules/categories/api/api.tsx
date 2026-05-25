import { BASE_URL } from '@/src/store/config';
import axios from 'axios';

export const fetchCategoriesData = async () => {
 const response = await axios.get(`${BASE_URL}/category`);
 console.log('Response - ', response)
 return response?.data?.categories;
}
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { NewsResponse } from '../types/types';
import { useNewsStore } from '../store/newsStore';
const API_KEY = '033951f6e0f1496d9986a1da33676bdb';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

const getNewsByCategory = async (category: string): Promise<NewsResponse> => {
   try {
      const { data } = await axios.get<NewsResponse>(BASE_URL, {
         params: {
            category,
            country: 'us',
            language: 'en',
            apiKey: API_KEY,
         },
      });
      return data;
   } catch (error) {
      console.error(error);
      return { status: 'error', totalResults: 0, articles: [] };
   }
};

export const useNewsByCategory = () => {
   const { category } = useNewsStore();
   return useQuery({
      queryKey: ['news', category],
      queryFn: () => getNewsByCategory(category),
      enabled: !!category, // Запрос выполняется только если категория задана
   });
};

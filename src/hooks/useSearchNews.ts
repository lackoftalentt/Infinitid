import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { NewsResponse } from '../types/types';

const API_KEY = '033951f6e0f1496d9986a1da33676bdb';
const BASE_URL = 'https://newsapi.org/v2/everything';

const fetchSearchResults = async (
   query: string,
   page = 1,
): Promise<NewsResponse> => {
   const { data } = await axios.get<NewsResponse>(BASE_URL, {
      params: {
         q: query,
         page,
         apiKey: API_KEY,
         language: 'en',
         sortBy: 'relevancy',
      },
   });
   return data;
};

export const useSearchNews = (query: string, page = 1) => {
   return useQuery({
      queryKey: ['searchNews', query, page],
      queryFn: () => fetchSearchResults(query, page),
      enabled: query.length > 2,
   });
};

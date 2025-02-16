import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Article {
   source: { id: string | null; name: string };
   author: string | null;
   title: string;
   description: string | null;
   url: string;
   urlToImage: string | null;
   publishedAt: string;
   content: string | null;
}

export interface NewsResponse {
   status: string;
   totalResults: number;
   articles: Article[];
}

const API_KEY = '033951f6e0f1496d9986a1da33676bdb';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

const fetchNews = async (): Promise<NewsResponse> => {
   const { data } = await axios.get<NewsResponse>(BASE_URL, {
      params: {
         country: 'us',
         language: 'en',
         apiKey: API_KEY,
      },
   });
   console.log(data);
   return data;
};

export const useNews = () => {
   return useQuery({
      queryKey: ['news'],
      queryFn: () => fetchNews(),
   });
};

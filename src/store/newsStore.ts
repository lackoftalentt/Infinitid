import { create } from 'zustand';

interface NewsState {
   country: string;
   category: string;
   setCountry: (country: string) => void;
   setCategory: (category: string) => void;
}

export const useNewsStore = create<NewsState>(set => ({
   country: 'us',
   category: 'technology',
   setCountry: country => set({ country }),
   setCategory: category => set({ category }),
}));

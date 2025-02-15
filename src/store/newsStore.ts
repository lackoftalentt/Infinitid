import { create } from 'zustand';

interface NewsState {
   country: string;
   category: string;
   setCountry: (country: string) => void;
   setCategory: (category: string) => void;
   inputValue: string;
   setInputValue: (value: string) => void;
}

export const useNewsStore = create<NewsState>(set => ({
   country: 'us',
   category: '',
   setCountry: country => set({ country }),
   setCategory: category => set({ category }),
   inputValue: '',
   setInputValue: value => set({ inputValue: value }),
}));

import { create } from 'zustand';

interface NewsState {
   category: string;
   setCategory: (category: string) => void;
   inputValue: string;
   setInputValue: (value: string) => void;
}

export const useNewsStore = create<NewsState>(set => ({
   category: '',
   setCategory: category => set({ category }),
   inputValue: '',
   setInputValue: value => set({ inputValue: value }),
}));

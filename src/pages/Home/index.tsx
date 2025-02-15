import { FeedItem } from '../../components/FeedItem';
import { useNews } from '../../hooks/useNews';
import s from './Home.module.scss';
import { useNewsStore } from '../../store/newsStore';
import { useSearchNews } from '../../hooks/useSearchNews';
import { useNewsByCategory } from '../../hooks/useSortNews';

export const Home = () => {
   const { inputValue, setInputValue, setCategory, category } = useNewsStore();
   const { data: news, isLoading: newsIsLoading, error: newsError } = useNews();
   const {
      data: search,
      isLoading: searchIsLoading,
      error: searchError,
   } = useSearchNews(inputValue);
   const {
      data: sortedNews,
      isLoading: sortedNewsLoading,
      error: sortedNewsError,
   } = useNewsByCategory();

   const isSearching = inputValue.length > 2;
   const isSorting = category !== '';

   const articles = isSearching
      ? search?.articles
      : isSorting
        ? sortedNews?.articles
        : news?.articles;
   const isLoading = isSearching
      ? searchIsLoading
      : isSorting
        ? sortedNewsLoading
        : newsIsLoading;
   const error = isSearching
      ? searchError
      : isSorting
        ? sortedNewsError
        : newsError;

   const categories = [
      { id: '', name: 'Все' },
      { id: 'business', name: 'Бизнес' },
      { id: 'entertainment', name: 'Развлечения' },
      { id: 'general', name: 'Общее' },
      { id: 'health', name: 'Здоровье' },
      { id: 'science', name: 'Наука' },
      { id: 'sports', name: 'Спорт' },
      { id: 'technology', name: 'Технологии' },
   ];

   if (error) return <p>Ошибка загрузки</p>;
   return (
      <div className={s.container}>
         <div>
            {isLoading ? (
               <h1 className={s.title}>Загрузка...</h1>
            ) : (
               <h1 className={s.title}>InfinitiD</h1>
            )}
         </div>
         <div className={s.header}>
            <input
               value={inputValue}
               onChange={e => setInputValue(e.target.value)}
               className={s.input}
               type="text"
               placeholder="Поиск новостей..."
            />
            <select
               name="category"
               value={category}
               onChange={e => setCategory(e.target.value)}
               className={s.select}>
               {categories.map(category => (
                  <option key={category.id} value={category.id}>
                     {category.name}
                  </option>
               ))}
            </select>
         </div>
         <div className={s.feed}>
            {articles?.length === 0
               ? 'Ничего не найдено'
               : articles?.map(article => (
                    <FeedItem
                       title={article.title}
                       description={article.description}
                       key={article.url}
                       urlToImage={article.urlToImage}
                       articleURl={article.url}
                       tag={article.source.name}
                    />
                 ))}
         </div>
      </div>
   );
};

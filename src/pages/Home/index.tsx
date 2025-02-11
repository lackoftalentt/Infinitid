import { FeedItem } from '../../components/FeedItem';
import { useNews } from '../../hooks/useNews.';
import s from './Home.module.scss';

export const Home = () => {
   const { data, isLoading, error } = useNews();

   if (isLoading) return <p>Загрузка...</p>;
   if (error) return <p>Ошибка загрузки</p>;
   return (
      <div className={s.container}>
         <div className={s.feed}>
            {data?.articles.map(article => (
               <FeedItem
                  title={article.title}
                  description={article.description}
                  key={article.source.id}
                  urlToImage={article.urlToImage}
                  articleURl={article.url}
               />
            ))}
         </div>
      </div>
   );
};

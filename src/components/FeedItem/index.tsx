import s from './FeedItem.module.scss';
interface FeedItemProps {
   title: string;
   description: string | null;
   urlToImage: string | null;
   articleURl: string;
}
export const FeedItem = ({
   title,
   description,
   urlToImage,
   articleURl,
}: FeedItemProps) => {
   return (
      <div className={s.card}>
         <div className={s.cardHeader}>
            {urlToImage && <img src={urlToImage} alt={title} width={200} />}
         </div>
         <div className={s.cardBody}>
            <span className={`${s.tag} ${s.tagBlue}`}>Technology</span>
            <h4>{title}</h4>
            <p>{description}</p>
         </div>
         <div className={s.cardFooter}>
            <a href={articleURl}>read more</a>
         </div>
      </div>
   );
};

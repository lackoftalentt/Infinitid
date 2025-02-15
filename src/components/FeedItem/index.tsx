import s from './FeedItem.module.scss';
interface FeedItemProps {
   title: string;
   description: string | null;
   urlToImage: string | null;
   tag: string | null;
   articleURl: string;
}
export const FeedItem = ({
   title,
   description,
   urlToImage,
   articleURl,
   tag,
}: FeedItemProps) => {
   return (
      <div className={s.card}>
         <div className={s.cardHeader}>
            {urlToImage && (
               <img className={s.cardImage} src={urlToImage} alt={title} />
            )}
         </div>
         <div className={s.cardBody}>
            <span className={`${s.tag} ${s.tagBlue}`}>{tag}</span>
            <h4>{title}</h4>
            <p>{description}</p>
         </div>
         <div className={s.cardFooter}>
            <a className={`${s.tag} ${s.tagRed}`} href={articleURl}>
               read more
            </a>
         </div>
      </div>
   );
};

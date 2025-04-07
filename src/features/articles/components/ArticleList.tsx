import { ArticleCard } from '@/features/articles/components/ArticleCard';
import { Article } from '@/features/articles/types/Article';

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList = (props: ArticleListProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
      {props.articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </div>
  );
};

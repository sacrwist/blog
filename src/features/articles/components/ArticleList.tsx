import { ArticleCard } from '@/features/articles/components/ArticleCard';

interface ArticleListProps {
  articles: any;
}

export const ArticleList = (props: ArticleListProps) => {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-12">
      {props.articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </div>
  );
};

import { ArticleCard } from '@/features/articles/components/ArticleCard';

interface ArticleListProps {
  articles: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content: string;
    eyecatch: {
      url: string;
      height: number;
      width: number;
    };
    category: {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      name: string;
    };
  }[];
}

export const ArticleList = (props: ArticleListProps) => {
  console.log(props.articles);
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
      {props.articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </div>
  );
};

import { ArticleCard } from '@/features/articles/components/ArticleCard';

export const ArticleList = () => {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-12">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};

import { getArticlesWithCategory } from '@/features/articles/api/common';
import { ArticleList } from '@/features/articles/components/ArticleList';

export default async function Category({
  params,
}: {
  params: {
    category: string;
  };
}) {
  const articles = await getArticlesWithCategory(params.category);

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {articles.length !== 0 ? (
        <ArticleList articles={articles} />
      ) : (
        <div>No articles</div>
      )}
    </div>
  );
}

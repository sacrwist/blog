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
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow flex-col items-center gap-8 pt-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {articles.length !== 0 ? (
            <ArticleList articles={articles} />
          ) : (
            <div>No articles</div>
          )}
        </div>
      </main>

      <footer className="flex flex-wrap items-center justify-center gap-6 py-6">
        Footer
      </footer>
    </div>
  );
}

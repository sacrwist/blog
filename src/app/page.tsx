import { getArticles } from '@/features/articles/api/common';
import { ArticleList } from '@/features/articles/components/ArticleList';

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <ArticleList articles={articles} />
    </div>
  );
}

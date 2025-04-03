import { getArticle } from '@/features/articles/api/common';
import Image from 'next/image';

export default async function ArticleDetail({ params }) {
  const article = await getArticle(params.articleName);
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow flex-col items-center gap-8 pt-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1>{article.title}</h1>
          <div>
            <Image
              src={article.eyecatch.url}
              alt=""
              width={article.eyecatch.width}
              height={article.eyecatch.height}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </main>
    </div>
  );
}

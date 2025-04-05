import { getArticle } from '@/features/articles/api/common';
import Image from 'next/image';
import Link from 'next/link';

export default async function ArticleDetail({
  params,
}: {
  params: {
    category: string;
    articleName: string;
  };
}) {
  const article = await getArticle(params.articleName);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow flex-col items-center gap-8 pt-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-700 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          {/* メタ情報（カテゴリーと日付） */}
          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            {/* カテゴリー表示 */}
            {article.category && (
              <div className="flex items-center gap-1">
                {/* <TagIcon className="h-4 w-4 text-gray-400" aria-hidden="true" /> */}
                {/* カテゴリーにリンクを付けたい場合は<a>タグ等で囲む */}
                <Link href={`/${article.category.id}`}>
                  <span className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-800">
                    {article.category.name}
                    {/* categoryオブジェクトのnameプロパティを想定 */}
                  </span>
                </Link>
              </div>
            )}

            {/* 日付表示 */}
            {/* {formattedDate && (
              <div className="flex items-center gap-1">
                <CalendarDaysIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                <time dateTime={article.publishedAt || article.createdAt}>
                  {formattedDate}
                </time>
              </div>
            )} */}
          </div>

          {article.eyecatch?.url && (
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              {' '}
              <Image
                src={article.eyecatch.url}
                alt={article.title || ''}
                width={article.eyecatch.width}
                height={article.eyecatch.height}
                className="h-full w-full object-cover" // 画像がコンテナに合わせて表示されるように
                priority // LCPになる可能性が高いので優先的に読み込む
              />
            </div>
          )}

          <div
            className="prose max-w-none lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </main>
    </div>
  );
}

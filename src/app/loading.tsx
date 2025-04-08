import { ArticleCardSkeleton } from '@/features/articles/components/ArticleCardSkeleton';

export default function Loading() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {[...Array(6)].map((_, index) => (
          <ArticleCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

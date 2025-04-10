import { Skeleton } from '@/components/ui/skeleton';

export function ArticleContentSkeleton() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Skeleton className="mb-4 h-10 w-3/4 sm:h-12 lg:h-14" />
      <div className="mb-6 flex items-center gap-x-4">
        <Skeleton className="h-10 w-24 rounded-lg" />{' '}
      </div>
      <Skeleton className="mb-8 aspect-video w-full rounded-lg" />{' '}
      <div className="prose max-w-none space-y-3 lg:prose-xl">
        {' '}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}

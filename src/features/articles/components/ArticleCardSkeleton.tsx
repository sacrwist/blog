import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const ArticleCardSkeleton = () => {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg">
      <CardHeader className="border-0 p-0">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Skeleton className="h-full w-full" />
        </AspectRatio>
      </CardHeader>

      <CardContent className="p-4 sm:p-6">
        <Skeleton className="mb-2 h-4 w-1/3" />
        <Skeleton className="mb-3 h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-5/6" />
      </CardContent>
    </Card>
  );
};

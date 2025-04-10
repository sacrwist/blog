import { Button } from '@/components/ui/button';
import { getCategories } from '@/features/articles/api/common';
import { CategoryTabs } from '@/features/common/components/CategoryTabs';
import Link from 'next/link';

export const Header = async () => {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50 bg-white pb-8 pt-10 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl">
            <Link href="/">Title</Link>
          </h1>
          <div className="">
            <Link href="/contact">
              <Button
                variant="outline"
                className="text-md border-black px-6 py-5"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
        <CategoryTabs categories={categories} />
      </div>
    </header>
  );
};

'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CategoryTabsProps {
  categories: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
    slug: string;
  }[];
}

export const CategoryTabs = (props: CategoryTabsProps) => {
  const pathname = usePathname();

  // 現在アクティブにすべきタブの値を決定
  let activeTabValue = 'all'; // デフォルトは 'all'
  if (pathname !== '/') {
    // パスからカテゴリ部分を取得 (例: "/design" -> "design")
    const pathSegments = pathname.split('/');
    if (
      pathSegments.length > 1 &&
      props.categories.some(
        (category) =>
          category.slug === pathSegments[1] && category.slug !== 'all'
      )
    ) {
      activeTabValue = pathSegments[1];
    } else {
      // / 以外の不明なパスや、カテゴリに一致しない場合は 'all' (または非選択) のまま
      activeTabValue = '';
    }
  }

  return (
    <Tabs value={activeTabValue} defaultValue="all" className="w-full">
      <TabsList className="inline-flex h-auto rounded-none border-none bg-transparent pt-10">
        <Link key="all" href="/">
          <TabsTrigger
            key="all"
            value="all"
            className="relative h-auto rounded-none border-b-2 border-transparent bg-transparent px-4 pb-[calc(0.5rem+2px)] pt-2 font-semibold text-muted-foreground shadow-none transition-none hover:text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            All
          </TabsTrigger>
        </Link>
        {props.categories.map((category) => (
          <Link key={category.id} href={`/${category.slug}`}>
            <TabsTrigger
              key={category.id}
              value={category.slug}
              className="relative h-auto rounded-none border-b-2 border-transparent bg-transparent px-4 pb-[calc(0.5rem+2px)] pt-2 font-semibold text-muted-foreground shadow-none transition-none hover:text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              {category.name}
            </TabsTrigger>
          </Link>
        ))}
      </TabsList>
    </Tabs>
  );
};

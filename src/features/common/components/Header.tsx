'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const tabItems = [
    { value: 'all', label: 'All', href: '/' },
    { value: 'design', label: 'Design', href: '/design' },
    { value: 'technology', label: 'Technology', href: '/technology' },
    { value: 'travel', label: 'Travel', href: '/travel' },
  ];

  // 現在アクティブにすべきタブの値を決定
  let activeTabValue = 'all'; // デフォルトは 'all'
  if (pathname !== '/') {
    // パスからカテゴリ部分を取得 (例: "/design" -> "design")
    const pathSegments = pathname.split('/');
    if (
      pathSegments.length > 1 &&
      tabItems.some(
        (tab) => tab.value === pathSegments[1] && tab.value !== 'all'
      )
    ) {
      activeTabValue = pathSegments[1];
    } else {
      // / 以外の不明なパスや、カテゴリに一致しない場合は 'all' (または非選択) のまま
      activeTabValue = '';
    }
  }

  return (
    <header className="sticky top-0 bg-white pb-8 pt-10 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl">
            <Link href="/">Title</Link>
          </h1>
          <div className="">
            <Button
              variant="outline"
              className="text-md border-black px-6 py-5"
            >
              Contact
            </Button>
          </div>
        </div>

        <Tabs value={activeTabValue} defaultValue="all" className="w-full">
          <TabsList className="inline-flex h-auto rounded-none border-none bg-transparent pt-10">
            {tabItems.map((tab) => (
              <Link href={tab.href}>
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative h-auto rounded-none border-b-2 border-transparent bg-transparent px-4 pb-[calc(0.5rem+2px)] pt-2 font-semibold text-muted-foreground shadow-none transition-none hover:text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  {tab.label}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

export const Header = () => {
  const tabItems = [
    { value: 'all', label: 'All' },
    { value: 'design', label: 'Design' },
    { value: 'technology', label: 'Technology' },
    { value: 'travel', label: 'Travel' },
  ];

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

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="inline-flex h-auto rounded-none border-none bg-transparent pt-10">
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="relative h-auto rounded-none border-b-2 border-transparent bg-transparent px-4 pb-[calc(0.5rem+2px)] pt-2 font-semibold text-muted-foreground shadow-none transition-none hover:text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 各タブに対応するコンテンツエリア */}
          {tabItems.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-4">
              {/* ここに各タブのコンテンツを表示します */}
              <p className="p-4">
                Content for <strong>{tab.label}</strong>
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </header>
  );
};

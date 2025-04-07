import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t-2 bg-white py-24 shadow-lg">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl">
            <Link href="/">Title</Link>
          </h1>
          <div className="">
            <Link href="contact">
              <Button
                variant="outline"
                className="text-md border-black px-6 py-5"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import Image from 'next/image';

export default async function ArticleDetail() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow flex-col items-center gap-8 pt-8">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1>記事名</h1>
          <div>
            <Image
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="object-cover"
              width={300}
              height={300}
            />
          </div>
          <div>本文</div>
        </div>
      </main>

      <footer className="flex flex-wrap items-center justify-center gap-6 py-6">
        Footer
      </footer>
    </div>
  );
}

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Article } from '@/features/articles/types/Article';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg transition-shadow duration-500 hover:shadow-2xl">
      <Link href={`/${props.article.category.id}/${props.article.slug}`}>
        <AspectRatio ratio={16 / 9}>
          <Image
            fill
            alt=""
            src={
              props.article.eyecatch?.url ||
              'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            }
            className="w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
        </AspectRatio>

        <div className="bg-white p-4 sm:p-6">
          <time
            // datetime="2022-10-10"
            className="block text-xs text-gray-500"
          >
            {' '}
            10th Oct 2022{' '}
          </time>

          <h3 className="mt-0.5 text-xl text-gray-900">
            {props.article.title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus parusandae dolores, possimus parusandae dolores,
            possimus parusandae dolores, possimus parusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla
            ipsum eveniet corporis quidem, mollitia itaque minus soluta,
            voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </Link>
    </article>
  );
};

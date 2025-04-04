import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  article: any;
}

export const ArticleCard = (props: ArticleCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg transition-shadow duration-500 hover:shadow-2xl">
      <Link href={`/${props.article.category.id}/${props.article.id}`}>
        <Image
          alt=""
          src={props.article.eyecatch.url}
          className="h-56 w-full object-cover"
          width={props.article.eyecatch.width}
          height={props.article.eyecatch.height}
        />

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

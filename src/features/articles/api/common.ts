import { ArticleRes } from '@/features/articles/api/response';
import { client } from '@/lib/microcms';
import { MicroCMSListResponse } from 'microcms-js-sdk';

export const getArticles = async (): Promise<ArticleRes[]> => {
  try {
    const res = await client.get<MicroCMSListResponse<ArticleRes>>({
      endpoint: 'articles',
    });
    return res.contents;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getArticlesWithCategory = async (
  slug: string
): Promise<ArticleRes[]> => {
  try {
    const res = await client.get<MicroCMSListResponse<ArticleRes>>({
      endpoint: 'articles',
      queries: { filters: `category[equals]${slug}` },
    });
    return res.contents;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getArticle = async (slug: string): Promise<ArticleRes | null> => {
  try {
    const res = await client.get<MicroCMSListResponse<ArticleRes>>({
      endpoint: `articles`,
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    });
    return res.contents[0];
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getCategories = async () => {
  try {
    const res = await client.get({
      endpoint: 'categories',
    });
    return res.contents;
  } catch (e) {
    console.error(e);
  }
};

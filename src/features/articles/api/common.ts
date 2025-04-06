import { client } from '@/lib/microcms';

export const getArticles = async () => {
  try {
    const res = await client.get({
      endpoint: 'articles',
    });
    return res.contents;
  } catch (e) {
    console.error(e);
  }
};

export const getArticlesWithCategory = async (slug: string) => {
  try {
    const res = await client.get({
      endpoint: 'articles',
      queries: { filters: `category[equals]${slug}` },
    });
    return res.contents;
  } catch (e) {
    console.error(e);
  }
};

export const getArticle = async (slug: string) => {
  try {
    const res = await client.get({
      endpoint: `articles`,
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    });
    return res.contents[0];
  } catch (e) {
    console.error(e);
  }
};

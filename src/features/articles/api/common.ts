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

export const getArticle = async (id: string) => {
  try {
    const res = await client.get({
      endpoint: `articles`,
      contentId: id,
    });
    return res;
  } catch (e) {
    console.error(e);
  }
};

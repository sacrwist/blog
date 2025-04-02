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

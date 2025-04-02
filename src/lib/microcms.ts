import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'sacrblog',
  apiKey: process.env.API_KEY as string,
});

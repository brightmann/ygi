import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { getAllArticles } from '../utils/api';
import Layout from '../components/molecules/Layout';
import ArticlesCardsList from '../components/molecules/ArticlesCardsList';
import { ArticleWithDate } from '../components/molecules/ArticleCard';

export const getStaticProps = (async () => {
  const posts = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'post',
  )) as ArticleWithDate[];

  const archivedPosts = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'archive',
  )) as ArticleWithDate[];

  const allPosts = [...posts, ...archivedPosts].sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });

  return { props: { posts: allPosts } };
}) satisfies GetStaticProps<{
  posts: ArticleWithDate[];
}>;

export default function Page({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <ArticlesCardsList items={posts} />
    </Layout>
  );
}

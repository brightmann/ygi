import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { getAllArticles } from '../utils/api';
import { POSTS_PER_PAGE, getTotalPages } from '../utils/pagination';
import Layout from '../components/molecules/Layout';
import ArticlesCardsList from '../components/molecules/ArticlesCardsList';
import Pagination from '../components/molecules/Pagination';
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

  const pages = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'page',
  )) as ArticleWithDate[];

  const allPosts = [...posts, ...archivedPosts].sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });

  const totalPages = getTotalPages(allPosts.length);

  return { props: { posts: allPosts.slice(0, POSTS_PER_PAGE), pages, totalPages } };
}) satisfies GetStaticProps<{
  posts: ArticleWithDate[];
  pages: ArticleWithDate[];
  totalPages: number;
}>;

export default function Page({ posts, pages, totalPages }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      isMain={true}
      pages={pages}
    >
      <ArticlesCardsList items={posts} />

      <Pagination
        currentPage={1}
        totalPages={totalPages}
      />
    </Layout>
  );
}

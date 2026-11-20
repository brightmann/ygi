import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { getAllArticles } from '../utils/api';
import { POSTS_PER_PAGE, getTotalPages } from '../utils/pagination';
import Layout from '../components/molecules/Layout';
import ArticlesCardsList from '../components/molecules/ArticlesCardsList';
import Pagination from '../components/molecules/Pagination';
import { ArticleWithDate } from '../components/molecules/ArticleCard';
import Link from '../components/atoms/Link';

export const getStaticProps = (async () => {
  const posts = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'post',
  )) as ArticleWithDate[];

  const pages = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'page',
  )) as ArticleWithDate[];

  const totalPages = getTotalPages(posts.length);

  return { props: { posts: posts.slice(0, POSTS_PER_PAGE), pages, totalPages } };
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

      <p>
        <Link href="/archive">Архив</Link>
      </p>
    </Layout>
  );
}

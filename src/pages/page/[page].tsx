import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

import { getAllArticles } from '../../utils/api';
import { POSTS_PER_PAGE, getTotalPages } from '../../utils/pagination';
import Layout from '../../components/molecules/Layout';
import ArticlesCardsList from '../../components/molecules/ArticlesCardsList';
import Pagination from '../../components/molecules/Pagination';
import { ArticleWithDate } from '../../components/molecules/ArticleCard';
import Link from '../../components/atoms/Link';

export const getStaticPaths = (async () => {
  const posts = await getAllArticles(['title', 'slug'], 'post');
  const totalPages = getTotalPages(posts.length);
  const paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: String(page) } });
  }

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const currentPage = Number(params?.page) || 1;

  const posts = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'post',
  )) as ArticleWithDate[];

  const pages = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'page',
  )) as ArticleWithDate[];

  const totalPages = getTotalPages(posts.length);
  const pagePosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return { props: { posts: pagePosts, pages, currentPage, totalPages } };
}) satisfies GetStaticProps<{
  posts: ArticleWithDate[];
  pages: ArticleWithDate[];
  currentPage: number;
  totalPages: number;
}>;

export default function Page({ posts, pages, currentPage, totalPages }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      isMain={true}
      pages={pages}
    >
      <ArticlesCardsList items={posts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <p>
        <Link href="/archive">Архив</Link>
      </p>
    </Layout>
  );
}

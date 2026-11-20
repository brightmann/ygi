import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

import { getAllArticles } from '../../utils/api';
import { POSTS_PER_PAGE, getTotalPages } from '../../utils/pagination';
import Layout from '../../components/molecules/Layout';
import ArticlesCardsList from '../../components/molecules/ArticlesCardsList';
import Pagination from '../../components/molecules/Pagination';
import { ArticleWithDate } from '../../components/molecules/ArticleCard';

const getAllPosts = async () => {
  const posts = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'post',
  )) as ArticleWithDate[];

  const archivedPosts = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'archive',
  )) as ArticleWithDate[];

  return [...posts, ...archivedPosts].sort((a, b) => {
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    return bTime - aTime;
  });
};

export const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  const totalPages = getTotalPages(posts.length);
  const paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: String(page) } });
  }

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const currentPage = Number(params?.page) || 1;

  const allPosts = await getAllPosts();

  const pages = (await getAllArticles(
    ['title', 'slug', 'order', 'excerpt', 'date'],
    'page',
  )) as ArticleWithDate[];

  const totalPages = getTotalPages(allPosts.length);
  const pagePosts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

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
    </Layout>
  );
}

export const POSTS_PER_PAGE = 5;

export const getPageHref = (page: number) => (page <= 1 ? '/' : `/page/${page}`);

export const getTotalPages = (itemsCount: number) =>
  Math.max(1, Math.ceil(itemsCount / POSTS_PER_PAGE));

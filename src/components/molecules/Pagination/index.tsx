import React from 'react';
import classNames from 'classnames';

import Link from '../../atoms/Link';
import { getPageHref } from '../../../utils/pagination';

import styles from './styles.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  if (totalPages < 2) {
    return null;
  }

  return (
    <nav
      className={styles['pagination']}
      aria-label="Pagination"
    >
      {currentPage > 1 && (
        <Link
          href={getPageHref(currentPage - 1)}
          className={styles['pagination__item']}
        >
          <span aria-hidden="true">←</span> Назад
        </Link>
      )}

      <ol className={styles['pagination__pages']}>
        {Array.from({ length: totalPages }, (item, index) => index + 1).map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span
                className={classNames(
                  styles['pagination__page'],
                  styles['pagination__page--current'],
                )}
                aria-current="page"
              >
                {page}
              </span>
            ) : (
              <Link
                href={getPageHref(page)}
                className={styles['pagination__page']}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
      </ol>

      {currentPage < totalPages && (
        <Link
          href={getPageHref(currentPage + 1)}
          className={styles['pagination__item']}
        >
          Вперёд <span aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  );
};

export default Pagination;

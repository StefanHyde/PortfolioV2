/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Suspense, useEffect, useState } from 'react';
import { getPosts } from '@api/wordPress/service';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import BlogPostBlock from '@/components/blog/blogPostBlock';
import PageTitle from '@/components/pageTitle';
import Pagination from '@/components/pagination';
import BlogPostBlockSkeleton from '@/components/blog/blogPostBlockSkeleton';

const POSTS_PER_PAGE = 8;

// Créer un composant pour la liste des posts
function BlogPostList({ posts }: { posts: any[] }) {
  return (
    <div className="font-montserrat text-dark-800 dark:text-almost-white grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {posts.map((post: any) => (
        <Suspense key={post.slug} fallback={<BlogPostBlockSkeleton />}>
          <BlogPostBlock post={post} />
        </Suspense>
      ))}
    </div>
  );
}

export default function BlogPage() {
  const t = useTranslations('Blog.PostsList');
  const params = useParams();
  const locale = params.locale as string;
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const allPosts = await getPosts(50, locale);
      setPosts(allPosts);
      setTotalPosts(allPosts.length);
      setIsLoading(false);
    };

    fetchPosts();
  }, [locale]);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <div className="relative mx-auto flex max-w-2xl flex-col items-start">
        <PageTitle title={t('title')} subtitle={t('subtitle')} />
      </div>

      <div className="text-dark-800 dark:text-almost-white mx-auto mt-24 mb-12 flex w-full max-w-7xl flex-col justify-center gap-10 p-6 md:flex-row md:p-12 xl:mt-32">
        <div className="flex w-full flex-col">
          <h3 className="mb-4 text-2xl font-semibold">
            {t('derniers-articles')}
          </h3>
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {Array(POSTS_PER_PAGE)
                .fill(0)
                .map((_, index) => (
                  <BlogPostBlockSkeleton key={index} />
                ))}
            </div>
          ) : visiblePosts.length > 0 ? (
            <BlogPostList posts={visiblePosts} />
          ) : (
            <div className="my-20 text-center text-2xl font-semibold">
              {t('aucun-article-trouve')}
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
}

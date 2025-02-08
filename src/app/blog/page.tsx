/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { getPosts } from '@api/wordPress/service';

import BlogPostBlock from '@/components/blogPostBlock';
import PageTitle from '@/components/pageTitle';
import Pagination from '@/components/pagination';

const POSTS_PER_PAGE = 8;

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts(50); // Get 50 posts as a buffer
      setPosts(allPosts);
      setTotalPosts(allPosts.length);
    };

    fetchPosts();
  }, []);

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
        <PageTitle
          title="Le blog"
          subtitle="Discussions, réfléxions, actualités, ou conseils. Ici on aborde divers sujets autour du développement web 🧑‍💻"
        />
      </div>

      <div className="text-dark-800 dark:text-almost-white mx-auto mt-24 mb-12 flex w-full max-w-7xl flex-col justify-center gap-10 p-6 md:flex-row md:p-12 xl:mt-32">
        <div className="flex w-full flex-col">
          <h3 className="mb-4 text-2xl font-semibold">Derniers articles</h3>
          <div className="font-montserrat text-dark-800 dark:text-almost-white grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {visiblePosts.map((post: any) => {
              return <BlogPostBlock key={post.slug} post={post} />;
            })}
          </div>
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

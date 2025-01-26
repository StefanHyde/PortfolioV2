/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPosts } from '@api/wordPress/service';

import BlogPostBlock from '@/components/blogPostBlock';
import PageTitle from '@/components/pageTitle';

export default async function BlogPage() {
  const posts = await getPosts(50); // Get the 50 latest posts

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
            {posts.map((post: any) => {
              return <BlogPostBlock key={post.slug} post={post} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

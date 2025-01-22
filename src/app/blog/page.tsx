import { getPosts } from '@api/wordPress/service';

import BlogPostBlock from '@/components/blogPostBlock';
import PageTitle from '@/components/pageTitle';

export default async function BlogPage() {
  const posts = await getPosts(50); // Get the 50 latest posts

  return (
    <main>
      <div className="relative mx-auto flex max-w-2xl flex-col items-start ">
        <PageTitle
          title="Le blog"
          subtitle="Discussions, réfléxions, actualités, ou conseils. Ici on aborde divers sujets autour du développement web 🧑‍💻"
        />
      </div>

      <div className="mx-auto flex flex-col md:flex-row justify-center w-full max-w-7xl gap-10  p-6 mb-12 md:p-12 mt-24 xl:mt-32 text-dark-800 dark:text-almost-white">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl font-semibold  mb-4">Derniers articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 font-montserrat text-dark-800 dark:text-almost-white">
            {posts.map((post: any) => {
              return <BlogPostBlock key={post.slug} post={post} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

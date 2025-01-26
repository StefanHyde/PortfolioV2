import { getPostBySlug } from '@api/wordPress/service';

import BlogPostHeader from '@/components/blogPostHeader';

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return (
    <main>
      <div className="relative mx-auto flex w-full flex-col items-start">
        <BlogPostHeader
          title={post.title}
          coverImage={post.featuredImage?.node?.sourceUrl || null}
        />
      </div>
      <div className="text-dark-800 dark:text-almost-white mx-auto mt-24 mb-12 flex w-full max-w-7xl flex-col justify-center gap-10 p-6 md:p-12 xl:mt-32">
        <section>
          <div
            className="post-content mx-auto mt-20 w-full py-6 text-lg md:w-3/5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </section>
      </div>
    </main>
  );
}

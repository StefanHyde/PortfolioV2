import { getPostBySlug } from '@api/wordPress/service';

import BlogPostHeader from '@/components/blogPostHeader';

export default async function BlogPost({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await paramsPromise;
  const post = await getPostBySlug(slug);

  return (
    <main>
      <div className="relative mx-auto flex w-full flex-col items-start">
        <BlogPostHeader
          title={post.title}
          coverImage={post.featuredImage?.node?.sourceUrl || null}
        />
      </div>
      <div className="text-dark-800 dark:text-almost-white mx-auto flex w-full flex-col justify-center gap-10 p-6 md:p-12">
        <section>
          <div
            className="post-content mx-auto w-full space-y-6 py-6 text-base sm:w-4/5 xl:w-3/5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </section>
      </div>
    </main>
  );
}

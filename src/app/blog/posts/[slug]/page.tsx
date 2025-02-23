import { getPostBySlug } from '@api/wordPress/service';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import BlogPostHeader from '@/components/blog/blogPostHeader';
import Breadcrumbs from '@/components/blog/blogBreadcrumbs';

// To generate the metadata from WP
export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await paramsPromise;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist',
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.metaDesc,
    keywords: post.seo.focuskw,
  };
}

export default async function BlogPost({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await paramsPromise;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div className="relative mx-auto flex w-full flex-col items-start">
        <BlogPostHeader
          title={post.title}
          date={post.date}
          author={post.author?.node?.name}
          coverImage={post.featuredImage?.node?.sourceUrl || null}
          tags={post.tags}
        />
      </div>

      <div className="text-dark-800 dark:text-almost-white mx-auto flex w-full flex-col justify-center gap-10 p-6 md:p-12 xl:w-3/4">
        <Breadcrumbs title={post.title} />
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

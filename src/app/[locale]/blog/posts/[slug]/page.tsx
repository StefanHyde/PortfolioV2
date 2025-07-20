import { getPostBySlug, getCommentsByPostId } from '@api/wordPress/service';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import BlogPostHeader from '@/components/blog/blogPostHeader';
import Breadcrumbs from '@/components/blog/blogBreadcrumbs';
import Comments from '@/components/blog/blogPostComments';

interface PageParams {
  slug: string;
  locale: string;
}

interface PageProps {
  params: Promise<PageParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// To generate the metadata from WP
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug, locale);

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
    openGraph: {
      title: post.seo.opengraphTitle || post.seo.title,
      description: post.seo.opengraphDescription || post.seo.metaDesc,
      url: post.seo.opengraphUrl,
      images: [
        { url: post.seo.opengraphImage?.link || '', width: 1200, height: 630 },
      ],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug, locale);
  const comments = await getCommentsByPostId(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Toaster position="top-center" />
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

        <section className="border-dark-300 mx-auto mt-12 w-full space-y-6 border-t py-6 pt-6 text-base sm:w-4/5 xl:w-3/5">
          <Comments
            postSlug={slug}
            initialComments={comments}
            locale={locale}
          />
        </section>
      </div>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';

import defaultPostImg from '@images/defaultblog.jpg';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null;
}

export default function BlogPostBlock({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        key={post.id}
        className='relative overflow-hidden  pt-0 pb-8 px-0  row-span-3 flex flex-col h-96 backdrop-blur-md p-4  border-solid border-2 border-primary-500 dark:border-almost-white rounded-md bg-gradient-to-br from-primary-50 dark:from-primary-950 to-transparent shadow-md"'
      >
        {post.featuredImage && post.featuredImage.node.sourceUrl ? (
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
            width={500}
            height={300}
            className="w-full h-32 md:h-48 mb-6 object-cover "
          />
        ) : (
          <Image
            src={defaultPostImg}
            alt="image par défaut"
            width={500}
            height={300}
            className="w-full h-32 md:h-48 mb-6 object-cover "
          />
        )}
        <div className="p-4">
          <h3 className="text-xl font-montserrat font-semibold group-hover:text-primary-500 ease-in-out duration-300">
            {post.title}
          </h3>
          <div
            className="text-normal text-sm font-extralight font-montserrat group-hover:text-primary-500 ease-in-out duration-300"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </div>
      </div>
    </Link>
  );
}

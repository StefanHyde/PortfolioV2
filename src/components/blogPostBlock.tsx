import defaultPostImg from '@images/defaultblog.jpg';
import Image from 'next/image';
import Link from 'next/link';

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
  tags: {
    nodes: {
      name: string;
    }[];
  };
}

export default function BlogPostBlock({ post }: { post: Post }) {
  return (
    <Link href={`/blog/posts/${post.slug}`}>
      <article
        key={post.id}
        className="group relative overflow-hidden  pt-0  px-0 row-span-3 flex flex-col h-72 md:h-96 backdrop-blur-md   border-solid border-2 border-primary-500 dark:border-almost-white rounded-md bg-gradient-to-br from-primary-50 dark:from-primary-950 to-transparent shadow-md hover:shadow-lg ease-in-out duration-300"
      >
        {post.featuredImage && post.featuredImage.node.sourceUrl ? (
          <div className="relative w-full h-1/2 overflow-hidden">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              width={500}
              height={300}
              className="w-full h-full object-cover group-hover:brightness-90 group-hover:scale-105 ease-in-out duration-300"
            />
          </div>
        ) : (
          <div className="relative w-full h-1/2 overflow-hidden">
            <Image
              src={defaultPostImg}
              alt="image par défaut"
              width={500}
              height={300}
              className="w-full h-full group-hover:brightness-90 group-hover:scale-105 ease-in-out duration-300"
            />
          </div>
        )}
        <div className="flex flex-col p-4 h-1/2 justify-around">
          <h3 className="flex-1 text-base md:text-lg  font-montserrat font-semibold text-ellipsis overflow-hidden group-hover:text-primary-500 ease-in-out duration-300">
            {post.title}
          </h3>
          <div className="flex-none text-sm text-gray-500 mt-3">
            {post.tags.nodes.map((tag: { name: string }) => (
              <span
                key={tag.name}
                className="mr-2 p-1 text-xs bg-primary-200 dark:bg-primary-500 text-primary-900 dark:text-almost-white rounded-sm "
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

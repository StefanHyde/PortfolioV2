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
        className="group border-primary-500 dark:border-almost-white from-primary-50 dark:from-primary-950 relative row-span-3 flex h-72 flex-col overflow-hidden rounded-md border-2 border-solid bg-gradient-to-br to-transparent px-0 pt-0 shadow-md backdrop-blur-md duration-300 ease-in-out hover:shadow-lg md:h-96"
      >
        {post.featuredImage && post.featuredImage.node.sourceUrl ? (
          <div className="relative h-1/2 w-full overflow-hidden">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              width={500}
              height={300}
              className="h-full w-full object-cover duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
            />
          </div>
        ) : (
          <div className="relative h-1/2 w-full overflow-hidden">
            <Image
              src={defaultPostImg}
              alt="image par défaut"
              width={500}
              height={300}
              className="h-full w-full duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-90"
            />
          </div>
        )}
        <div className="flex h-1/2 flex-col justify-around p-4">
          <h3 className="font-montserrat group-hover:text-primary-500 flex-1 overflow-hidden text-base font-semibold text-ellipsis duration-300 ease-in-out md:text-lg">
            {post.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-500">
            {post.tags.nodes.map((tag: { name: string }) => (
              <span
                key={tag.name}
                className="bg-primary-200 dark:bg-primary-500 text-primary-900 dark:text-almost-white rounded-sm p-1 text-xs"
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

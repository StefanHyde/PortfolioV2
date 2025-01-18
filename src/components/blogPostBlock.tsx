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
      <div key={post.id}>
        {post.featuredImage && post.featuredImage.node.sourceUrl ? (
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
            width={500}
            height={300}
          />
        ) : (
          <Image
            src={defaultPostImg}
            alt="image par défaut"
            width={500}
            height={300}
          />
        )}
        <div>{post.title}</div>
        <div>{post.excerpt}</div>
        <div>{post.slug}</div>
      </div>
    </Link>
  );
}

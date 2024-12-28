import { getPosts } from '../api/wordPress/service';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  //TODO: Add others fields here
}

export default async function BlogPage() {
  const posts = await getPosts(50); // Get the 50 latest posts

  return (
    <div>
      {/* Render your posts here */}
      {posts.map((post: Post) => (
        <>
          <div key={post.id}>{post.title} </div>
          <div>{post.excerpt} </div>
        </>
      ))}
    </div>
  );
}

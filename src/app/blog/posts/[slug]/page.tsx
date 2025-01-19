import { getPostBySlug } from '@api/wordPress/service';

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  console.log(post);

  return <div dangerouslySetInnerHTML={{ __html: post.content }} />;
}

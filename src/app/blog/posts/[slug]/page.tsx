import { getPostBySlug } from '@api/wordPress/service';

import PageTitle from '@/components/pageTitle';

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  console.log(post);

  return (
    <main>
      <div className="relative mx-auto flex max-w-2xl flex-col items-start ">
        <PageTitle title={post.title} titleSize="small" />
      </div>
      <div className="mx-auto flex flex-col justify-center w-full max-w-7xl gap-10  p-6 mb-12 md:p-12 mt-24 xl:mt-32 text-dark-800 dark:text-almost-white">
        <section>
          <div className="z-20 text-center">
            <h1 className="text-2xl md:text-4xl mb-4">{post.title}</h1>
          </div>
          <div
            className="post-content w-full md:w-3/5 mx-auto mt-20 py-6 text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </section>
      </div>
    </main>
  );
}

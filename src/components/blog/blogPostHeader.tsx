'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import defaultCoverImage from '@images/defaultblog.jpg';

type blogPostHeaderProps = {
  title: string;
  date: string;
  author: string;
  coverImage: string;
  defaultCoverImage?: string;
  tags?: { nodes: { name: string }[] } | null;
};

export default function BlogPostHeader({
  title,
  date,
  author,
  coverImage,
  tags,
}: blogPostHeaderProps) {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('Blog.postHeader');
  return (
    <div className="relative mx-auto mt-14 flex h-auto w-full flex-col items-start">
      <div className="from-dark-950 absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-t from-5% to-transparent dark:from-slate-950"></div>
      <div className="absolute z-20 flex h-full w-full flex-col items-start justify-end p-6 md:p-12">
        <h1 className="font-montserrat text-almost-white mb-6 text-4xl font-semibold md:text-5xl">
          {title}
        </h1>
        <p className="font-montserrat text-almost-white mb-6 text-sm">
          {`${t('posté-le')} 
          ${new Date(date).toLocaleDateString(locale, {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })} ${t('par')} ${author}`}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags?.nodes?.map((tag) => (
            <div
              key={tag.name}
              className="bg-primary-200 dark:bg-primary-500 text-primary-900 dark:text-almost-white mr-2 rounded-sm p-1 text-xs"
            >
              {tag.name}
            </div>
          ))}
        </div>
      </div>

      <Image
        src={coverImage ? coverImage : defaultCoverImage} // Use fallback image if no cover image is provided
        alt={title}
        width={1200}
        height={600}
        className="h-80 w-full object-cover object-center md:h-128"
      />
    </div>
  );
}

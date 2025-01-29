import Image from 'next/image';
import defaultCoverImage from '@images/defaultblog.jpg';

type blogPostHeaderProps = {
  title: string;
  coverImage: string;
  defaultCoverImage?: string;
};

export default function BlogPostHeader({
  title,
  coverImage,
}: blogPostHeaderProps) {
  return (
    <div className="relative mx-auto mt-14 flex h-auto w-full flex-col items-start">
      <div className="from-dark-950 absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-t from-5% to-transparent dark:from-slate-950"></div>
      <div className="absolute z-20 flex h-full w-full items-end justify-center p-4 md:justify-start md:p-12">
        <h1 className="font-montserrat text-almost-white mb-6 text-4xl font-semibold md:text-5xl">
          {title}
        </h1>
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

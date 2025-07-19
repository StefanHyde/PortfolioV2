'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface BreadcrumbsProps {
  title: string;
}

export default function Breadcrumbs({ title }: BreadcrumbsProps) {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('Blog.breadcrumbs');
  return (
    <nav className="mb-6 text-sm text-gray-600">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href={`/${locale}`} className="hover:text-primary-600">
            {t('home')}
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <span>/</span>
          <Link href={`/${locale}/blog`} className="hover:text-primary-600">
            {t('blog')}
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <span>/</span>
          <span className="text-gray-400">{title}</span>
        </li>
      </ol>
    </nav>
  );
}

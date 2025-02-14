import Link from 'next/link';

interface BreadcrumbsProps {
  title: string;
}

export default function Breadcrumbs({ title }: BreadcrumbsProps) {
  return (
    <nav className="mb-6 text-sm text-gray-600">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:text-primary-600">
            Accueil
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <span>/</span>
          <Link href="/blog" className="hover:text-primary-600">
            Blog
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

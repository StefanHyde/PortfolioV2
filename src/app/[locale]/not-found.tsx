import Hero from '../../components/hero';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('404');
  const locale = useLocale();

  return (
    <main>
      <div className="relative mx-auto flex h-screen w-full max-w-7xl items-center justify-center px-6 md:px-8 lg:px-12">
        <Hero
          title={t('title')}
          subtitle={t('subtitle')}
          CTA={{ text: t('retour-accueil'), url: `/${locale}` }}
        />
      </div>
    </main>
  );
}

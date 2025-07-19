'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import PageTitle from '@/components/pageTitle';

export default function RgpdPage() {
  const t = useTranslations('RGPD');
  return (
    <main>
      <div className="relative mx-auto flex flex-col items-start">
        <PageTitle title={t('title')} titleSize="small" />
      </div>
      <div className="text-normal font-montserrat text-dark-800 dark:text-almost-white mx-auto mt-24 mb-12 flex w-full flex-col items-start justify-center gap-20 p-6 text-sm font-light md:p-12 md:text-base xl:mt-32">
        <section className="mb-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {t('Misc.collecte-des-donnees-personnelles')}
            </h2>
            <p>{t('collect-data-paragraph')}</p>
            <ul className="list-disc pl-8">
              <li>{t('Misc.nom')}</li>
              <li>{t('Misc.adresse-email')}</li>
            </ul>
          </div>
        </section>
        <section className="mb-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {t('Misc.utilisation-des-donnees-personnelles')}
            </h2>
            <p>{t('use-data-paragraph')}</p>
            <ul className="list-disc pl-8">
              <li>{t('Misc.repondre-aux-demandes')}</li>
              <li>{t('Misc.ameliorer-le-site-web')}</li>
              <li>
                {t('Misc.envoyer-des-newsletters-et-communications-marketing')}
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {t('Misc.protection-des-donnees')}
            </h2>
            <p>{t('protect-data-paragraph')}</p>
          </div>
        </section>
        <section className="mb-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {t('Misc.conservation-des-donnees')}
            </h2>
            <p>{t('data-retention-paragraph')}</p>
          </div>
        </section>
        <section className="mb-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {t('Misc.droits-des-utilisateurs')}
            </h2>
            <p>{t('data-rights-paragraph')}</p>
            <ul className="list-disc pl-8">
              <li>{t('Misc.droit-dacces')}</li>
              <li>{t('Misc.droit-de-rectification')}</li>
              <li>{t('Misc.droit-a-leffacement')}</li>
              <li>{t('Misc.droit-a-la-limitation-du-traitement')}</li>
              <li>{t('Misc.droit-a-la-portabilite-des-donnees')}</li>
            </ul>
          </div>
        </section>
        <section className="mb-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              {t('Misc.politique-en-matiere-de-cookies')}
            </h2>
            <p>{t('cookies-policy-paragraph')}</p>
          </div>
        </section>
        <section className="mb-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">{t('Misc.contact')}</h2>

            <p>
              {t('contact-paragraph')}
              <Link
                href={'mailto:contact@stefanheyd.com'}
                className="hover:text-primary-500 hover:underline"
              >
                contact@stefanheyd.com
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

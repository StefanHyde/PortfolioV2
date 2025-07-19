import Link from 'next/link';
import { useTranslations } from 'next-intl';

import PageTitle from '@/components/pageTitle';

export default function LegalPage() {
  const t = useTranslations('Legal');
  return (
    <main>
      <div className="relative mx-auto flex flex-col items-start">
        <PageTitle title={t('title')} titleSize="small" />
      </div>
      <div className="text-normal font-montserrat text-dark-800 dark:text-almost-white mx-auto mt-24 mb-12 flex w-full flex-col items-start justify-center gap-20 p-6 text-sm font-light md:p-12 md:text-base xl:mt-32">
        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            1. {t('Misc.editeur-du-site')}
          </h2>
          <ul>
            <li>
              <strong>{t('Misc.nom')} :</strong> Stéphane Heyd
            </li>
            <li>
              <strong>Adresse :</strong> 4 rue de Munster, 67100 Strasbourg,
              France
            </li>

            <li>
              <strong>{t('Misc.email')} :</strong>{' '}
              <Link
                href="mailto:contact@stefanheyd.com"
                className="text-primary-500 hover:underline"
              >
                contact@stefanheyd.com
              </Link>
            </li>

            <li>
              <strong>{t('Misc.siret')} :</strong> 90508558500016
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            2. {t('Misc.hebergeur')}
          </h2>
          <ul>
            <li>
              <strong>{t('Misc.hebergeur')} :</strong> Hostinger
            </li>
            <li>
              <strong>{t('Misc.adresse')} :</strong> 61 Lordou Vironos, Larnaca,
              6023, Chypre
            </li>
            <li>
              <strong>{t('Misc.site-web')} :</strong>{' '}
              <Link
                href="https://www.hostinger.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                www.hostinger.fr
              </Link>
            </li>

            <li>
              <strong>{t('Misc.contact')} :</strong>{' '}
              <Link
                href="mailto:support@hostinger.com"
                className="text-primary-500 hover:underline"
              >
                support@hostinger.com
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            3. {t('Misc.objet-du-site')}
          </h2>
          <p>{t('object-paragraph')}</p>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            4. {t('Misc.propriete-intellectuelle')}
          </h2>
          <p>{t('propriete-paragraph')}</p>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            5. {t('Misc.protection-des-donnees-personnelles')}
          </h2>
          <p>{t('protection-paragraph')}</p>
          <p>
            {t('contact-paragraph')}
            <Link
              href="mailto:contact@stefanheyd.com"
              className="text-primary-500 hover:underline"
            >
              contact@stefanheyd.com
            </Link>
            .
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            6. {t('Misc.cookies')}
          </h2>
          <p>{t('cookies-paragraph')}</p>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            7. {t('Misc.responsabilite')}
          </h2>
          <p>{t('responsabilite-paragraph')}</p>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            8. {t('Misc.contact')}
          </h2>
          <p>
            {t('contact-paragraph')}
            <Link
              href="mailto:contact@stefanheyd.com"
              className="text-primary-500 hover:underline"
            >
              contact@stefanheyd.com
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

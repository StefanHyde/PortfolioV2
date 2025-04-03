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
          <h2 className="mb-4 text-2xl font-semibold">1. Éditeur du site</h2>
          <ul>
            <li>
              <strong>Nom :</strong> Stéphane Heyd
            </li>
            <li>
              <strong>Adresse :</strong> 4 rue de Munster, 67100 Strasbourg,
              France
            </li>

            <li>
              <strong>Email :</strong>{' '}
              <Link
                href="mailto:contact@stefanheyd.com"
                className="text-primary-500 hover:underline"
              >
                contact@stefanheyd.com
              </Link>
            </li>

            <li>
              <strong>SIRET :</strong> 90508558500016
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            2. Hébergement du site
          </h2>
          <ul>
            <li>
              <strong>Hébergeur :</strong> Hostinger
            </li>
            <li>
              <strong>Adresse :</strong> 61 Lordou Vironos, Larnaca, 6023,
              Chypre
            </li>
            <li>
              <strong>Site web :</strong>{' '}
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
              <strong>Contact :</strong>{' '}
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
          <h2 className="mb-4 text-2xl font-semibold">3. Objet du site</h2>
          <p>
            Le présent site est un site vitrine ayant pour objectif de présenter
            les services de Stéphane Heyd.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            4. Propriété intellectuelle
          </h2>
          <p>
            Le contenu de ce site (textes, images, graphismes, logo, icônes,
            etc.) est la propriété exclusive de Stéphane Heyd, sauf mentions
            contraires. Toute reproduction, distribution, modification ou
            utilisation, même partielle, sans l’autorisation préalable de
            Stéphane Heyd est strictement interdite et constitue une contrefaçon
            sanctionnée par le Code de la propriété intellectuelle.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">
            5. Protection des données personnelles
          </h2>
          <p>
            Le site ne collecte pas de données personnelles sans votre
            consentement. Si vous envoyez un message via le formulaire de
            contact ou par email, vos informations (nom, email, message) seront
            utilisées uniquement dans le cadre de votre demande.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d’un droit d’accès, de rectification, de
            suppression ou d’opposition à vos données. Pour exercer ce droit,
            vous pouvez contacter Stéphane Heyd à l’adresse email suivante :{' '}
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
          <h2 className="mb-4 text-2xl font-semibold">6. Cookies</h2>
          <p>
            Le site peut utiliser des cookies pour améliorer l’expérience
            utilisateur. Vous pouvez configurer votre navigateur pour refuser
            les cookies ou être averti de leur installation.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">7. Responsabilité</h2>
          <p>
            Stéphane Heyd s’efforce de fournir sur ce site des informations
            aussi précises que possible. Toutefois, il ne peut être tenu
            responsable des omissions, des inexactitudes, ou des carences dans
            la mise à jour des informations, qu&apos;elles soient de son fait ou
            du fait des tiers fournissant ces informations.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">8. Contact</h2>
          <p>
            Pour toute question ou réclamation concernant ce site, vous pouvez
            contacter Stéphane Heyd à l’adresse suivante :{' '}
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

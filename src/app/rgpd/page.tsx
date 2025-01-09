import Link from 'next/link';
import PageTitle from '@/components/pageTitle';

export default function RgpdPage() {
  return (
    <main>
      <div className="relative mx-auto flex flex-col items-start ">
        <PageTitle title="Politique de confidentialité" titleSize="small" />
      </div>
      <div className="mx-auto flex flex-col items-start justify-center gap-20 w-full  p-6 mb-12 md:p-12 mt-24 xl:mt-32 text-normal text-sm md:text-base font-montserrat font-light  text-dark-800 dark:text-almost-white ">
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            Collecte des données personnelles
          </h2>
          <p>Nous collectons les données personnelles suivantes :</p>
          <ul className="list-disc pl-8">
            <li>Nom</li>
            <li>Adresse e-mail</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            Utilisation des données personnelles
          </h2>
          <p>Les données personnelles collectées sont utilisées pour :</p>
          <ul className="list-disc pl-8">
            <li>Répondre aux demandes des utilisateurs</li>
            <li>Améliorer notre site web</li>
            <li>Envoyer des newsletters et des communications marketing</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            Protection des données
          </h2>
          <p>
            Nous prenons la sécurité des données personnelles au sérieux et
            mettons en place des mesures de sécurité pour protéger ces données
            contre tout accès non autorisé ou toute divulgation.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            Conservation des données
          </h2>
          <p>
            Nous conservons les données personnelles collectées aussi longtemps
            que nécessaire pour atteindre les objectifs mentionnés ci-dessus ou
            aussi longtemps que requis par la loi.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            Droits des utilisateurs
          </h2>
          <p>
            Les utilisateurs ont les droits suivants concernant leurs données
            personnelles :
          </p>
          <ul className="list-disc pl-8">
            <li>Droit d&apos;accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement</li>
            <li>Droit de limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">
            Politique en matière de cookies
          </h2>
          <p>
            Nous utilisons des cookies sur notre site web. Les cookies sont de
            petits fichiers texte qui sont stockés sur l&apos;appareil de
            l&apos;utilisateur par le navigateur web et qui permettent de
            reconnaître l&apos;utilisateur lorsqu&apos;il revient sur le site
            web.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            <p>
              Pour toute question ou demande concernant notre politique de
              confidentialité, veuillez nous contacter à l&apos;adresse suivante
              :{' '}
              <Link
                href={'mailto:contact@stefanheyd.com'}
                className="hover:text-primary-500 hover:underline"
              >
                contact@stefanheyd.com
              </Link>
            </p>
          </p>
        </section>
      </div>
    </main>
  );
}

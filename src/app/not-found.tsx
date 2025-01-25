import Hero from '../components/hero';

export default function NotFound() {
  return (
    <main>
      <div className="relative mx-auto flex h-screen w-full max-w-7xl items-center justify-center px-6 md:px-8 lg:px-12">
        <Hero
          title="404"
          subtitle="⚠️ La page que vous cherchez n'existe
                    pas ou a été déplacée."
          CTA={{ text: "Retour à l'accueil", url: '/' }}
        />
      </div>
    </main>
  );
}

import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full ">
      <div className="justify-start mb-12  text-dark-800 dark:text-almost-white md:w-2/3">
        <h2 className="mb-6 text-4xl md:text-5xl font-montserrat font-semibold">
          Votre{' '}
          <span className="text-6xl md:text-7xl bg-gradient-to-r from-primary-800 to-primary-400 inline-block text-transparent bg-clip-text text-primary-500">
            développeur
          </span>{' '}
          à l&apos;écoute de vos besoins
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 md:gap-24 md:flex-row w-full">
        <div className="flex items-center justify-center bg-gradient-to-bl from-primary-50 to-primary-100 dark:from-primary-950 dark:to-transparent h-52 w-52 rounded-full shadow-md">
          <Image
            src="/images/avatar.png"
            width={300}
            height={300}
            alt="Développeur web"
            className="-rotate-12"
          />
        </div>

        <div className="flex flex-col p-4 md:w-2/3 xl:w-1/2 backdrop-blur-md border-solid  dark:border-almost-white rounded-md dark:text-almost-white bg-gradient-to-b from-primary-50 dark:from-primary-950 to-transparent shadow-md ">
          <p className="text-normal md:text-lg font-montserrat font-light ">
            Je suis Stéphane, <strong>développeur web</strong> basé en France.
            <br />
            Après de nombreuses expériences dans le support technique et la
            communication, j'ai décidé de me reconvertir dans le domaine du
            développement web. Grâce à l'attrait qui m'anime et à ma soif de
            nouvelles connaissances je peux chaque jour, apprendre de nouvelles
            choses : langages, frameworks, techniques... Le tout pour m'adapter
            au mieux à chaque projet.
            <br />
            Au-delà de ma curiosité je suis également un créatif, dans divers
            domaines. J'utilise cet atout dans le cadre du développement web
            pour mener à bien la conception d'un site, et rendre ce dernier
            authentique.
          </p>
        </div>
      </div>
    </div>
  );
}

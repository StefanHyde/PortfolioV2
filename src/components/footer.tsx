import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-primary-500 dark:bg-primary-800 text-white dark:text-almost-white md:flex md:flex-row md:justify-between p-8 md:py-2 md:px-4">
      <div className="container mx-auto text-center md:text-start mb-7 md:mb-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Stefan Heyd</p>
      </div>
      {
        //TODO: Add navigation and legal / contact links
      }
      <div className="container flex justify-center items-center md:justify-end gap-8 md:gap-4 mx-auto">
        <a
          href="https://github.com/DrHyde01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="h-6 md:h-4 w-6 md:w-4 hover:text-primary-200 ease-in-out duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/stefan-heyd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="h-6 md:h-4 w-6 md:w-4 hover:text-primary-200 ease-in-out duration-300" />
        </a>
        <a
          href="https://x.com/DrHyde01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiX className="h-6 md:h-4 w-6 md:w-4 hover:text-primary-200 ease-in-out duration-300" />
        </a>
      </div>
    </footer>
  );
}

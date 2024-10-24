import ThemeSwitch from './themeSwitch';

export default function Header() {
  return (
    <header className=" z-50 flex items-center justify-end p-8">
      <div className=" bg-white dark:bg-slate-950">
        <ThemeSwitch />
      </div>
    </header>
  );
}

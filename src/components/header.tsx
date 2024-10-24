import ThemeSwitch from './themeSwitch';

export default function Header() {
  return (
    <header className=" fixed z-50 h-auto w-full flex items-center justify-end p-8">
      <div className=" dark:bg-slate-950">
        <ThemeSwitch />
      </div>
    </header>
  );
}

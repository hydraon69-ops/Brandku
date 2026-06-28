const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-200/80 shadow-sm dark:bg-slate-950/85 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Brandku</h1>
        <nav className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
          <a href="#hero" className="transition hover:text-slate-900 dark:hover:text-white">Home</a>
          <a href="#fitur" className="transition hover:text-slate-900 dark:hover:text-white">Fitur</a>
          <a href="#footer" className="transition hover:text-slate-900 dark:hover:text-white">Kontak</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

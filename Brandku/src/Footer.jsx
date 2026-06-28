const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900 py-10 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm">© 2026 Brandku. Semua hak dilindungi.</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
          <a href="#hero" className="transition hover:text-white">Home</a>
          <a href="#fitur" className="transition hover:text-white">Fitur</a>
          <a href="#footer" className="transition hover:text-white">Kontak</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

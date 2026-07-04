import { useState } from 'react';

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'fitur', label: 'Fitur' },
  { id: 'footer', label: 'Kontak' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // auto-tutup menu mobile setelah klik link
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#150E23]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <h1 className="display text-xl font-bold text-white">
          Brand<span className="text-[#FF4D8D]">ku</span>
          <span className="text-[#C8FF4D]">✦</span>
        </h1>

        {/* Nav desktop — tersembunyi di layar kecil */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/70 sm:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollToSection(link.id)}
              className="group relative py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#C8FF4D] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Tombol hamburger — cuma muncul di layar kecil */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMenuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xl text-white sm:hidden"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Dropdown mobile — muncul cuma kalau isMenuOpen true */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#150E23] px-6 pb-4 pt-2 sm:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollToSection(link.id)}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-[#C8FF4D]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/Beranda', label: 'Beranda' },
  { path: '/Tentang', label: 'Tentang' },
  { path: '/Harga', label: 'Harga' },
];

const linkClass = ({ isActive }) =>
  `group relative py-1 transition ${isActive ? 'text-[#C8FF4D]' : 'text-white/70 hover:text-white'}`;

const mobileLinkClass = ({ isActive }) =>
  `rounded-xl px-3 py-3 text-sm font-semibold transition ${
    isActive ? 'bg-white/10 text-[#C8FF4D]' : 'text-white/80 hover:bg-white/5 hover:text-[#C8FF4D]'
  }`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#150E23]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <h1 className="display text-xl font-bold text-white">
          Brand<span className="text-[#FF4D8D]">ku</span>
          <span className="text-[#C8FF4D]">✦</span>
        </h1>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 text-sm font-semibold sm:flex">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-[#C8FF4D] transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Tombol hamburger — mobile */}
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

      {/* Dropdown mobile */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#150E23] px-6 pb-4 pt-2 sm:hidden">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={mobileLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
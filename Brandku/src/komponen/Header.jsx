import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const simpleLinks = [
  { path: '/Beranda', label: 'Beranda' },
  { path: '/Harga', label: 'Harga' },
];

const tentangMenu = [
  {
    kategori: 'Perusahaan',
    item: [
      { path: '/Tentang#cerita', label: 'Cerita Kami' },
      { path: '/Tentang#nilai', label: 'Nilai Kami' },
    ],
  },
  {
    kategori: 'Lainnya',
    item: [
      { path: '/Harga', label: 'Paket Harga' },
      { path: '/Beranda#fitur', label: 'Fitur Produk' },
    ],
  },
];

const linkClass = ({ isActive }) =>
  `relative py-1 text-sm font-semibold transition ${isActive ? 'text-[#C8FF4D]' : 'text-white/70 hover:text-white'}`;

const mobileLinkClass = ({ isActive }) =>
  `rounded-xl px-3 py-3 text-sm font-semibold transition ${
    isActive ? 'bg-white/10 text-[#C8FF4D]' : 'text-white/80 hover:bg-white/5 hover:text-[#C8FF4D]'
  }`;

const Header = ({ user, onOpenLogin, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTentangOpen, setIsTentangOpen] = useState(false);
  const [isMobileTentangOpen, setIsMobileTentangOpen] = useState(false);
  const tentangRef = useRef(null);

  // Tutup dropdown "Tentang" kalau klik terjadi di luar area dropdown-nya.
  useEffect(() => {
    if (!isTentangOpen) return;

    const handleClickOutside = (e) => {
      if (tentangRef.current && !tentangRef.current.contains(e.target)) {
        setIsTentangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isTentangOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#150E23]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <h1 className="display text-xl font-bold text-white">
          Brand<span className="text-[#FF4D8D]">ku</span>
          <span className="text-[#C8FF4D]">✦</span>
        </h1>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 sm:flex">
          <NavLink to="/Beranda" className={linkClass}>
            Beranda
          </NavLink>

          {/* Dropdown "Tentang" — muncul saat hover */}
          <div className="relative" ref={tentangRef}>
            <button
              type="button"
              onClick={() => setIsTentangOpen((prev) => !prev)}
              className="flex items-center gap-1 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              Tentang
              <span className={`text-xs transition-transform ${isTentangOpen ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {isTentangOpen && (
              <div className="absolute left-1/2 top-full z-40 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#1D1430] p-5 shadow-2xl">
                <div className="grid grid-cols-2 gap-5">
                  {tentangMenu.map((grup) => (
                    <div key={grup.kategori}>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#C8FF4D]">
                        {grup.kategori}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {grup.item.map((link) => (
                          <li key={link.label}>
                            <NavLink
                              to={link.path}
                              onClick={() => setIsTentangOpen(false)}
                              className="text-sm text-white/70 transition hover:text-white"
                            >
                              {link.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/Harga" className={linkClass}>
            Harga
          </NavLink>

          {user ? (
            <div className="flex items-center gap-3 border-l border-white/10 pl-6">
              <span className="text-sm text-white/70">
                Halo, <span className="font-bold text-[#C8FF4D]">{user.name}</span>
              </span>
              <button
                type="button"
                onClick={onLogout}
                className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold text-white/70 transition hover:border-[#FF4D8D] hover:text-[#FF4D8D]"
              >
                Keluar
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenLogin}
              className="rounded-full bg-[#FF4D8D] px-5 py-2 text-sm font-bold text-[#150E23] transition hover:-translate-y-0.5"
            >
              Masuk
            </button>
          )}
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
          <NavLink to="/Beranda" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
            Beranda
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMobileTentangOpen((prev) => !prev)}
            className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5"
          >
            Tentang
            <span className={`text-xs transition-transform ${isMobileTentangOpen ? 'rotate-180' : ''}`}>▾</span>
          </button>

          {isMobileTentangOpen && (
            <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
              {tentangMenu.flatMap((grup) => grup.item).map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMobileTentangOpen(false);
                  }}
                  className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-[#C8FF4D]"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}

          <NavLink to="/Harga" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
            Harga
          </NavLink>

          <div className="mt-2 border-t border-white/10 pt-3">
            {user ? (
              <div className="flex items-center justify-between px-3">
                <span className="text-sm text-white/70">
                  Halo, <span className="font-bold text-[#C8FF4D]">{user.name}</span>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold text-white/70"
                >
                  Keluar
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  onOpenLogin();
                  setIsMenuOpen(false);
                }}
                className="w-full rounded-full bg-[#FF4D8D] py-2.5 text-sm font-bold text-[#150E23]"
              >
                Masuk
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
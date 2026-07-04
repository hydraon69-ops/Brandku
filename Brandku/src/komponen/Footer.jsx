import { NavLink } from 'react-router-dom';

const links = [
  { path: '/Beranda', label: 'Beranda' },
  { path: '/Tentang', label: 'Tentang' },
  { path: '/Harga', label: 'Harga' },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#150E23] py-10 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm">© 2026 Brandku. Semua hak dilindungi.</p>
        <div className="flex flex-wrap justify-center gap-5 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition ${isActive ? 'text-[#C8FF4D]' : 'hover:text-[#C8FF4D]'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
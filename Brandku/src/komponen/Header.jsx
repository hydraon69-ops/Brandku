const links = [
  { id: 'hero', label: 'Home' },
  { id: 'fitur', label: 'Fitur' },
  { id: 'footer', label: 'Kontak' },
];

const Header = () => {
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#150E23]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <h1 className="display text-xl font-bold text-white">
          Brand<span className="text-[#FF4D8D]">ku</span>
          <span className="text-[#C8FF4D]">✦</span>
        </h1>
        <nav className="flex items-center gap-6 text-sm font-semibold text-white/70">
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
      </div>
    </header>
  );
};

export default Header;
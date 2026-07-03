const links = [
  { id: 'hero', label: 'Home' },
  { id: 'fitur', label: 'Fitur' },
  { id: 'footer', label: 'Kontak' },
];

const Footer = () => {
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="border-t border-white/10 bg-[#150E23] py-10 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm">© 2026 Brandku. Semua hak dilindungi.</p>
        <div className="flex flex-wrap justify-center gap-5 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={scrollToSection(link.id)}
              className="transition hover:text-[#C8FF4D]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
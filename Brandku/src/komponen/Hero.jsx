const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#150E23] text-white">
      {/* ambient blobs */}
      <div className="blob pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#7C5CFF]/40 blur-3xl" />
      <div
        className="blob pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#FF4D8D]/30 blur-3xl"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-24 sm:px-8">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8FF4D] backdrop-blur">
          ✨ Buat brand yang gaspol
        </span>

        <h2 className="display max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          Brand yang bikin
          <span className="block text-[#FF4D8D]">orang noleh dua kali.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
          Brandku bantu kamu tampilin identitas brand yang tegas, cepat, dan enak dilihat —
          tanpa ribet, tanpa basa-basi.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button className="inline-flex w-fit items-center justify-center rounded-full bg-[#FF4D8D] px-7 py-3.5 text-sm font-bold text-[#150E23] shadow-[0_8px_0_0_#a12f5c] transition hover:-translate-y-0.5 hover:shadow-[0_10px_0_0_#a12f5c] active:translate-y-1 active:shadow-none">
            Pelajari Lebih Lanjut
          </button>
          <a
            href="#fitur"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:border-[#C8FF4D] hover:text-[#C8FF4D]"
          >
            Lihat Fitur
            <span aria-hidden className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
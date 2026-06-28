const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-sky-600 via-cyan-500 to-slate-800 text-white">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-20 sm:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100/90">Selamat datang</p>
        <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Selamat datang di Brandku</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-cyan-100/90">
          Aplikasi sederhana untuk menampilkan brand dan fitur unggulan.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            Pelajari Lebih Lanjut
          </button>
          <a href="#fitur" className="inline-flex w-fit items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
            Lihat Fitur
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

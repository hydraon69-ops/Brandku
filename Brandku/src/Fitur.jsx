const features = [
  {
    title: 'Desain responsif',
    description: 'Tampilan rapi di desktop dan mobile untuk pengalaman pengguna yang mulus.',
  },
  {
    title: 'Integrasi mudah',
    description: 'Siap dipakai dengan setup cepat ke proyek Anda.',
  },
  {
    title: 'Performa cepat',
    description: 'Halaman ringan dan cepat dimuat di semua perangkat.',
  },
];

const Fitur = () => {
  return (
    <section id="fitur" className="bg-slate-50 py-20 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Fitur Kami</h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Fitur utama yang membuat Brandku mudah digunakan.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fitur;

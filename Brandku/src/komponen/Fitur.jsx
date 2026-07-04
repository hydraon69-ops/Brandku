import { useRef } from 'react';
import Card from './Card.jsx';

const Fitur = ({ features, onLike }) => {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onPointerDown = (e) => {
    // Kalau yang diklik itu tombol (misalnya ❤️) atau elemen di dalamnya,
    // jangan mulai drag — biarkan klik tombolnya berjalan normal.
    if (e.target.closest('button')) return;

    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = trackRef.current.scrollLeft;
    trackRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startX.current;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section id="fitur" className="bg-[#150E23] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8FF4D]">
            Kenapa Brandku
          </span>
          <h2 className="display text-3xl font-bold sm:text-4xl">Fitur yang worth it</h2>
          <p className="max-w-md text-sm text-white/60 sm:text-base">
            Geser ke samping buat lihat semuanya, klik ❤️ kalau suka 👉
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 active:cursor-grabbing sm:px-8"
      >
        {features.map((feature) => (
          <Card
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            tint={feature.tint}
            likes={feature.likes}
            onLike={() => onLike(feature.id)}
          />
        ))}
        <div className="shrink-0 sm:w-2" />
      </div>
    </section>
  );
};

export default Fitur;
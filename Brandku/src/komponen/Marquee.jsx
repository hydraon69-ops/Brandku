const words = ['DESAIN RESPONSIF', '✦', 'INTEGRASI MUDAH', '✦', 'PERFORMA CEPAT', '✦', 'BRANDKU', '✦'];

const Marquee = () => {
  return (
    <div className="relative -rotate-1 overflow-hidden bg-[#C8FF4D] py-3 shadow-[0_0_0_2px_#150E23]">
      <div className="marquee-track">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="display mx-4 shrink-0 text-lg font-bold tracking-tight text-[#150E23] sm:text-2xl"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
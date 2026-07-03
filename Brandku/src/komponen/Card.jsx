const Card = ({ icon, title, description, tint, likes, onLike }) => {
  return (
    <article className="pop-in w-[78vw] shrink-0 snap-center rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-1 sm:w-[320px]">
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
        style={{ backgroundColor: `${tint}25` }}
      >
        {icon}
      </div>
      <h3 className="display text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>

      <button
        type="button"
        onClick={onLike}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm font-semibold text-white/80 transition hover:border-[#FF4D8D] hover:text-[#FF4D8D]"
      >
        ❤️ {likes}
      </button>
    </article>
  );
};

export default Card;
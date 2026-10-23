export function HomePage() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-11rem)] items-center overflow-hidden rounded-sm border border-stone-700/70 bg-[#10120f] px-6 py-16 shadow-2xl shadow-black/40 sm:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(153,27,27,0.28),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(69,10,10,0.32),transparent_32%),linear-gradient(135deg,rgba(17,24,19,0.4),rgba(4,6,5,0.85))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-[linear-gradient(to_top,rgba(3,5,4,0.9),transparent),repeating-linear-gradient(90deg,transparent_0,transparent_48px,rgba(248,113,113,0.045)_49px,transparent_50px)]" />
      <div className="max-w-3xl">
        <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-red-400 before:h-px before:w-10 before:bg-red-400/70">Welcome to the town</p>
        <h1 className="max-w-2xl font-serif text-5xl font-black uppercase leading-[0.9] tracking-tight text-stone-100 drop-shadow-[0_5px_20px_rgba(0,0,0,0.85)] sm:text-7xl lg:text-8xl">Welcome to <span className="text-red-400">FROM</span>pedia</h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-stone-300 sm:text-xl">
        Explore the characters, episodes,
        and mysteries of FROM.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
          <span className="border border-stone-600 bg-stone-950/70 px-4 py-3">Enter if you dare</span>
          <span className="flex items-center gap-2 border border-red-700/60 bg-red-950/30 px-3 py-2 text-red-200 shadow-[0_0_20px_rgba(220,38,38,0.12)]">
            <span className="grid h-7 w-5 place-items-center bg-red-600 font-sans text-base font-black tracking-tighter text-white shadow-sm">N</span>
            <span>Now streaming on <strong className="font-black tracking-[0.12em] text-red-300">NETFLIX</strong></span>
          </span>
          <span className="border border-stone-700 bg-stone-950/70 px-4 py-3">Field notes: ongoing</span>
        </div>
      </div>
    </section>
  );
};

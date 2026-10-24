type CharacterCardProps = {
  name: string;
  role: string;
  image: string;
};

export function CharacterCard({ name, role, image }: CharacterCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-sm border border-stone-700/80 bg-gradient-to-br from-stone-900 to-[#10120f] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/70 hover:shadow-xl hover:shadow-red-950/20">
      <div className="absolute inset-y-0 left-0 w-1 bg-red-500/0 transition group-hover:bg-red-400" />
      <span className="mb-8 block font-mono text-[0.65rem] font-bold uppercase tracking-[0.25em] text-stone-600">Town record</span>
      <img src={image} alt={name} className="mb-4 h-56 w-full rounded-sm bg-stone-950 object-contain transition group-hover:scale-[1.02] sm:h-64" />
      <h2 className="font-serif text-2xl font-bold text-stone-100 transition group-hover:text-red-200">{name}</h2>
      <p className="mt-2 text-sm leading-6 text-stone-400">{role}</p>
    </article>
  );
}


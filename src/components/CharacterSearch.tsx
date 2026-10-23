
type CharacterSearchProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export function CharacterSearch({searchQuery,onSearchChange}: CharacterSearchProps) {

    return(
        <div>
            <label className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-stone-400" htmlFor="character-search">
                Search Characters
            </label>
            <input className="w-full border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-600 transition focus:border-red-400 focus:ring-2 focus:ring-red-400/20" type="text" id="character-search" name="character-search"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e)=>onSearchChange(e.target.value)}/>
        </div>
    )
}

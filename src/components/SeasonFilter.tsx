
type SeasonFilterProps = {
    selectedSeason: number;
    onSeasonChange: (season: number) => void;
};

export function SeasonFilter({selectedSeason, onSeasonChange,}: SeasonFilterProps) {
    const seasons = [0, 1, 2, 3, 4]; // 0 is for "All Seasons"

    return (
        <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                Selected Season:{" "}
                <span className="ml-1 text-red-300">{selectedSeason === 0 ? "All Seasons" : selectedSeason}</span>
            </p>

            <div className="flex flex-wrap gap-2">{seasons.map((season) => {
                return (
                    <button
                        className="border border-stone-700 bg-stone-950 px-3 py-2 text-xs font-bold uppercase tracking-wider text-stone-400 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 sm:px-4"
                        key={season}
                        onClick={() => onSeasonChange(season)}
                    >
                        {season === 0 ? "All Seasons" : `Season ${season}`}
                    </button>
                );
            })}</div>
        </div>
    );
}

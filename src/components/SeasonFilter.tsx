
type SeasonFilterProps = {
    selectedSeason: number;
    onSeasonChange: (season: number) => void;
};

function SeasonFilter({selectedSeason, onSeasonChange,}: SeasonFilterProps) {
    const seasons = [0, 1, 2, 3, 4]; // 0 is for "All Seasons"

    return (
        <div>
            <p>
                Selected Season:{" "}
                {selectedSeason === 0 ? "All Seasons" : selectedSeason}
            </p>

            {seasons.map((season) => {
                return (
                    <button
                        key={season}
                        onClick={() => onSeasonChange(season)}
                    >
                        {season === 0 ? "All Seasons" : `Season ${season}`}
                    </button>
                );
            })}
        </div>
    );
}

export default SeasonFilter;

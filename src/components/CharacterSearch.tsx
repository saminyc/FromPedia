
type CharacterSearchProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export function CharacterSearch({searchQuery,onSearchChange}: CharacterSearchProps) {

    return(
        <div>
            <label htmlFor="character-search">
                Search Characters
            </label>
            <input type="text" id="character-search" name="character-search" 
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e)=>onSearchChange(e.target.value)}/>
        </div>
    )
}
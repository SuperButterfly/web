import "./searchBar.css"
const SearchBar = ({handleSearchClick, search, handleSearchChange})=>{
    return(
        <div className="assets-manager-container3 ">
            <svg
                onClick={handleSearchClick}
                viewBox="0 0 1024 1024"
                className="assets-manager-icon"
            >
            <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
            </svg>
            <input
                type="text"
                placeholder="Search"
                className="assets-manager-textinput"
                value={search}
                onChange={handleSearchChange}
                onKeyUp={handleSearchChange}
            />
      </div>
    )
}

export default SearchBar
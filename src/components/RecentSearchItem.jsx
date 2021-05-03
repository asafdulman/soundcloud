
export function RecentSearchItem({ recentSearch, onSearch }) {

    return (
        <div className="recent-search-item-box" onClick={(ev) => onSearch(ev, recentSearch)}>
            <p>{recentSearch}</p>
        </div>
    )
}

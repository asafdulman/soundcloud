import { useContext } from "react"
import { SearchContext } from "../App"

export function RecentSearchItem({ recentSearch }) {

    const onSearch = useContext(SearchContext)
    return (
        <div className="recent-search-item-box" onClick={(ev) => onSearch(ev, recentSearch)}>
            <p>{recentSearch}</p>
        </div>
    )
}

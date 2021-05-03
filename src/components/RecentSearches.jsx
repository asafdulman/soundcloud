import { RecentSearchItem } from "./RecentSearchItem";

export function RecentSearches({ recentSearches }) {

    const searches = recentSearches?.slice(0, 5)

    return (
        <div className="recent-searches-box">
            <h4>Your Recent Searches</h4>
            <div className="recent-searches-list-box">
            {searches?.map((recentSearch, index) => <RecentSearchItem key={index} recentSearch={recentSearch} /> )}
            </div>
        </div>
    )
}

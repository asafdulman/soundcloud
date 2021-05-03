
export function SearchButtons({ onGetNextResults, onSetTrackListView }) {

    return (
        <div className="search-btns-box">
            <button className="next-btn" onClick={() => onGetNextResults()}>Next</button>
            <div className="list-tile-box">
            <button onClick={() => onSetTrackListView('list')}><i className="fas list-btn fa-list"></i></button>
            <button onClick={() => onSetTrackListView('tile')}><i className="fas tile-btn fa-border-all"></i></button>
            </div>
        </div>
    )
}

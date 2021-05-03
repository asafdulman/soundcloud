import img from '../assets/img/backupImg.png'


export function SearchItem({ track, onSelectTrack, selectedTrack, trackListView }) {
    return (
        <div className={selectedTrack?.id === track.id ? 'search-item-box-slide' : 'search-item-box'} onClick={() => onSelectTrack(track)}>
            {trackListView === 'list' ? <p>{track.title}</p> : <img src={track.artwork_url ? track.artwork_url : img} alt="" />}
        </div>
    )
}

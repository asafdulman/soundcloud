
import defaultImg from '../assets/img/defaultImg.gif'

export function SelectedTrack({ track, onPlayTrack, selectedTrack }) {

    return (

        <div className="selected-track-box">
            <img className="selected-track-img" onClick={() => onPlayTrack(track)} src={track?.artwork_url ? track?.artwork_url : defaultImg} alt="img" />
            <h3>Click To Play Song</h3>
        </div>
    )
}

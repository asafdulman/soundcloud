
export function Player({ trackToPlay }) {

    return (
        <div className="player-box">
            <div dangerouslySetInnerHTML={{ __html: trackToPlay.html }} />
        </div>
    )
}

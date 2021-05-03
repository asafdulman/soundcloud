import React from 'react'
import { SearchItem } from './SearchItem'

export function TrackList({ tracks, onSelectTrack, selectedTrack, trackListView }) {
    return (
        <div className={trackListView === 'list' ? 'track-list-box' : 'track-tile-box'}>
            {tracks?.map(track => <SearchItem key={track.id} track={track} selectedTrack={selectedTrack} onSelectTrack={onSelectTrack} trackListView={trackListView} />)}
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { Player } from './components/Player';
import { RecentSearches } from './components/RecentSearches';
import { SearchButtons } from './components/SearchButtons';
import { SelectedTrack } from './components/SelectedTrack';
import { TrackList } from './components/TrackList';
import { LIST_TILE_TOGGLE_VIEW, TRACKS_STORAGE_KEY } from './constants';
import { trackService } from './services/trackService';
import './assets/scss/global.scss'
import { SearchTrackBox } from './components/SearchTrackBox';


function App() {

  const [tracks, setTracks] = useState()
  const [trackToPlay, setTrackToPlay] = useState()
  const [selectedTrack, setSelectedTrack] = useState()
  const [selectedTrackImg, setSelectedTrackImg] = useState()
  const [offset, setOffset] = useState(6)
  const [searchTrackBy, setSearchTrackBy] = useState()
  const [recentSearches, setRecentSearches] = useState([])
  const [trackListView, setTrackListView] = useState()

  useEffect(() => {
    window.SC.initialize({
      client_id: 'ggX0UomnLs0VmW7qZnCzw'
    });
    setRecentSearches(trackService.loadSearchesFromStorage(TRACKS_STORAGE_KEY))
    setTrackListView(trackService.loadToggleViewFromStorage(LIST_TILE_TOGGLE_VIEW))
  }, [])


  const onSearch = async (ev, searchBy) => {
    ev.preventDefault()
    if (!searchBy) return;
    setSearchTrackBy(searchBy)
    recentSearches.length ? setRecentSearches([searchBy, ...recentSearches]) : setRecentSearches([searchBy])
    const tracksInfo = await trackService.loadTracks(searchBy)
    setTracks(tracksInfo.collection)
  }

  const onGetNextResults = async () => {
    setOffset(offset + 6)
    const tracksInfo = await trackService.loadNextTracks(searchTrackBy, offset)
    setTracks(tracksInfo.collection)
  }

  const onSelectTrack = (track) => {
    setSelectedTrack(track)
    setTimeout(() => {
      setSelectedTrackImg(track)
    }, 2000)
  }

  const onPlayTrack = async (track) => {
    const trackToEmbed = await trackService.getSongToPlay(track.permalink_url)
    setTrackToPlay(trackToEmbed)
  }

  const onSetTrackListView = (view) => {
    trackService.saveToggleViewToStorage(LIST_TILE_TOGGLE_VIEW, view)
    setTrackListView(view)
  }

  return (
    <div className="app">
      <div className="main-container">
        <div className="search-container">
          <SearchTrackBox onSearch={onSearch} />
          <TrackList tracks={tracks} onSelectTrack={onSelectTrack} selectedTrack={selectedTrack} trackListView={trackListView} />
          <SearchButtons onGetNextResults={onGetNextResults} onSetTrackListView={onSetTrackListView} />
        </div>
        <div className="selected-track-container">
          {selectedTrackImg ? <SelectedTrack track={selectedTrackImg} onPlayTrack={onPlayTrack} /> :
            <h1 className="waiting-heading">Waiting For a Tune...</h1>}
          {trackToPlay && <Player trackToPlay={trackToPlay} />}
        </div>
          <RecentSearches recentSearches={recentSearches} onSearch={onSearch} />
      </div>
    </div>
  );
}

export default App;

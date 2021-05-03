import {
    TRACKS_STORAGE_KEY
} from "../constants";

export const trackService = {
    loadTracks,
    loadNextTracks,
    loadSearchesFromStorage,
    getSongToPlay,
    loadToggleViewFromStorage,
    saveToggleViewToStorage
}

async function loadTracks(searchValue) {
    addSearchToStorage(TRACKS_STORAGE_KEY, searchValue)
    const data = await window.SC.get('/tracks', {
        q: searchValue,
        limit: 6,
        linked_partitioning: 1
    })
    return data
}

async function getSongToPlay(url) {
    const data = await window.SC.oEmbed(url, {
        auto_play: true,
        maxheight: 200
    })
    return data
}

async function loadNextTracks(searchValue, offset) {
    const data = await window.SC.get('/tracks', {
        q: searchValue,
        limit: 6,
        linked_partitioning: 1,
        offset
    })
    return data
}

function addSearchToStorage(key, searchValue) {
    let searches = loadSearchesFromStorage(TRACKS_STORAGE_KEY) ? loadSearchesFromStorage(TRACKS_STORAGE_KEY) : []
    searches = [searchValue, ...searches]
    localStorage.setItem(key, JSON.stringify(searches))
}

function loadSearchesFromStorage(key) {
    const recentSearches = localStorage.getItem(key)
    return recentSearches ? JSON.parse(recentSearches) : []
}

function saveToggleViewToStorage(key, view) {
    localStorage.setItem(key, JSON.stringify(view))
}

function loadToggleViewFromStorage(key) {
    const view = localStorage.getItem(key)
    return JSON.parse(view)
}
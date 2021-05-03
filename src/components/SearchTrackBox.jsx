import { useEffect, useRef, useState } from "react"

export function SearchTrackBox({ onSearch }) {

    const [searchBy, setSearchBy] = useState()
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <form className="search-track-box">
                <input ref={inputRef} placeholder="Search track, artist, or set" value={searchBy} onChange={(ev) => setSearchBy(ev.target.value)} type="text" />
                <button onClick={(ev) => onSearch(ev, searchBy)}><i className="fab soundcloud-icon fa-soundcloud"></i></button>
            </form>
        </div>
    )
}

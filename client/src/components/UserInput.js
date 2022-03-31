import { useState } from 'react'

function ArtistInput(props) {

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                props.setQuery(e.target.children[0]?.value)
            }}
        >
            <input className="artist-search" type="text"></input>
        </form>
    )
}

export default ArtistInput
import { useState } from 'react'
import ArtistSearch from '../components/ArtistSearch'
import SearchResults from '../components/SearchResults'

function Mapper() {
    const [searched, setSearched] = useState([])

    return (
        <>
            <ArtistSearch setSearched={setSearched} />
            <SearchResults searched={searched} />
        </>
    )
}

export default Mapper

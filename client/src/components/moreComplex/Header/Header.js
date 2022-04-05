import SearchResults from 'components/complex/SearchResults/SearchResults'
import UserInput from 'components/basic/UserInput/UserInput'
import { useState } from 'react'

function Header(props) {
    const { access_token } = props
    const [artist, setArtists] = useState([])
    const [query, setQuery] = useState(null)

    return (
        <header>
            <h1>Find your new love babyyy</h1>
            <UserInput
                access_token={access_token}
                setArtists={setArtists}
                setQuery={setQuery}
            />

            <SearchResults
                artist={artist}
                access_token={access_token}
                query={query}
            />
        </header>
    )
}

export default Header

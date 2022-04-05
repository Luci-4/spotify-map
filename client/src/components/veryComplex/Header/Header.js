import SearchResults from 'components/complex/SearchResults/SearchResults'
import UserInput from 'components/basic/UserInput/UserInput'
import style from './Header.module.scss'
import { useState } from 'react'

function Header(props) {
    const { access_token, setId } = props
    const [artist, setArtists] = useState([])
    const [query, setQuery] = useState(null)

    return (
        <>
            <header className={style.header}>
                <h1 className={style.title}>Find your new love babyyy</h1>
                <UserInput
                    access_token={access_token}
                    setArtists={setArtists}
                    setQuery={setQuery}
                />
            </header>
            <SearchResults
                artist={artist}
                access_token={access_token}
                query={query}
                setId={setId}
            />
        </>
    )
}

export default Header

import ArtistSearch from 'components/basic/ArtistSearch/ArtistSearch'
import { useEffect, useState } from 'react'

function SearchResults(props) {
    const { access_token,query } = props
    const [artists, setArtists] = useState([])
    const url = 'https://spotify-map.herokuapp.com/spotify'
    

    useEffect(() => {
        ;(async () => {
            if(query){
                const resp = await fetch(`${url}/${access_token}/artist/${query}`)
                const results = await resp.json()
                setArtists(results)
            }
        })()
    })

    return artists.map((artist, index) => <ArtistSearch key={index} {...artist} />)
}

export default SearchResults

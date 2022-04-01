import { useEffect, useState } from 'react'
import Result from './Result'
function Results(props) {
    const url = 'https://spotify-map.herokuapp.com/spotify'
    const { access_token, query, setID} = props
    const [artists, setArtists] = useState([])

    useEffect(() => {
        if (query) {
            ;(async () => {
                const res = await fetch(
                    `${url}/${access_token}/artist/${query}`,
                )
                const artistList = await res.json()
                setArtists(artistList)
            })()
        }
    }, [props])

    return (
        <ul className="results">
            {artists.map((artist, index) => (
                <Result key={index} setID={setID} {...artist} />
            ))}
        </ul>
    )
}

export default Results
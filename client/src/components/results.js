import { useEffect, useState } from 'react'
import Result from './Result'
function Results(props) {
    const url = 'https://spotify-map.herokuapp.com/spotify'
    const { access_token, query } = props
    const [artists, setArtists] = useState([])

    useEffect(() => {
        if (query) {
            ;(async () => {
                const res = await fetch(
                    `${url}/${access_token}/artist/${query}`,
                )
                const artistList = await res.json()
                console.log(artistList)
                setArtists(artistList)
            })()
        }
    }, [props])

    return (
        <ul>
            {artists.map((artist,index) => <Result key={index} {...artist}/> )}
        </ul>
    )
}

export default Results

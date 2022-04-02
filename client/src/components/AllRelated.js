import { useEffect, useState } from 'react'
import Related from './Related'

function AllRelated(props) {
    const url = 'https://spotify-map.herokuapp.com/spotify/'
    const { access_token, id } = props
    const [relArtists, setRelArtists] = useState([])

    useEffect(() => {
        ;(async () => {
            const res = await fetch(
                `${url}/${access_token}/relatedartists/${id}`,
            )
            const resJson = await res.json()
            setRelArtists(resJson)            
        })()
    }, [id])

    return (
        // Add: Title with choosen artist img/name/gernes
        <ul>
            {relArtists.map((artist, index) => (
                <Related key={index} {...artist}/>
            ))}
        </ul>
    )
}

export default AllRelated

import Artist from 'components/basic/Artist/Artist'
import { useEffect, useState } from 'react'

function Related(props) {
    const { access_token, id } = props
    const [rellatedState, setRelated] = useState([])
    const url = 'https://spotify-map.herokuapp.com/spotify'

    useEffect(() => {
        if (id) {
            ;(async () => {
                const res = await fetch(
                    `${url}/${access_token}/relatedartists/${id}`
                )
                const related = await res.json()
                setRelated(related)
            })()
        }
    }, [id])

    return rellatedState.map((artist, index) => (
        <Artist key={index} {...artist} />
    ))
}
export default Related

import { useEffect, useState } from 'react'
import Result from './Result'
function Results(props) {
    const url = 'https://spotify-map.herokuapp.com/spotify'
    const { access_token, query } = props
    const [artists, setArtists] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (query) {
            ;(async () => {
                const res = await fetch(
                    `${url}/${access_token}/artist/${query}`,
                )
                const artistList = await res.json()
                setArtists(artistList)
                setShow(true)
            })()
        }
    }, [query])

    
    return (
        <div className='results-wrapper'>
            <ul className={`results ${show ? 'show' : 'hide'}`}>
                {artists.slice(0,6).map((artist, index) => (
                    <Result key={index} {...artist} setShow={setShow}/>
                ))}
            </ul>
        </div>
    )
}

export default Results

import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { TokenContext } from '../App'

// input wrapper

const StyledInput = styled.input`
    background-color: transparent;
    color: #2c856b;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    border-right: none;
    border-left: none;
    outline: none;
    text-align: center;
    font-weight: 300;
    font-size: 2.75rem;
    height: 5rem;
    width: 100vw;
`

function ArtistSearch({setSearched}) {
    const url = 'https://spotify-map.herokuapp.com/spotify'
    const token = useContext(TokenContext)
    const [query, setQuery] = useState(null)
    // how to split this, wtf   
    useEffect(() => {
        if (query) {
            ;(async () => {
                const res = await fetch(`${url}/${token}/artist/${query}`)
                const artistList = await res.json()
                setSearched(artistList)
            })()
        }
    }, [query])

    function handleSubmit(event) {
        event.preventDefault()
        setQuery(event.target?.children[0].value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <StyledInput placeholder='Find you loved artist here' />
        </form>
    )
}

export default ArtistSearch

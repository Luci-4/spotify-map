import React, { useState,useEffect,} from 'react'
import styled from 'styled-components'
import AppRouter from './AppRouter'
import GlobalStyle from './GlobalStyle.css'

const LeftUpP = styled.p`
    font-size: 1.2rem;
    margin: 1.5rem 1rem;
    font-weight: 600;
`
export const TokenContext = React.createContext({ token: null })

function App() {
    const url = 'https://spotify-map.herokuapp.com/spotify/access'
    const [token, setToken] = useState(null)

    useEffect(() => {
        ;(async () => {
            const res = await fetch(url)
            const access_token = await res.text()
            setToken(access_token)
        })()
    }, [])
    
    return (
        <TokenContext.Provider value={token}>
            <LeftUpP>Spotify mapper</LeftUpP>
            <GlobalStyle />
            <AppRouter />
        </TokenContext.Provider>
    )
}

export default App

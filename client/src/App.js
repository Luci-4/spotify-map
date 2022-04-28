import AppRouter from './AppRouter'
import GlobalStyle from './GlobalStyle.css'
import styled from 'styled-components'
import React from 'react'

const LeftUpP = styled.p`
    font-size: 1.2rem;
    margin: 1.5rem 1rem;
    font-weight: 600;
`
const TokenContext = React.createContext({ token: null })

function App() {
    return (
        <>
            <LeftUpP>Spotify mapper</LeftUpP>
            <TokenContext.Provider>
                <GlobalStyle />
                <AppRouter />
            </TokenContext.Provider>
        </>
    )
}

export default App

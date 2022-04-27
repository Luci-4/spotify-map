import AppRouter from './AppRouter'
import GlobalStyle from './GlobalStyle.css'
import styled from 'styled-components'

const LeftUpP = styled.p`
    font-size: 1.2rem;
    margin: 1.5rem 1rem;
    font-weight: 600;
`

function App() {
    return (
        <>
            <LeftUpP>Spotify mapper</LeftUpP>
            <GlobalStyle />
            <AppRouter />
        </>
    )
}

export default App

import styled from 'styled-components'
import AppRouter from './AppRouter'

const AppDiv = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #191414;
        color: FFF;
        font-size: 22px;
        font-family: 'helvetica',sans-serif;
    }
`

function App() {
    return <AppRouter />
}

export default App

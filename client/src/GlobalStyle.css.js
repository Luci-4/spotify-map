import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #191414;
        color: #FFF;
        font-size: 22px;
        font-family: 'Montserrat','helvetica',sans-serif;
    }
`

export default GlobalStyle
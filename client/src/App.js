import { useEffect, useState } from 'react'
import Header from './components/moreComplex/Header/Header'
import './App.css'

function App() {
    const [access_token, setToken] = useState('')

    useEffect(() => {
        ;(async () => {
            const res = await fetch(
                'https://spotify-map.herokuapp.com/spotify/access'
            )
            const token = await res.text()
            setToken(token)
        })()
    }, [])

    return (
        <div id='App'>
            <Header access_token={access_token} />
        </div>
    )
}

export default App

import { useState,useEffect } from 'react'
import Header from './components/veryComplex/Header/Header'
import Main from 'components/veryComplex/Main/Main'
import './App.css'

function App() {
    const [access_token, setToken] = useState('')
    const [id, setId] = useState(null)

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
            <Header access_token={access_token} setId={setId}/>
            <Main access_token={access_token} id={id}/>
        </div>
    )
}

export default App

import './App.css'
import AllResults from './components/AllResults'
import UserInput from './components/UserInput'
import Related from './components/Related'
import React, { useState, useEffect } from 'react'

function App() {
    const url = 'https://spotify-map.herokuapp.com/spotify/access'
    const [token, setToken] = useState('')
    const [query, setQuery] = useState('')
    const [resID, setID] = useState(null)

    useEffect(() => {
        ;(async () => {
            const res = await fetch(url)
            const access_token = await res.text()
            setToken(access_token)
        })()
    }, [])

    return (
        <div id="App">
            <header>
                <h1>Discover new!</h1>
                <div>
                    <UserInput setQuery={setQuery} />
                    <AllResults query={query} access_token={token} setID={setID}/>
                </div>
            </header>
            <main>
                <Related id={resID}/>
            </main>
        </div>
    )
}

export default App

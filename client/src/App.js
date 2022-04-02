import './App.css'
import Search from './components/Search'
import UserInput from './components/UserInput'
import AllRelated from './components/AllRelated'
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
                <h1>Find your new love babe!</h1>
                <div>
                    <UserInput setQuery={setQuery} />
                    <Search query={query} access_token={token} setID={setID}/>
                </div>
            </header>
            <main>
                <AllRelated id={resID} access_token={token}/>
            </main>
        </div>
    )
}

export default App

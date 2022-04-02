import './App.css'
import AllResults from './components/AllResults'
import UserInput from './components/UserInput'
import React, { useState, useEffect } from 'react'

function App() {
    const url = 'https://spotify-map.herokuapp.com/spotify/access'
    const [token, setToken] = useState('')
    const [query,setQuery] = useState('')

    useEffect(() => {
        (async () => {
            const res = await fetch(url)
            const access_token = await res.text()
            setToken(access_token)
        })();
    },[])
    
    return (
        <div id='App'>
            <header>
                <h1>Discover new!</h1>
                <div>
                    <UserInput setQuery = {setQuery}/>
                </div>
            </header>
            <AllResults query={query} access_token={token} />
        </div>
    )
}

export default App
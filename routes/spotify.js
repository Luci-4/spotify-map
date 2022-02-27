var express = require('express');
var router = express.Router();
require('dotenv').config();
var axios = require('axios').default;
const spotify_my_client_id = process.env.SPOTIFY_MY_CLIENT_ID;
const spotify_my_client_secret = process.env.SPOTIFY_MY_CLIENT_SECRET;
var access_token;

router.get('/access', function(req, res) {
    const url =  'https://accounts.spotify.com/api/token'
    const data = {
        grant_type: 'client_credentials',
        client_id: spotify_my_client_id,
        client_secret: spotify_my_client_secret
    }
    const headers = {
        headers: {

        "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    const authRes = axios
        .post(
            url,
            (new URLSearchParams(data)).toString(),
            headers
        )
        .then(response => {
            access_token = response.data.access_token
            res.send()
        })
        .catch(error => {
            console.error(error)
            res.status(502).send()
        })
})

router.get('/artist/:query', async function(req, res) {
    const artistName = req.params.query
    const url = "https://api.spotify.com/v1/search"
    const params = {
        q: artistName,
        type: "artist",
        limit: "50"
    }
    const headers = {
        headers: {
            "Authorization": `Bearer ${access_token}`,
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const searchRes = axios
        .get(
            `${url}?${new URLSearchParams(params).toString()}`,
            headers
        )
        .then(response => {
            res.json(response.data.artists.items)
        }) 
        .catch(error => {
            console.error(error)
            res.status(502).json()
        })
})
module.exports = router;
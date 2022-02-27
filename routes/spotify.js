var express = require('express');
var router = express.Router();
require('dotenv').config();
var axios = require('axios').default;
const spotify_my_client_id = process.env.SPOTIFY_MY_CLIENT_ID;
const spotify_my_client_secret = process.env.SPOTIFY_MY_CLIENT_SECRET;

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
            const access_token = response?.data?.access_token || ""
            res.send(access_token)
        })
        .catch(error => {
            console.error(error)
            res.status(502).send()
        })
})

router.get('/:accesstoken/artist/:query', async function(req, res) {
    const artistName = req.params.query
    const access_token = req.params.accesstoken
    const url = "https://api.spotify.com/v1/search"
    const params = {
        q: artistName,
        type: "artist",
        limit: "50"
    }
    const headers = {
        headers: {
            "Authorization": `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    }

    const searchRes = axios
        .get(
            `${url}?${new URLSearchParams(params).toString()}`,
            headers
        )
        .then(response => {
            const items = response?.data?.artists?.items || []
            res.json(items)
        }) 
        .catch(error => {
            console.error(error)
            res.status(502).json()
        })
})
router.get("/:accesstoken/relatedartists/:id", async function(req, res) {
    const id = req.params.id
    const access_token = req.params.accesstoken
    const url = `https://api.spotify.com/v1/artists/${id}/related-artists`
    const headers = {
        headers: {
            "Authorization": `Bearer ${access_token}`,
            'Content-Type': 'application/json'
        }
    }

    const relatedRes = axios
        .get(
            url,
            headers
        )
        .then(response => {
            const artists = response?.data?.artists || [];
            res.json(artists)
        })
        .catch(error => {
            console.error(error)
            res.status(502).json()
        })
})

module.exports = router;
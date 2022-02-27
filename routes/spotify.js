var express = require('express');
var router = express.Router();
require('dotenv').config();
const spotify_my_client_id = process.env.SPOTIFY_MY_CLIENT_ID;
const spotify_my_client_secret = process.env.SPOTIFY_MY_CLIENT_SECRET;
var access_token;
const rootUrl = "";

router.get("/access/:redirecttarget/:code", async function(req, res) {
    const redirectTarget = req.params.redirecttarget
    const code = req.params.code;

    const url = `https://accounts.spotify.com/api/token`

    const headers = {
        headers: {

            "Content-Type": "application/x-www-form-urlencoded",
        }
    };
    let data = {

        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectTarget,
        client_id: spotify_my_client_id,
        client_secret: spotify_my_client_secret
    }

    const authRes = axios
        .post(
            url,
            (new URLSearchParams(data)).toString(),
            headers
        )
        .then(response => {
            access_token = response.data.access_token;
            res.send()
        })
        .catch(error => {
            res.status(502).send()
        })
})

router.get('/login/:redirecttarget', function(req, res) {
    const redirectTarget = req.params.redirecttarget
    console.log(redirectUri + redirectTarget)
    var scopes = 'user-read-private playlist-modify-private playlist-read-private user-read-email';
    var redirectUrl = 'https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + spotify_my_client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(rootUrl + redirectTarget);
    const res_obj = {
      url: redirectUrl
    }
    res.json(res_obj)
})

module.exports = router;
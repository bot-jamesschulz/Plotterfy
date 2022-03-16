const express = require('express')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')
const axios = require('axios')
const app = express()
const path = require('path')
app.use(cors())

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Creates new SpotifyWebApi object and sets parameters
const spotifyApi = new SpotifyWebApi({
 redirectUri: 'https://plotterfy.herokuapp.com/callback',
 clientId: '4958b6cfcfb84f00b2c12417c0fb767d',
 clientSecret:  '08ed2cc05e9f41508223a2a59eb34b1e'
});

const scopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify'
];

// Sends authorization URL back to front end which then redirects
//  user to login page.
app.get('/login', (req, res) => {
 console.log("1")
 res.send(spotifyApi.createAuthorizeURL(scopes))
 console.log("2")
});

// After login, user is sent to callback route
app.get('/callback', (req, res) => {
 
 const error = req.query.error;
 const code = req.query.code;
 const state = req.query.state;

 if (error) {
   console.error('Callback Error:', error);
   res.send(`Callback Error: ${error}`);
   return;
 }
 // Gets access token using wrapper method
 spotifyApi
   .authorizationCodeGrant(code)
   .then(data => {
     const access_token = data.body['access_token'];
     const refresh_token = data.body['refresh_token'];
     const expires_in = data.body['expires_in'];
      
     spotifyApi.setAccessToken(access_token);
     spotifyApi.setRefreshToken(refresh_token);

     console.log('access_token:', access_token);
     console.log('refresh_token:', refresh_token);

     console.log(
       `Sucessfully retreived access token. Expires in ${expires_in} s.`
     );
        
     setInterval(async () => {
       const data = await spotifyApi.refreshAccessToken();
       const access_token = data.body['access_token'];

       console.log('The access token has been refreshed!');
       console.log('access_token:', access_token);
       spotifyApi.setAccessToken(access_token);
     }, expires_in / 2 * 1000);

   
     const string = encodeURIComponent('success')
     res.redirect('https://plotterfy.herokuapp.com/?valid=' + string)
     
   })
   .catch(error => {
     console.error('Error getting Tokens:', error);
     res.send(`Error getting Tokens: ${error}`);
   });
});

app.get('/topsongs', (req, res) => {
 console.log("topsongs: 1")
 //request top tracks
 spotifyApi
     .getMyTopTracks({limit: 50})
     .then(function(data) {
       
       let topTracks = data.body.items // array of track data objects
       
       // array of objects to store track info in
       let trackNames = topTracks.map((x, index)=> {
         var track = new Object()
         track.image = x.album.images.length > 0 ? x.album.images[0].url : ""
         track.id = index + 1
         track.name = x.name
         track.artists = x.album.artists.map(y => y.name)
         track.url = x.external_urls.spotify
         return track
       })
       console.log(trackNames) // check data

       res.send(trackNames) // send array

     }, function(err) {
       console.log('Something went wrong!', err);
     }); 
   // End top tracks request
 console.log("topsongs: 2")
});

app.get('/topsongs/shortterm', (req, res) => {
 //request top tracks
 spotifyApi
     .getMyTopTracks({time_range: "short_term", limit: 50})
     .then(function(data) {
     
       let topTracks = data.body.items // array of track data objects
       
       // array of objects to store track info in
       let trackNames = topTracks.map((x, index)=> {
         var track = new Object()
         track.image = x.album.images.length > 0 ? x.album.images[0].url : ""
         track.id = index + 1
         track.name = x.name
         track.artists = x.album.artists.map(y => y.name)
         track.url = x.external_urls.spotify
         return track
       })
       console.log(trackNames) // check data
 
       res.send(trackNames) // send array
     }, function(err) {
       console.log('Something went wrong!', err);
     }); 
   // End top tracks request
});

app.get('/songs/recommendations', (req, res) => {
 console.log("recommendations: start")

 spotifyApi
   .getMyTopTracks({time_range: "short_term", limit: 5})
   .then(function(data) {

     let trackIds
     let topTracks = data.body.items // array of track data objects
     
   
     trackIds = topTracks.map(track => track.id)
     //console.log("Track ID's: ", trackIds) // check data



   spotifyApi
     .getRecommendations({
       min_energy: 0.4,
       seed_tracks: trackIds,
       min_popularity: 50,
       limit: 50
     })
     .then(function(data) {
       
       let recommendations = data.body.tracks;

       let trackInfo = recommendations.map((x, index)=> {
         let track = {
         image: x.album.images.length > 0 ? x.album.images[0].url : "",
         id: index + 1,
         name: x.name,
         artists: x.artists.map(y => y.name),
         url: x.external_urls.spotify
         }
         return track
       })
       //let names = recommendations.tracks.map(track => track.name)
       console.log("Recommendation: ", trackInfo);

       res.send(trackInfo)

       console.log("recommendations: finish")
     }, function(err) {
       console.log("Something went wrong!", err);
     });
     
 });

   }, function(err) {
     console.log('Something went wrong!', err);
}); 
   
 
app.get('/artists/artist-guesser', (req, res) => {
console.log("Artist guesser start")

let topArtists
let artistInfo

spotifyApi.getMyTopArtists({limit: 49, offset: 0})
 .then(function(data) {
   topArtists = data.body.items


   spotifyApi.getMyTopArtists({limit: 50, offset: 49})
   .then(function(data) {

     topArtists.push(...data.body.items)
     //console.log("AFTER CONCATENATION: ", topArtists)
     artistInfo = topArtists.map( (artist, index) => {
       let info = {
          id: index + 1,
          name: artist.name,
          followers: artist.followers.total,
          image: artist.images.length > 0 ? (artist.images[0].url) : ""
       }
       return info
     })
       

     console.log(artistInfo)
 
     res.send(artistInfo)
   console.log("Artist guesser finish")
   }, function(err) {
     console.log('Something went wrong!', err);
 });

   
 }, function(err) {
   console.log('Something went wrong!', err);
});

});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
 
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
})
//.env file for Spotify app credentials
require('dotenv').config();
//Spotify module
var Spotify = require('node-spotify-api');
var chalk = require('chalk');
//Spotify keys
var keys = require('../SpotifyKey.js');
var spotify = new Spotify(keys.spotify);
var spotifyThis = function (userSearch) {
//Display instrunctions for how to use Spotify function
    if (userSearch === '') {
                console.log(chalk.red(`
\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
***USER INPUT ERROR***     
You need to input a song title.
Ex: spotify-this-song "Song Title"
\\\\\\\\\\\\\\\\\\\\\\\\\\`));
    } else {
        spotify.search({ type: 'track', query: userSearch }, function (err, data) {
            if (err) {
                return console.log(err);
            }
            var songData = data.tracks.items[0];
//Display Spotify data
            var spotifyData =chalk.blue( `
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Artist(s)     : ${songData.artists[0].name}
Song Title    : ${songData.name}
Album         : ${songData.album.name}
Song Preview  : ${songData.preview_url}
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`);
            console.log(chalk.green('Song Chosen: ' + chalk.yellow(userSearch)),spotifyData);
        });
    }
}
module.exports = {
    song: spotifyThis
}
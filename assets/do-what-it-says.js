//File System module
var fs = require('fs');
//chalk module
var chalk = require('chalk');
//Call different Liri functions
var concertThis = require('./concert');
var spotifyThis = require('./spotify');
var movieThis = require('./movie');
var doWhatItSays = function () {
    //read random.text file to display "I Want It That Way"
    fs.readFile('random.txt', 'utf-8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var dataArray = data.split(',');
        var command = dataArray[0];
        var userSearch = dataArray[1].trim();
        switch (command) {
            case 'concert-this':
                concertThis.concert(userSearch);
                break;
            case 'spotify-this-song':
                spotifyThis.song(userSearch);
                break;
            case 'movie-this':
                movieThis.movie(userSearch);
                break;
            default:
                console.log(chalk.red('Uhoh... something broke!'));
                break;
        }
    });
};
module.exports = {
    doIt: doWhatItSays
};
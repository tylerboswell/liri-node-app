//specify different liri commands
var concert = require('./assets/concert');
var spotify = require('./assets/spotify');
var movie = require('./assets/movie');
var doWhatItSays = require('./assets/do-what-it-says')
//chalk module
var chalk = require('chalk');
//dotenv
require('dotenv').config();
// user input variables
var userRequest = process.argv;
var userRequestSplice = userRequest.splice(0, 3);
var liriOutput = userRequestSplice[2];
let userSearch = userRequest.join(' ');
//Possible Liri outputs. Used Daniel Elston's idea of using 'switch' for each process
switch (liriOutput) {
    case 'concert-this':
        concert.concert(userSearch);
        break;
    case 'spotify-this-song':
        spotify.song(userSearch);
        break;
    case 'movie-this':
        movie.movie(userSearch);
        break;
    case 'do-what-it-says':
        doWhatItSays.doIt();
        break;
    default:
        console.log(chalk.red(`
        Sorry, that is not a valid command. Try one of the following:
        ///////////////////////////////////////////////////////////
        -concert-this "name of artist"
        -spotify-this-song "song title"
        -movie-this "movie title"
        -do-what-it-says
        ///////////////////////////////////////////////////////////`));
        break;
}
//request module
var request = require('request');
//chalk module
var chalk = require('chalk');
var movie = function (userSearch) {
//Default to Mr. Nobody if there is no user input
    if (userSearch === '') {
        userSearch = 'mr.nobody';
    };
    var searchArray = userSearch.split(' ');
    var search = searchArray.join('+');
    var url = "http://www.omdbapi.com/?apikey=trilogy&t=" + search;
    request(url, function (err, res, data) {
        if (err) {
            return console.log(err);
        }
    var movieData = JSON.parse(data);
//Display returned movie data
    var movieResults = chalk.blue(`
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    **Movie Data**
Movie Title     :   ${movieData.Title}
Release Year    :   ${movieData.Year}
IMDB Link       :   ${movieData.imdbRating}
Rotten Tomatoes :   ${movieData.Ratings[1].Value}
Country         :   ${movieData.Country}
Language        :   ${movieData.Language}
Plot            :   ${movieData.Plot}
Actors          :   ${movieData.Actors}
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`);
        console.log(chalk.green('Movie Chosen: ' + chalk.yellow(userSearch)),movieResults);
    });
}
module.exports = {
    movie: movie
}
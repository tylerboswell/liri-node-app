//request module
var request = require('request');
//moment module
var moment = require('Moment');
//chalk module
var chalk = require('chalk')
//call Bands in town API
var concert = function (userSearch) {
    request("https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp", function (err, data, body) {
        if (err) {
            return console.log("Error: " + err);
        }
var info = JSON.parse(body);
//Throw error if no tour dates are found   
    if (info.length === 0) {
            console.log(chalk.red(`
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Sorry, we could not find any tour dates. Try another band!
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`));
         }
            else {
             console.log(chalk.green('Concerts for ' + chalk.yellow(userSearch)))
            info.forEach(function (key) {
                var loggedResults =chalk.blue( `
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\               
Venue    : ${key.venue.name}
City, State : ${key.venue.city} ${key.venue.region}
Date     : ${moment(key.datetime).format('MMM-Do-YYYY')}
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`);
                console.log(loggedResults);
            });

            console.log
        }
    });
}
module.exports = {
    concert: concert
}
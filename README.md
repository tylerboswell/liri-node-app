Hello! This is my Liri Bot!

This console application will return relevant data based on user input.

User syntax:
node liri [command] "user input"

*User commands*

Spotify-this-song "song name": This command will use the Spotify API return the Artis, Album, Song title, and a previe of the song entered by the user.

concert-this "artist name": This command will search the Bands In Town api to find concert information for the artist.

movie-this "movie name": This command will use the omdbapi to gather data about the movie. If the user does not enter a move, Liri will return data for Mr. Nobody

do-what-it-says: This command will read the random.txt file in the repository. The file currently requests spotif-this-song "I want it that way"

*Node Modules Used*
FS (file system)
Spotify api
Moment
Request
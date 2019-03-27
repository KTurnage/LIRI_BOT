require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs")
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);

// You should then be able to access your keys information like so
// console.log(key.spotify)

//===================//
var request;
var action;

// //create functions for each of the 4 commands
function concertThis(request) {
    var queryBandURL = "https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp";
    axios.get(queryBandURL)
        .then(function (response) {
            if (response.data.length < 10) {
                var length = response.data.length;
            } else {
                var length = 10;
            }
            for (i = 0; i < length; i++) {
                console.log(`Venue: ${response.data[i].venue.name}`);
            }
        })
};

function movieThis(request) {
    if (!request) {
        request = "Mr. Nobody";
        console.log("If you haven't watched 'Mr. Nobody' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }
    var queryMovieURL = "http://www.omdbapi.com/?t=" + request + "&y=&plot=short&apikey=trilogy";
    axios.get(queryMovieURL).then(function (response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
        console.log("Production Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    })
};

function spotifyThisSong(request) {
    spotify.search({ type: 'track', query: request }, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        if (response.tracks.items.length < 10) {
            var length = response.tracks.items.length;
        } else {
            var length = 10;
        }
        for (i = 0; i < length; i++) {
            console.log(`Artist: ${response.tracks.items[i].artists[0].name}`);
            console.log(`Song Name: ${response.tracks.items[i].name}`);
            console.log(`Preview Link: ${response.tracks.items[1].preview_url}`);
            console.log(`Album Title: ${response.tracks.items[i].album.name}`);
        }
    });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        var txt = data.split(',');
        spotifyThisSong(txt[1]);
        // concertThis(txt[1]);
        // movieThis(txt[1]);
    });
}


function start() {
    switch (process.argv[2]) {
        case "concert-this":
            concertThis(process.argv[3]);
            break;
        case "spotify-this-song":
            spotifyThisSong(process.argv[3]);
            break;
        case "movie-this":
            movieThis(process.argv[3]);
            break;
        case "do-what-it-says":
            doWhatItSays();
        default:
            console.log("Invalid");
    }
}
start();

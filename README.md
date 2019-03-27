# LIRI_BOT

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## LIRI uses the following commands:
spotify-this-song

movie-this

concert-this

do-what-it-says

## Demo 
https://drive.google.com/file/d/12lRSNysxH7GVqrTUpPQsoKdxmC87egrt/view
<figure>
<iframe src="https://drive.google.com/file/d/12lRSNysxH7GVqrTUpPQsoKdxmC87egrt/preview" width="640" height="480"></iframe>
</figure>

## Technologies Used:
Node.js

Javascript

npm packages:

Node-Spotify-API

dotenv

Axios

Moment

## How to Run LIRI-Bot
Step One: node liri concert-this <band or artist>

This will show all upcoming concerts in your terminal/bash window.

Step Two: node liri spotify-this-song <song name>

This will show the following information about the song in your terminal/bash window:

Artist Name
The song's name

A preview link of the song from Spotify

The album that the song is from

Step Three: node liri.js movie-this <movie name>.

This will show the following information about the song in your terminal/bash window:

Title of the movie.

Year the movie came out.

IMDB Rating of the movie.

Rotton Tomatoes rating.

Country where the movie was produced.

Language of the movie.

Plot of the movie.

Actors in the movie.

Step Four: node liri.js do-what-it-says

This will output the command placed in random.txt file

## Author
Krista Turnage

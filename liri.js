require("dotenv").config();

var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('spotify');
var inquirer = require('inquirer');
var omdb = require('omdb');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


inquirer
  .prompt([
{
  type: "list",
  message: "What do you want to look up?",
  choices: ["movie", "twitter", "song"],
  name: "prompt"
},
{
  type: "input",
  message: "Search:",
  name: "search"
},
 
])
.then(function(inquirerResponse) {
  if (inquirerResponse.prompt.movie) {
      if (prompt === "movie") {
      inquirer.prompt([ 
        {
        type: "input",
        message: "Year:",
        name: "year"
        },
      ])
    console.log("Not yet")
  };
  if (inquirerResponse.prompt.twitter) {
    Twitter()
  };
  if (inquirerResponse.prompt.song) {
    Spotify()
  }
};

var params = {screen_name: 'name'};
client.get('statuses/user_timeline', params, function Twitter(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function Spotify(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
});

omdb.get({ title: 'Saw', year: 2004 }, true, function(err, movie) {
  if(err) {
      return console.error(err);
  }

  if(!movie) {
      return console.log('Movie not found!');
  }

  console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
  console.log(movie.plot);
});
})
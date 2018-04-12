require("dotenv").config();

var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('spotify');
var inquirer = require('inquirer');
var omdb = require('omdb');

function Spotify(song) {
  this.song = song;
}

function Twitter(twitter) {
  this.twitter = twitter;
}

function Year(year) {
    this.year = year;
}
    
function Title(title) {
    this.title = title;
}


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var year = new Year
var title = new Title


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
      inquirer.movie.push(Title);
      inquirer.year.push(Year);

  omdb.get({ title: 'title', year: "year" }, true, function(err, movie) {
    if(err) {
      return console.error(err);
      }
      
    if(!movie) {
      return console.log('Movie not found!');
      }
      
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);
     });

  }
  if (inquirerResponse.prompt.twitter) {
    inquirer.twitter.push(Twitter);
  var params = {screen_name: 'twitter'};
  client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);
  console.log(response);  

});
                
  }
  if  (inquirerResponse.prompt.song) {
    inquirer.song.push(Spotify);

  spotify.search({ type: 'song', query: 'dancing in the moonlight' }, function Spotify(err, data) {
  if ( err ) {
  console.log('Error occurred: ' + err);
  return;
      }
  });
  }
};
})
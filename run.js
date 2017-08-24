var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

var liriCommand = process.argv[2];
var mediaChoice = process.argv[3];


if (liriCommand === 'my-tweets') {


    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: 'M6cd7fpK2miScr4b3ebtXiqEk',
        consumer_secret: 'Kqt2yxq5JDo6vcTE0xZoMql9rnwczoKWg6y0z6W5Le5CItPIRU',
        access_token_key: '898016280917139457-Wu0mBm4V83pQ9hYJS5LjYTLOmIyrJCu',
        access_token_secret: 'nF0WX8XnclqqKvkNE0ENOyutHhuvm9Rc8EhRVWdd2JiF8'
    });

    var params = {
        screen_name: 'JoseMUCIBC'
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log("Here are your tweets");
            console.log(tweets[0].text);
            console.log(tweets[1].text);
            console.log(tweets[2].text);
            console.log(tweets[3].text);
            //   console.log(tweets[0].text);
            //   console.log(tweets[0].text);
            //   console.log(tweets[0].text);
            //   console.log(tweets[0].text);
        } else {
            throw error
        }
    });
}

if (liriCommand === 'spotify-this-song') {
    var Spotify = require('node-spotify-api');

    var spotify = new Spotify({
        id: '7fcaaf93c24740bc85a25b5761720879',
        secret: '6b194edbf95a4f88b8c4b53a25ffdc7d'
    });

    spotify.search({
        type: 'track',
        query: mediaChoice
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("------------------------" + "\nHere are your results:" + "\n------------------------")
        console.log("Artist: " + data.tracks.items[0].artists[0].name + "\nSong:   " + data.tracks.items[0].name + "\nLink:   " + data.tracks.items[0].external_urls.spotify + "\nAlbum:  " + data.tracks.items[0].album.name + "\n------------------------------------");
        console.log("Artist: " + data.tracks.items[1].artists[0].name + "\nSong:   " + data.tracks.items[1].name + "\nLink:   " + data.tracks.items[1].external_urls.spotify + "\nAlbum:  " + data.tracks.items[1].album.name + "\n------------------------------------");
        console.log("Artist: " + data.tracks.items[2].artists[0].name + "\nSong:   " + data.tracks.items[2].name + "\nLink:   " + data.tracks.items[2].external_urls.spotify + "\nAlbum:  " + data.tracks.items[2].album.name + "\n------------------------------------");
        console.log("Artist: " + data.tracks.items[3].artists[0].name + "\nSong:   " + data.tracks.items[3].name + "\nLink:   " + data.tracks.items[3].external_urls.spotify + "\nAlbum:  " + data.tracks.items[3].album.name + "\n------------------------------------");
        console.log("Artist: " + data.tracks.items[4].artists[0].name + "\nSong:   " + data.tracks.items[4].name + "\nLink:   " + data.tracks.items[4].external_urls.spotify + "\nAlbum:  " + data.tracks.items[4].album.name + "\n------------------------------------");
        console.log("Artist: " + data.tracks.items[5].artists[0].name + "\nSong:   " + data.tracks.items[5].name + "\nLink:   " + data.tracks.items[5].external_urls.spotify + "\nAlbum:  " + data.tracks.items[5].album.name + "\n------------------------------------");
        console.log("Artist: " + data.tracks.items[6].artists[0].name + "\nSong:   " + data.tracks.items[6].name + "\nLink:   " + data.tracks.items[6].external_urls.spotify + "\nAlbum:  " + data.tracks.items[6].album.name + "\n------------------------------------");
        console.log("Artist: " + data.tracks.items[7].artists[0].name + "\nSong:   " + data.tracks.items[7].name + "\nLink:   " + data.tracks.items[7].external_urls.spotify + "\nAlbum:  " + data.tracks.items[7].album.name + "\n------------------------------------");
        console.log("Artist: " + data.tracks.items[8].artists[0].name + "\nSong:   " + data.tracks.items[8].name + "\nLink:   " + data.tracks.items[8].external_urls.spotify + "\nAlbum:  " + data.tracks.items[8].album.name + "\n------------------------------------");
        console.log("Artist: " + data.tracks.items[9].artists[0].name + "\nSong:   " + data.tracks.items[9].name + "\nLink:   " + data.tracks.items[9].external_urls.spotify + "\nAlbum:  " + data.tracks.items[9].album.name + "\n------------------------------------");

    });
}

if (liriCommand === 'spotify-this-song') {
}
let twit = require('twit');
let config = require('./config.js');
console.log('The bot is starting');

let T = new twit(config);
let count = 0;
tweetRandom();
setInterval(tweetRandom, 1000 * 10);

function tweetRandom() {
    let coin = ['Heads', 'Tails'];
    count++;
    let tweet = { status: `Tweet #${count} ${coin[Math.floor(Math.random() * 2)]}` };
    console.log(tweet.status);
    T.post('statuses/update', tweet, tweeted);
}

function tweeted(err, data, response) {
    if (err) {
        console.log(err);
    } else {
        console.log('Tweet successful');
    }
}
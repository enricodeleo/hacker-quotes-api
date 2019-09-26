const hackerQuotes = require('hacker-quotes');
const cors = require('micro-cors')();

module.exports = cors(() => {
  const min = Math.ceil(0);
  const max = Math.floor(hackerQuotes.length);
  const index = Math.floor(Math.random() * (max - min)) + min;

  return {
    quote: hackerQuotes[index].quote || hackerQuotes[index].qoute,
    author: hackerQuotes[index].cite,
  };
});
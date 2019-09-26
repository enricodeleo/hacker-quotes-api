const hackerQuotes = require('hacker-quotes');

module.exports = () => {
  const min = Math.ceil(0);
  const max = Math.floor(hackerQuotes.length);
  const index = Math.floor(Math.random() * (max - min)) + min;

  return hackerQuotes[index];
};
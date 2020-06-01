import { v4 as uuidv4 } from "uuid";

const key = "quotes";

export function seed() {
  localStorage.removeItem(key);
  createQuote("To be or not be...");
  createQuote("I have a dream...");
  createQuote("Hey ho, let's go...");
}

export function readAllQuotes() {
  return JSON.parse(localStorage.getItem(key)) || [];
}

export function readRandomQuote() {
  const quotes = readAllQuotes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}

export function createQuote(text, id = uuidv4()) {
  var quotes = readAllQuotes();

  var newQuote = {
    id,
    text
  };

  quotes.push(newQuote);

  storeQuotes(quotes);
}

export function updateQuote(id, text) {
  deleteQuote(id);
  createQuote(text, id);
}

export function deleteQuote(id) {
  var quotes = readAllQuotes();
  quotes = quotes.filter(quote => quote.id !== id);
  storeQuotes(quotes);
}

function storeQuotes(quotes) {
  localStorage.setItem(key, JSON.stringify(quotes));
}

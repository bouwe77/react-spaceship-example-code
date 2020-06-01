import React, { useState, useEffect } from "react";
import Box from "./Box";

export default function Quotes() {
  const [text, setText] = useState();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    console.log("document title has changed");
    document.title = text;
  }, [text]);

  function getRandomQuote() {
    const quotes = ["To be or not be...", "I have a dream...", "Hey ho, let's go..."];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    setText(quote);
  }

  return (
    <>
      <div>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      </div>
      <div>
        <button onClick={getRandomQuote}>Get random quote</button>
      </div>
      {text && <Box text={text} />}
    </>
  );
}

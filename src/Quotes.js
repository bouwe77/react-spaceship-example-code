import React, { useState, useEffect } from "react";
import Box from "./Box";
import { readRandomQuote } from "./api";

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
    const quote = readRandomQuote();
    setText(quote.text);
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

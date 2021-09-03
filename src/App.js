import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "✌": "victory",
  "👏": "clapping",
  "😡": "angry",
  "😈": "devil"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInput(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this on our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1>emojipedia</h1>
      <input onChange={emojiInput} />

      <h3>{meaning}</h3>

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.9rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <h4>Select one emoji at a time</h4>
    </div>
  );
}
